
window.onload = function () {

  // ativa os eventos de click no menu
  const nav = document.querySelector("#header nav");
  const toggle = document.querySelectorAll("nav .toggle");
  for (const element of toggle) {
    element.addEventListener("click", function () {
      nav.classList.toggle("show");
    });
  }
  // ocultar menu ao selecionar uma opcao
  const links = document.querySelectorAll('nav ul li a')
  for (const link of links) {
    link.addEventListener('click', function () {
      console.log(1111);
      nav.classList.remove('show')
    })
  }

  const voltarParaTopoButton = document.querySelector(".back-to-top");
  const sections = document.querySelectorAll("main section[id]");

  // ativa o swiper
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      767: {
        slidesPerView: 2,
        setWrapperSize: true,
      },
    },
  });

  // ativa o ScrollReveal
  const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 700,
    reset: true,
  });
  scrollReveal.reveal(
    `#inicio .image, #inicio .text,
  #sobre .image, #sobre .text,
  #servicos header, #servicos .card,
  #portfolio header, #portfolio .portfolio
  #contato .text, #contato .links,
  footer .brand, footer .social
  `,
    { interval: 100 }
  );

  // tratamentos no scroll da landing page
  window.addEventListener("scroll", function () {
    voltarParaTopo(voltarParaTopoButton);
    ativarMenuDuranteScroll(sections);
  });

};

function voltarParaTopo(voltarParaTopoButton) {
  if (window.scrollY >= 560) {
    voltarParaTopoButton.classList.add("show");
  } else {
    voltarParaTopoButton.classList.remove("show");
  }
}

function ativarMenuDuranteScroll(sections) {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  }
}