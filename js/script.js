const projectsBtn = document.getElementById("projectsBtn");

if (projectsBtn) {
  projectsBtn.addEventListener("click", function () {
    window.location.href = "projects.html";
  });
}

const contactBtn = document.getElementById("contactBtn");

if (contactBtn) {
  contactBtn.addEventListener("click", function () {
    window.location.href = "contact.html";
  });
}

const homeButton = document.getElementById("homeButton");

if (homeButton) {
  homeButton.addEventListener("click", function () {
    window.location.href = "index.html";
  });
}