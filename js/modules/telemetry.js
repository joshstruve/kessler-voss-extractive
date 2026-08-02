/**
 * Telemetry Module
 * Manages live signal simulation and status indicators with WCAG 2.1 AA accessibility updates.
 */

export function initTelemetry() {
    const signalEl = document.getElementById('signal-status');
    const packetEl = document.getElementById('packet-value');
    const signalStates = ["STABLE", "FLUCTUATING", "REACQUIRING"];

    if (signalEl) {
        // Ensure ARIA live region attribute is present for screen readers
        if (!signalEl.hasAttribute('aria-live')) {
            signalEl.setAttribute('aria-live', 'polite');
            signalEl.setAttribute('aria-atomic', 'true');
        }

        setInterval(() => {
            if (Math.random() > 0.8) {
                const randomState = signalStates[Math.floor(Math.random() * signalStates.length)];
                signalEl.textContent = randomState;

                if (randomState !== "STABLE") {
                    signalEl.classList.remove('text-ice-blue');
                    signalEl.classList.add('text-error');
                    setTimeout(() => {
                        signalEl.textContent = "STABLE";
                        signalEl.classList.remove('text-error');
                        signalEl.classList.add('text-ice-blue');
                    }, 1200);
                }
            }
        }, 3000);
    }

    if (packetEl) {
        if (!packetEl.hasAttribute('aria-live')) {
            packetEl.setAttribute('aria-live', 'polite');
            packetEl.setAttribute('aria-atomic', 'true');
        }

        setInterval(() => {
            const newVal = 97 + Math.floor(Math.random() * 4);
            packetEl.textContent = newVal;
        }, 4500);
    }
}
