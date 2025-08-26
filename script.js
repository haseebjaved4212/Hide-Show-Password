const passwordInput = document.getElementById("passwordInput");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";
  toggleBtn.textContent = isPassword ? "Hide" : "Show";
});