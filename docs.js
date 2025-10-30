/**
 * Documentation Page JavaScript
 * Handles theme toggle, sidebar navigation, and scroll tracking
 */

(function() {
	'use strict';

	// DOM Elements
	const elements = {
		themeToggle: document.getElementById('themeToggle'),
		sidebarLinks: document.querySelectorAll('.sidebar-link'),
		sections: document.querySelectorAll('.doc-section')
	};

	// Initialize
	function init() {
		setupTheme();
		setupSidebarNavigation();
		setupScrollTracking();
	}

	// Theme Management
	function setupTheme() {
		loadThemePreference();
		elements.themeToggle.addEventListener('click', toggleTheme);
	}

	function toggleTheme() {
		const isDark = document.documentElement.classList.contains('dark-mode');

		if (isDark) {
			// Switch to light mode
			document.documentElement.classList.remove('dark-mode');
			document.documentElement.classList.add('light-mode', 'light-mode-set');
			localStorage.setItem('theme', 'light');
		} else {
			// Switch to dark mode
			document.documentElement.classList.remove('light-mode', 'light-mode-set');
			document.documentElement.classList.add('dark-mode');
			localStorage.setItem('theme', 'dark');
		}
	}

	function loadThemePreference() {
		const savedTheme = localStorage.getItem('theme');
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
			document.documentElement.classList.add('dark-mode');
			document.documentElement.classList.remove('light-mode', 'light-mode-set');
		} else if (savedTheme === 'light') {
			document.documentElement.classList.add('light-mode', 'light-mode-set');
			document.documentElement.classList.remove('dark-mode');
		}
	}

	// Sidebar Navigation
	function setupSidebarNavigation() {
		elements.sidebarLinks.forEach(link => {
			link.addEventListener('click', handleSidebarClick);
		});
	}

	function handleSidebarClick(e) {
		const targetId = e.currentTarget.getAttribute('href');

		if (targetId && targetId.startsWith('#')) {
			e.preventDefault();
			const targetElement = document.querySelector(targetId);

			if (targetElement) {
				// Smooth scroll to target
				const offset = 100; // Account for sticky header
				const elementPosition = targetElement.getBoundingClientRect().top;
				const offsetPosition = elementPosition + window.pageYOffset - offset;

				window.scrollTo({
					top: offsetPosition,
					behavior: 'smooth'
				});

				// Update URL without scrolling
				history.pushState(null, null, targetId);
			}
		}
	}

	// Scroll Tracking
	function setupScrollTracking() {
		// Check on load if there's a hash in URL
		if (window.location.hash) {
			setTimeout(() => {
				const targetElement = document.querySelector(window.location.hash);
				if (targetElement) {
					const offset = 100;
					const elementPosition = targetElement.getBoundingClientRect().top;
					const offsetPosition = elementPosition + window.pageYOffset - offset;
					window.scrollTo({
						top: offsetPosition,
						behavior: 'smooth'
					});
				}
			}, 100);
		}

		// Track scroll position and update active link
		let ticking = false;

		window.addEventListener('scroll', () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					updateActiveLink();
					ticking = false;
				});
				ticking = true;
			}
		});

		// Initial update
		updateActiveLink();
	}

	function updateActiveLink() {
		const scrollPosition = window.scrollY + 150; // Offset for header

		let currentSection = null;

		// Find the current section
		elements.sections.forEach(section => {
			const sectionTop = section.offsetTop;
			const sectionBottom = sectionTop + section.offsetHeight;

			if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
				currentSection = section;
			}
		});

		// Update active class on sidebar links
		if (currentSection) {
			const currentId = '#' + currentSection.id;

			elements.sidebarLinks.forEach(link => {
				const linkTarget = link.getAttribute('href');

				if (linkTarget === currentId) {
					link.classList.add('active');
				} else {
					link.classList.remove('active');
				}
			});
		}
	}

	// Start the application
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}

})();
