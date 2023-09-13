function LoadSlide() {
  const storeImage = [
    "https://cf.shopee.vn/file/vn-50009109-a28983ff32348efb429181969f8c1714_xxhdpi",
    "https://cf.shopee.vn/file/vn-50009109-fa79715264f5c973648d8096a8aa9773_xxhdpi",
    "https://cf.shopee.vn/file/vn-50009109-39ca4c0563c424b82bf288406e0d604e_xxhdpi",
    "https://cf.shopee.vn/file/vn-50009109-616f877cd2fe3699a1792de14a7860fd_xxhdpi",
    "https://cf.shopee.vn/file/vn-50009109-94a6226575f240efb3ab1386407334cd_xxhdpi",
    "https://cf.shopee.vn/file/vn-50009109-a28983ff32348efb429181969f8c1714_xxhdpi",
    "https://cf.shopee.vn/file/vn-50009109-a28983ff32348efb429181969f8c1714_xxhdpi",
    "https://cf.shopee.vn/file/vn-50009109-a28983ff32348efb429181969f8c1714_xxhdpi",
    "https://cf.shopee.vn/file/vn-50009109-a28983ff32348efb429181969f8c1714_xxhdpi",
  ];

  const slides = document.querySelector(".slides");
  const btn_prev = document.getElementById("btn_prev");
  const btn_next = document.getElementById("btn_next");
  const dots_slide = document.querySelector(".dots_slide");

  let currentSlides = 0;

  function showDots() {
    for (var i = 0; i < storeImage.length; i++) {
      dots_slide.innerHTML += `
               <div class="dot_slide w-[10px] h-[10px] bg-white rounded-full mx-[10px] cursor-pointer"></div>
            `;
      const dots = document.querySelectorAll(".dot_slide");
      showByDot(dots);
      dots[0].classList.add("active_dot");
    }
  }

  showDots();

  storeImage.forEach((src) => {
    slides.innerHTML += `
        <div class="min-w-full">
          <img class="w-full h-full object-cover" src="${src}" alt="" />
        </div>
        `;
  });

  btn_prev.addEventListener("click", () => {
    clearInterval(timeShowSlide);
    currentSlides--;
    if (currentSlides < 0) {
      currentSlides = slides.children.length - 1;
    }
    showSlide(currentSlides);
  });

  btn_next.addEventListener("click", () => {
    clearInterval(timeShowSlide);
    currentSlides++;
    if (currentSlides > slides.children.length - 1) {
      currentSlides = 0;
    }
    showSlide(currentSlides);
  });

  function showSlide(index) {
    const dots = document.querySelectorAll(".dot_slide");
    dots.forEach((dot) => {
      dot.classList.remove("active_dot");
    });

    slides.style.transform = `translateX(-${
      index * slides.children[0].offsetWidth
    }px)`;
    dots[index].classList.add("active_dot");
  }

  function showByDot(dots) {
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        clearInterval(timeShowSlide);
        dots.forEach((dot) => {
          dot.classList.remove("active_dot");
        });

        slides.style.transform = `translateX(-${
          index * slides.children[0].offsetWidth
        }px)`;
        dot.classList.add("active_dot");
      });
    });
  }

  const timeShowSlide = setInterval(() => {
    currentSlides++;
    if (currentSlides > slides.children.length - 1) {
      currentSlides = 0;
    }
    showSlide(currentSlides);
  }, 3000);
}
