import { createObserver } from '../utils/observer.js';

/**
 * Navigation Module
 * Handles smooth scrolling, active section highlighting, and accessible mobile menu navigation.
 */

export function initNavigation() {
    initSmoothScrolling();
    initActiveSectionHighlighting();
    initMobileMenu();
}

/**
 * Smooth scrolling for navigation links with accessible focus movement.
 */
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });

                // Focus target element or heading for accessibility
                const heading = targetElement.querySelector('h1, h2, h3') || targetElement;
                if (heading) {
                    heading.setAttribute('tabindex', '-1');
                    heading.focus({ preventScroll: true });
                }

                // Close mobile menu if open
                closeMobileMenu();
            }
        });
    });
}

/**
 * Highlights active navigation link based on current section visible in viewport.
 */
function initActiveSectionHighlighting() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    if (!sections.length || !navLinks.length) return;

    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    };

    const sectionObserver = createObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    const isMatch = link.getAttribute('href') === `#${id}`;
                    if (isMatch) {
                        link.setAttribute('aria-current', 'page');
                        link.classList.add('text-ice-blue');
                        link.classList.remove('text-on-surface-variant');
                    } else {
                        link.removeAttribute('aria-current');
                        link.classList.remove('text-ice-blue');
                        link.classList.add('text-on-surface-variant');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
}

/**
 * Accessible Mobile Navigation Menu logic.
 */
function initMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!menuToggle || !mobileMenu) return;

    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    // Close mobile menu on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
            closeMobileMenu();
            menuToggle.focus();
        }
    });
}

function openMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (!menuToggle || !mobileMenu) return;

    menuToggle.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('flex');
}

function closeMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (!menuToggle || !mobileMenu) return;

    menuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
}
