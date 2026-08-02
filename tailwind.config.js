/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./index.html",
        "./js/**/*.js"
    ],
    theme: {
        extend: {
            colors: {
                "outline-variant": "#45474a",
                "surface-container": "#201f22",
                "surface-container-high": "#2a2a2c",
                "secondary-container": "#005158",
                "on-tertiary-fixed": "#1e1d00",
                surface: "#131316",
                "on-background": "#e5e1e5",
                "inverse-on-surface": "#313033",
                "error-container": "#93000a",
                "surface-container-lowest": "#0e0e10",
                "primary-container": "#c5c6ca",
                "on-error-container": "#ffdad6",
                "surface-bright": "#3a393b",
                "surface-dim": "#131316",
                error: "#ffb4ab",
                "on-tertiary": "#333206",
                "surface-container-low": "#1c1b1e",
                "on-primary-fixed-variant": "#45474a",
                "on-primary": "#2e3134",
                "on-primary-container": "#505256",
                "surface-variant": "#353437",
                "surface-container-highest": "#353437",
                "secondary-fixed-dim": "#92d1d9",
                tertiary: "#e9e5a9",
                "secondary-fixed": "#adedf5",
                "on-surface-variant": "#c5c6ca",
                "primary-fixed-dim": "#c5c6ca",
                "on-tertiary-fixed-variant": "#4a481b",
                secondary: "#fffbbd",
                "tertiary-fixed": "#e9e5a9",
                "inverse-surface": "#e5e1e5",
                "on-primary-fixed": "#191c1f",
                "on-secondary-container": "#84c3ca",
                "on-secondary": "#00363b",
                background: "#131316",
                "tertiary-fixed-dim": "#ccc98f",
                "on-surface": "#e5e1e5",
                "on-secondary-fixed": "#001f23",
                "primary-fixed": "#e1e2e6",
                "on-tertiary-container": "#565426",
                "on-secondary-fixed-variant": "#004f56",
                "on-error": "#690005",
                outline: "#8f9194",
                "inverse-primary": "#5c5e62",
                "tertiary-container": "#ccc98f",
                primary: "#b2f2fa",
                "surface-tint": "#c5c6ca",
                "ice-blue": "#b2f2fa",
                "void-black": "#0e0e10",
                "regolith-light": "#8f9194",
                "sulfur-glow": "#fffbbd"
            },
            borderRadius: {
                DEFAULT: "0.25rem",
                lg: "0.5rem",
                xl: "0.75rem",
                full: "9999px"
            },
            spacing: {
                "margin-desktop": "64px",
                "margin-mobile": "16px",
                "container-max": "1440px",
                gutter: "24px"
            },
            fontFamily: {
                headline: ["Orbitron", "sans-serif"],
                display: ["Orbitron", "sans-serif"],
                body: ["Inter", "sans-serif"],
                label: ["JetBrains Mono", "monospace"]
            }
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries'),
    ],
};
