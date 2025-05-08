const textElement = document.getElementById("text");
const texts = ["Web Developer!"];
let index = 0;
let charIndex = 0;
let isDeleting = false;

let i = 0;

function type() {
  const currentText = texts[index];

  if (isDeleting) {
    charIndex--;
    textElement.textContent = currentText.substring(0, charIndex);
  } else {
    charIndex++;
    textElement.textContent = currentText.substring(0, charIndex);
  }

  let typeSpeed = isDeleting ? 50 : 150;

  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 1000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % texts.length;
    typeSpeed = 500;
  }

  if (i < 13) {
    setTimeout(type, typeSpeed);
    i++;
  } else {
    textElement.style.borderRight = "none";
  }
}

type();

////////////////////////

const thumbnailContainers = document.querySelectorAll(".thumbnail-container");

let clickNum = 0;

document.querySelectorAll(".video-container").forEach((container) => {
  let clickNum = 0;
  const video = container.querySelector("video");
  const thumbnail = container.querySelector(".thumbnail");
  const overlay = container.querySelector(".thumbnail-overlay");

  container.addEventListener("click", () => {
    clickNum += 1;
    if (clickNum % 2 === 1) {
      setTimeout(() => {
        thumbnail.style.display = "none";
        video.style.display = "block";
        video.play();
      }, 100);
    } else {
      setTimeout(() => {
        if (overlay) overlay.style.display = "none";
        video.currentTime = 0;
        video.pause();
        video.style.display = "none";
        thumbnail.style.display = "block";
      }, 100);
    }
  });
});

thumbnailContainers.forEach((thumbnailContainer) => {
  const overlay = thumbnailContainer.querySelector(".thumbnail-overlay");
  thumbnailContainer.addEventListener("mouseleave", function () {
    overlay.style.display = "flex";
  });
});

const menuToggle = document.getElementById("menu-toggle");
const fullscreenMenu = document.getElementById("fullscreen-menu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("open");
  fullscreenMenu.classList.toggle("active");
});

// Menü dışına tıklanınca kapat
fullscreenMenu.addEventListener("click", (e) => {
  if (e.target === fullscreenMenu) {
    fullscreenMenu.classList.remove("active");
    menuToggle.classList.remove("open");
  }
});

// Menü linkine tıklanınca da kapansın
document.querySelectorAll(".fullscreen-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    fullscreenMenu.classList.remove("active");
    menuToggle.classList.remove("open");
  });
});
