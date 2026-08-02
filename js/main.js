import { initDecoder } from './modules/decoder.js';
import { initTelemetry } from './modules/telemetry.js';
import { initNavigation } from './modules/navigation.js';
import { initFormHandler } from './modules/form-handler.js';
import { initScrollReveals } from './utils/observer.js';

/**
 * Main application entry point for Kessler-Voss Extractive web application.
 */
document.addEventListener('DOMContentLoaded', () => {
    initScrollReveals();
    initDecoder();
    initTelemetry();
    initNavigation();
    initFormHandler();
});

