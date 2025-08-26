# Show/Hide Password

A minimal example that demonstrates toggling a password field between hidden and visible.

Preview
- Enter a password into the field and click the "Show" / "Hide" button.

Files
- [index.html](index.html) — HTML layout and styles.
- [script.js](script.js) — JavaScript that toggles the password visibility.

How it works
- The script grabs the input and button elements (`id="passwordInput"` and `id="toggleBtn"`) as [`passwordInput`](script.js) and [`toggleBtn`](script.js).
- Clicking the button toggles `passwordInput.type` between `"password"` and `"text"` and updates the button text.

Usage
1. Open [index.html](index.html) in a browser.
2. Type a password and click the button to toggle visibility.

Customization
- Change styles in [index.html](index.html).
- Update behavior in [script.js](script.js) by modifying how [`passwordInput`](script.js) and [`toggleBtn`](script.js) are handled (e.g., add an accessible label, animations, or icon).
