document.addEventListener("DOMContentLoaded", function () {
  const darkModeBtn = document.getElementById("darkModeBtn");
  const body = document.body;

  // Check for saved user preference and apply it
  const darkModeEnabled = localStorage.getItem("dark-mode") === "true";
  if (darkModeEnabled) {
    body.classList.add("dark-mode");
    darkModeBtn.classList.remove("btn-light");
    darkModeBtn.classList.add("btn-dark");
    darkModeBtn.textContent = "Toggle Light Mode";
  }

  // Toggle dark mode on button click
  darkModeBtn.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    const isDarkMode = body.classList.contains("dark-mode");

    // Update button styles
    if (isDarkMode) {
      darkModeBtn.classList.remove("btn-light");
      darkModeBtn.classList.add("btn-dark");
      darkModeBtn.textContent = "Toggle Light Mode";
    } else {
      darkModeBtn.classList.remove("btn-dark");
      darkModeBtn.classList.add("btn-light");
      darkModeBtn.textContent = "Toggle Dark Mode";
    }

    // Save user preference
    localStorage.setItem("dark-mode", isDarkMode);
  });
});
