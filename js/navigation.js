/**
 * Small World Daycare - Accessible Navigation
 * 
 * This script provides keyboard-accessible mobile navigation
 * with proper ARIA attributes and focus management
 */

(function() {
    'use strict';

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        setupMobileMenu();
        setupDropdownMenus();
        setupFocusManagement();
        setupSmoothScrolling();
        setupBackToTop();
    }

    /**
     * Setup mobile menu toggle with accessibility features
     */
    function setupMobileMenu() {
        const toggle = document.querySelector('.mobile-menu-toggle');
        const nav = document.querySelector('.main-nav');
        
        if (!toggle || !nav) return;

        toggle.addEventListener('click', function(e) {
            e.stopPropagation();
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
            
            // Toggle aria-expanded attribute
            toggle.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle active class on nav
            nav.classList.toggle('active');
            
            // Manage focus
            if (!isExpanded) {
                // Menu is opening - focus first link
                const firstLink = nav.querySelector('a');
                if (firstLink) {
                    setTimeout(() => firstLink.focus(), 100);
                }
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInside = toggle.contains(event.target) || nav.contains(event.target);
            
            if (!isClickInside && nav.classList.contains('active')) {
                toggle.setAttribute('aria-expanded', 'false');
                nav.classList.remove('active');
            }
        });

        // Close menu on Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && nav.classList.contains('active')) {
                toggle.setAttribute('aria-expanded', 'false');
                nav.classList.remove('active');
                toggle.focus();
            }
        });

        // Close mobile menu when window is resized to desktop size
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && nav.classList.contains('active')) {
                toggle.setAttribute('aria-expanded', 'false');
                nav.classList.remove('active');
            }
        });
    }

    /**
     * Setup accessible dropdown menus
     */
    function setupDropdownMenus() {
        const dropdowns = document.querySelectorAll('.has-dropdown');
        
        dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('a');
            const menu = dropdown.querySelector('.dropdown-menu');
            
            if (!link || !menu) return;

            // Only handle arrow key navigation
            link.addEventListener('keydown', function(e) {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    const firstItem = menu.querySelector('a');
                    if (firstItem) firstItem.focus();
                }
            });

            // Handle menu item keyboard navigation
            const menuItems = menu.querySelectorAll('a');
            menuItems.forEach((item, index) => {
                item.addEventListener('keydown', function(e) {
                    if (e.key === 'ArrowDown') {
                        e.preventDefault();
                        const next = menuItems[index + 1];
                        if (next) next.focus();
                    } else if (e.key === 'ArrowUp') {
                        e.preventDefault();
                        const prev = menuItems[index - 1];
                        if (prev) {
                            prev.focus();
                        } else {
                            link.focus();
                        }
                    } else if (e.key === 'Escape') {
                        e.preventDefault();
                        link.focus();
                    }
                });
            });
        });
    }

    /**
     * Enhanced focus management for keyboard navigation
     */
    function setupFocusManagement() {
        // Add visible focus indicator class when using keyboard
        let isUsingKeyboard = false;

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Tab') {
                isUsingKeyboard = true;
                document.body.classList.add('keyboard-nav');
            }
        });

        document.addEventListener('mousedown', function() {
            isUsingKeyboard = false;
            document.body.classList.remove('keyboard-nav');
        });

        // Trap focus in modal-like elements if needed (future enhancement)
        // This is a placeholder for potential modal dialogs
    }

    /**
     * Smooth scrolling for anchor links (with reduced motion check)
     */
    function setupSmoothScrolling() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (prefersReducedMotion) {
            // User prefers reduced motion - skip smooth scrolling
            return;
        }

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Skip if href is just '#'
                if (href === '#') {
                    e.preventDefault();
                    return;
                }

                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    
                    // Smooth scroll to target
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Set focus to target for keyboard users
                    // Make sure target is focusable
                    if (!target.hasAttribute('tabindex')) {
                        target.setAttribute('tabindex', '-1');
                    }
                    target.focus();
                }
            });
        });
    }

    /**
     * Announce page changes to screen readers (for SPA-like behavior)
     * Currently not used, but available for future enhancements
     */
    function announceToScreenReader(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.classList.add('visually-hidden');
        announcement.textContent = message;
        
        document.body.appendChild(announcement);
        
        // Remove after announcement
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }

    /**
     * Setup Back to Top button
     * Shows button when user scrolls down, hides when at top
     */
    function setupBackToTop() {
        const backToTopBtn = document.getElementById('back-to-top');
        
        if (!backToTopBtn) return;

        // Show/hide button based on scroll position
        function toggleBackToTop() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }

        // Check on scroll
        window.addEventListener('scroll', toggleBackToTop);
        
        // Check on page load
        toggleBackToTop();

        // Scroll to top when clicked
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            
            if (prefersReducedMotion) {
                // Jump to top instantly for users who prefer reduced motion
                window.scrollTo(0, 0);
            } else {
                // Smooth scroll to top
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
            
            // Remove focus from the button
            backToTopBtn.blur();
        });
    }

})();
