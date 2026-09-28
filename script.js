const menuButton =
  document.getElementById("menuButton");

const mobileMenu =
  document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });
}


const videoButton =
  document.getElementById("videoButton");

if (videoButton) {
  videoButton.addEventListener("click", () => {
    alert("GoldenGetaways video coming soon.");
  });
}


const showSignup =
  document.getElementById("showSignup");