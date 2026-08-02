/**
 * Creates and returns a configured IntersectionObserver instance.
 * @param {Function} callback - Function called when observed targets cross the threshold.
 * @param {Object} [options] - Custom IntersectionObserver options.
 * @returns {IntersectionObserver}
 */
export function createObserver(callback, options = {}) {
    const defaultOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15,
        ...options
    };

    return new IntersectionObserver((entries, observer) => {
        callback(entries, observer);
    }, defaultOptions);
}

/**
 * Convenience helper to initialize scroll reveals on target elements.
 * @param {string} selector - Query selector string for reveal elements.
 * @param {Object} [options] - Custom IntersectionObserver options.
 */
export function initScrollReveals(selector = '.reveal', options = {}) {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll(selector);

    if (isReducedMotion) {
        elements.forEach(el => el.classList.add('active'));
        return;
    }

    const observer = createObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, options);

    elements.forEach(el => observer.observe(el));
}
