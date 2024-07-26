class MobileNavbar {
  constructor(mobileMenuBtn, navList, navLinks) {
    this.mobileMenuBtn = document.querySelector(mobileMenuBtn);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenuBtn.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenuBtn.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenuBtn) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu-btn",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();

// scripts.js
document.addEventListener("DOMContentLoaded", function () {
  var floatingButton = document.getElementById("floating-button");
  var messageBox = document.getElementById("message-box");
  var closeMessageBox = document.getElementById("close-message-box");

  // Mostrar a janela de mensagem ao clicar no botão flutuante
  floatingButton.addEventListener("click", function () {
    messageBox.style.display = "block";
  });

  // Fechar a janela de mensagem ao clicar no botão de fechar
  closeMessageBox.addEventListener("click", function () {
    messageBox.style.display = "none";
  });
});

$(document).ready(() => {
  $(".carrosel").slick({
    infinite: true,
    dots: true,
    prevArrow: "",
    nextArrow: "",
    appendDots: "",
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});