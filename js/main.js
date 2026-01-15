// main.js

document.addEventListener("DOMContentLoaded", () => {
  const homeBtn = document.getElementById("home-btn");
  const demosBtn = document.getElementById("demos-btn");
  const homePage = document.getElementById("home-page");
  const demosPage = document.getElementById("demos-page");

  function showPage(pageToShow) {
    // Hide all pages
    document.querySelectorAll(".page-content").forEach(page => {
      page.classList.remove("active");
    });

    // Show selected page
    pageToShow.classList.add("active");
  }

  // Event listeners
  homeBtn.addEventListener("click", () => {
    showPage(homePage);
    homeBtn.classList.add("bg-blue-600", "text-white");
    homeBtn.classList.remove("text-blue-600", "border", "border-blue-600");

    demosBtn.classList.remove("bg-blue-600", "text-white");
    demosBtn.classList.add("text-blue-600", "border", "border-blue-600");
  });

  demosBtn.addEventListener("click", () => {
    showPage(demosPage);
    demosBtn.classList.add("bg-blue-600", "text-white");
    demosBtn.classList.remove("text-blue-600", "border", "border-blue-600");

    homeBtn.classList.remove("bg-blue-600", "text-white");
    homeBtn.classList.add("text-blue-600", "border", "border-blue-600");
  });
});

