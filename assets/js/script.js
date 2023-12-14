function showMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.style.visibility = "visible";
  mobileMenu.style.animation = "slidedown 1s forwards";

  function animationEndHandler() {
    mobileMenu.removeEventListener("animationend", animationEndHandler);
  }

  mobileMenu.addEventListener("animationend", animationEndHandler);
}

function hideMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.style.animation = "slideup 1s forwards";

  function animationEndHandler() {
    mobileMenu.style.visibility = "hidden";
    mobileMenu.removeEventListener("animationend", animationEndHandler);
    removeAnimation();
  }

  mobileMenu.addEventListener("animationend", animationEndHandler);
}

function removeAnimation() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.style.animation = "";
}

const accordionContent = document.querySelectorAll(".accordion");
accordionContent.forEach((item, index) => {
  let header = item.querySelector("header");
  header.addEventListener("click", () => {
    item.classList.toggle("open");

    let description = item.querySelector(".accordion__description");
    let chevron = item.querySelector(".accordion__chevron");
    if (item.classList.contains("open")) {
      description.style.height = `${description.scrollHeight}px`;
      description.style.margin = "20px 0 0 0";
      chevron.src = "./assets/svg/chevron-up.svg";
      chevron.alt = "chevron up";
    } else {
      description.style.height = "0px";
      description.style.margin = "0";
      chevron.src = "./assets/svg/chevron-down.svg";
      chevron.alt = "chevron down";
    }
  });
});
