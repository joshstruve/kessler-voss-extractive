import { createObserver } from '../utils/observer.js';

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*!<>[]{}|\\";

/**
 * Runs text decode effect on an element.
 * @param {HTMLElement} element 
 */
export function decodeEffect(element) {
    if (element.dataset.isAnimating === 'true' || element.classList.contains('decoded')) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) {
        element.classList.add('decoded');
        element.style.opacity = '1';
        element.style.visibility = 'visible';
        return;
    }

    element.dataset.isAnimating = 'true';
    element.classList.add('animating');

    const originalHTML = element.innerHTML;
    const textContent = element.textContent.replace(/\s+/g, ' ').trim();
    element.innerText = '';

    let frame = 0;
    const duration = 25;
    const totalFrames = textContent.length;
    const revealSpeed = 1.5;

    const interval = setInterval(() => {
        let currentText = '';
        for (let i = 0; i < totalFrames; i++) {
            if (i < frame / revealSpeed) {
                currentText += textContent[i];
            } else if (i < (frame / revealSpeed) + 4) {
                currentText += textContent[i] === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)];
            } else {
                currentText += '';
            }
        }

        element.innerText = currentText;

        if (frame / revealSpeed >= totalFrames) {
            clearInterval(interval);
            element.innerHTML = originalHTML;
            element.classList.remove('animating');
            element.classList.add('decoded');
            element.dataset.isAnimating = 'false';
        }
        frame++;
    }, duration);
}

/**
 * Initializes IntersectionObserver to trigger decodeEffect on elements with .decode-text
 */
export function initDecoder() {
    const elements = document.querySelectorAll('.decode-text');
    if (!elements.length) return;

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReducedMotion) {
        elements.forEach(el => {
            el.classList.add('decoded');
            el.style.opacity = '1';
            el.style.visibility = 'visible';
        });
        return;
    }

    const observer = createObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const type = target.getAttribute('data-decode-type');
                const isHeader = ['H1', 'H2', 'H3'].includes(target.tagName);
                const isEyebrow = type === 'eyebrow' || type === 'heading';

                if (isHeader || isEyebrow) {
                    decodeEffect(target);
                } else {
                    target.classList.add('decoded');
                }
            }
        });
    });

    elements.forEach(el => observer.observe(el));
}
