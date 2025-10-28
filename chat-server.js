#!/usr/bin/env node

/**
 * Kalm Chat Server
 *
 * A simple WebSocket chat server using Kalm
 *
 * Installation:
 *   npm install kalm @kalm/ws
 *
 * Usage:
 *   node chat-server.js
 */

const Kalm = require('kalm');
const ws = require('@kalm/ws');

// Configuration
const PORT = 9001;
const HOST = 'kalm-github-io.onrender.com';
const CHANNEL = 'chat';

// Create server
const server = Kalm.listen({
	port: PORT,
	host: HOST,
	transport: ws(),
});

// Store connected clients
const clients = new Set();
let clientCounter = 0;

// Server ready
server.on('ready', () => {
	console.log('╔═══════════════════════════════════════╗');
	console.log('║     Kalm Chat Server Started          ║');
	console.log('╚═══════════════════════════════════════╝');
	console.log('');
	console.log(`  🚀 Server listening on ${HOST}:${PORT}`);
	console.log(`  🔌 Transport: WebSocket`);
	console.log(`  📡 Channel: ${CHANNEL}`);
	console.log('');
	console.log('  Waiting for connections...');
	console.log('');
});

// Handle new connections
server.on('connection', (client) => {
	clientCounter++;
	const clientId = clientCounter;

	clients.add(client);

	console.log(`[${new Date().toLocaleTimeString()}] ✅ Client #${clientId} connected (Total: ${clients.size})`);

	// Subscribe client to chat channel
	client.subscribe(CHANNEL);

	// Send welcome message
	client.write(CHANNEL, {
		type: 'system',
		message: 'Welcome to Kalm Chat! You are now connected.',
		timestamp: Date.now()
	});

	// Broadcast join notification to all other clients
	server.broadcast(CHANNEL, {
		type: 'system',
		message: `A new user has joined the chat`,
		timestamp: Date.now()
	});

	// Handle messages from this client
	client.on(CHANNEL, (data) => {
		console.log(`[${new Date().toLocaleTimeString()}] 💬 ${data.user || 'Anonymous'}: ${data.message}`);

		// Broadcast to all clients
		server.broadcast(CHANNEL, {
			user: data.user || 'Anonymous',
			message: data.message,
			timestamp: data.timestamp || Date.now()
		});
	});

	// Handle disconnection
	client.on('disconnect', () => {
		clients.delete(client);
		console.log(`[${new Date().toLocaleTimeString()}] ❌ Client #${clientId} disconnected (Total: ${clients.size})`);

		// Broadcast leave notification
		server.broadcast(CHANNEL, {
			type: 'system',
			message: `A user has left the chat`,
			timestamp: Date.now()
		});
	});

	// Handle errors
	client.on('error', (err) => {
		console.error(`[${new Date().toLocaleTimeString()}] ⚠️  Client #${clientId} error:`, err.message);
	});
});

// Handle server errors
server.on('error', (err) => {
	console.error('');
	console.error('❌ Server error:', err.message);
	console.error('');

	if (err.code === 'EADDRINUSE') {
		console.error(`Port ${PORT} is already in use. Please:`);
		console.error(`  - Stop any other server running on port ${PORT}`);
		console.error(`  - Or change the PORT in this file`);
		process.exit(1);
	}
});

// Graceful shutdown
process.on('SIGINT', () => {
	console.log('');
	console.log('');
	console.log('🛑 Shutting down server...');
	console.log(`   Disconnecting ${clients.size} client(s)...`);

	// Notify all clients
	server.broadcast(CHANNEL, {
		type: 'system',
		message: 'Server is shutting down',
		timestamp: Date.now()
	});

	// Give clients time to receive the message
	setTimeout(() => {
		console.log('   Goodbye!');
		process.exit(0);
	}, 500);
});

process.on('SIGTERM', () => {
	console.log('🛑 Server terminated');
	process.exit(0);
});

// Handle uncaught errors
process.on('uncaughtException', (err) => {
	console.error('');
	console.error('❌ Uncaught exception:', err);
	console.error('');
	process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
	console.error('');
	console.error('❌ Unhandled rejection at:', promise);
	console.error('   Reason:', reason);
	console.error('');
});
