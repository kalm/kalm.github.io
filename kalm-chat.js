/**
 * Kalm Chat Client - Using Kalm Framework
 * Requires Kalm and @kalm/ws to be loaded via script tags
 */

(function() {
	'use strict';

	// Configuration
	const KALM_SERVER_HOST = 'kalm-github-io.onrender.com';
	// const KALM_SERVER_HOST = '0.0.0.0';  // Local debug
	const KALM_SERVER_PORT = 443;
	const CHANNEL = 'chat';

	// State
	let client = null;
	let isConnected = false;
	let username = 'Anonymous';
	let reconnectAttempts = 0;
	const MAX_RECONNECT_ATTEMPTS = 5;
	let reconnectTimeout = null;
	let forceDisconnect = false;

	// DOM Elements
	const elements = {
		themeToggle: document.getElementById('themeToggle'),
		connectButton: document.getElementById('connectButton'),
		usernameInput: document.getElementById('usernameInput'),
		messageInput: document.getElementById('messageInput'),
		sendButton: document.getElementById('sendButton'),
		chatMessages: document.getElementById('chatMessages'),
		connectionStatus: document.getElementById('connectionStatus'),
		connectedUsers: document.getElementById('connectedUsers'),
	};

	// Initialize
	function init() {
		// Check if Kalm is loaded
		if (typeof kalm === 'undefined') {
			addSystemMessage('Error: Kalm framework not loaded. Please check your internet connection.');
			return;
		}

		setupEventListeners();
		loadThemePreference();
		loadUsername();

		setTimeout(connect, 150);
	}

	// Event Listeners
	function setupEventListeners() {
		elements.themeToggle.addEventListener('click', toggleTheme);
		elements.connectButton.addEventListener('click', toggleConnection);
		elements.sendButton.addEventListener('click', sendMessage);
		elements.messageInput.addEventListener('keypress', handleKeyPress);
		elements.usernameInput.addEventListener('change', handleUsernameChange);
	}

	// Theme Management
	function toggleTheme() {
		const isDark = document.body.classList.contains('dark-mode');

		if (isDark) {
			// Switch to light mode
			document.body.classList.remove('dark-mode');
			document.body.classList.add('light-mode');
			document.documentElement.classList.add('light-mode-set');
			localStorage.setItem('theme', 'light');
		} else {
			// Switch to dark mode
			document.body.classList.remove('light-mode');
			document.body.classList.add('dark-mode');
			document.documentElement.classList.remove('light-mode-set');
			localStorage.setItem('theme', 'dark');
		}
	}

	function loadThemePreference() {
		const savedTheme = localStorage.getItem('theme');
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
			document.body.classList.add('dark-mode');
			document.body.classList.remove('light-mode');
		} else if (savedTheme === 'light') {
			document.body.classList.add('light-mode');
			document.body.classList.remove('dark-mode');
			document.documentElement.classList.add('light-mode-set');
		}
	}

	// Username Management
	function handleUsernameChange(e) {
		username = e.target.value.trim() || 'Anonymous';
		localStorage.setItem('username', username);
	}

	function loadUsername() {
		const savedUsername = localStorage.getItem('username');
		if (savedUsername) {
			username = savedUsername;
			elements.usernameInput.value = savedUsername;
		}
	}

	// Connection Management
	function toggleConnection() {
		if (isConnected) {
			forceDisconnect = true;
			disconnect();
		} else {
			forceDisconnect = false;
			connect();
		}
	}

	function connect() {
		// Check if Kalm is available
		if (typeof kalm === 'undefined') {
			addSystemMessage('Error: Kalm framework not loaded.');
			return;
		}

		if (client) {
			try {
				client.destroy();
			} catch (e) {
				// Ignore errors on disconnect
			}
			client = null;
		}

		updateConnectionStatus('connecting', 'Connecting...');

		try {
			// Create Kalm client
			client = kalm.connect({
				host: KALM_SERVER_HOST,
				port: KALM_SERVER_PORT,
				transport: ws({ cert: 1, key: 1, socketTimeout: 1000 * 60 * 15 }),
			});

			// Set up event handlers
			setupClientHandlers();

		} catch (error) {
			addSystemMessage('Error: ' + error.message);
			updateConnectionStatus('disconnected', 'Disconnected');
			console.error('Connection error:', error);
		}
	}

	function setupClientHandlers() {
		if (!client) return;

		// Connection established
		client.on('connect', handleConnect);

		// Disconnection
		client.on('disconnect', handleDisconnect);

		// Errors
		client.on('error', handleError);

		// Chat messages
		client.subscribe(CHANNEL, handleChatMessage);
	}

	function handleConnect() {
		isConnected = true;
		reconnectAttempts = 0;
		updateConnectionStatus('connected', 'Connected');
		addSystemMessage('Connected to server!');
		updateUI();
	}

	function handleDisconnect() {
		isConnected = false;
		updateConnectionStatus('disconnected', 'Disconnected');
		updateUI();
		attemptReconnect();
	}

	function handleError(error) {
		console.error('Kalm client error:', error);
		addSystemMessage('Connection error: ' + (error.message || 'Unknown error'));
	}

	function handleChatMessage(data) {
		// Handle different message types
		if (data.type === 'system') {
			// addSystemMessage(data.message);
			updateConnectedCount(data.connections);

		} else if (data.user && data.message) {
			addChatMessage(data);
		}
	}

	function disconnect() {
		if (reconnectTimeout) {
			clearTimeout(reconnectTimeout);
			reconnectTimeout = null;
		}

		if (client) {
			try {
				client.destroy();
			} catch (e) {
				// Ignore errors
			}
			client = null;
		}

		isConnected = false;
		reconnectAttempts = 0;
		updateConnectionStatus('disconnected', 'Disconnected');
		updateUI();
		addSystemMessage('Disconnected from server.');
	}

	function attemptReconnect() {
		if (forceDisconnect) return;

		if (reconnectTimeout) {
			clearTimeout(reconnectTimeout);
		}

		if (reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
			reconnectAttempts++;
			const delay = Math.min(1000 * Math.pow(2, reconnectAttempts), 10000);

			addSystemMessage('Reconnecting in ' + (delay / 1000) + ' seconds... (Attempt ' + reconnectAttempts + '/' + MAX_RECONNECT_ATTEMPTS + ')');

			reconnectTimeout = setTimeout(connect, delay);
		} else {
			addSystemMessage('Max reconnection attempts reached. Please click Connect to try again.');
		}
	}

	// Message Handling
	function sendMessage() {
		const message = elements.messageInput.value.trim();

		if (!message || !isConnected || !client) {
			return;
		}

		const messageData = {
			user: username,
			message: message,
			timestamp: Date.now()
		};

		try {
			// Send via Kalm
			client.write(CHANNEL, messageData);

			// Clear input
			elements.messageInput.value = '';
			elements.messageInput.focus();
		} catch (error) {
			console.error('Error sending message:', error);
			addSystemMessage('Error sending message: ' + error.message);
		}
	}

	function handleKeyPress(e) {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			sendMessage();
		}
	}

	// UI Updates
	function updateConnectionStatus(status, text) {
		elements.connectionStatus.className = 'connection-status';
		if (status === 'connected') {
			elements.connectionStatus.classList.add('connected');
		}
		elements.connectionStatus.querySelector('.status-text').textContent = text;
	}

	function updateConnectedCount(count) {
		elements.connectedUsers.querySelector('.status-text').textContent = `${count} User${count > 1 ? 's' : ''} connected`;
	}

	function updateUI() {
		const isDisabled = !isConnected;

		elements.messageInput.disabled = isDisabled;
		elements.sendButton.disabled = isDisabled;

		elements.connectButton.textContent = isConnected ? 'Disconnect' : 'Connect to Server';
		elements.connectButton.classList.toggle('connected', isConnected);
	}

	function addChatMessage(data) {
		const messageDiv = document.createElement('div');
		messageDiv.className = 'chat-message';

		// Check if this is our own message
		if (data.user === username) {
			messageDiv.classList.add('own-message');
		}

		const userSpan = document.createElement('div');
		userSpan.className = 'message-user';
		userSpan.textContent = data.user;

		const textDiv = document.createElement('div');
		textDiv.className = 'message-text';
		textDiv.textContent = data.message;

		const timeSpan = document.createElement('div');
		timeSpan.className = 'message-time';
		timeSpan.textContent = formatTime(data.timestamp);

		messageDiv.appendChild(userSpan);
		messageDiv.appendChild(textDiv);
		messageDiv.appendChild(timeSpan);

		elements.chatMessages.appendChild(messageDiv);
		scrollToBottom();
	}

	function addSystemMessage(message) {
		const messageDiv = document.createElement('div');
		messageDiv.className = 'system-message';

		const iconSpan = document.createElement('span');
		iconSpan.className = 'message-icon';
		iconSpan.textContent = 'ℹ️';

		const textSpan = document.createElement('span');
		textSpan.textContent = message;

		messageDiv.appendChild(iconSpan);
		messageDiv.appendChild(textSpan);

		elements.chatMessages.appendChild(messageDiv);
		scrollToBottom();
	}

	function scrollToBottom() {
		elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
	}

	function formatTime(timestamp) {
		if (!timestamp) {
			timestamp = Date.now();
		}

		const date = new Date(timestamp);
		const hours = date.getHours().toString().padStart(2, '0');
		const minutes = date.getMinutes().toString().padStart(2, '0');
		return hours + ':' + minutes;
	}

	// Start the application
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}

	// Clean up on page unload
	window.addEventListener('beforeunload', function() {
		if (client) {
			try {
				client.destroy();
			} catch (e) {
				// Ignore errors
			}
		}
		if (reconnectTimeout) {
			clearTimeout(reconnectTimeout);
		}
	});

})();
