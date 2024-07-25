// JavaScript for the slider functionality
const sliderWrapper = document.querySelector(".slider--wrapper");
const productItems = document.querySelectorAll(".product--item");
const prevButton = document.getElementById("prevs");
const nextButton = document.getElementById("nexts");
let currentIndex = 0;

const updateSliderPosition = () => {
  const itemWidth = productItems[0].offsetWidth;
  const totalItems = productItems.length;
  const maxIndex = totalItems - 4;

  if (currentIndex < 0) {
    currentIndex = maxIndex;
  } else if (currentIndex > maxIndex) {
    currentIndex = 0;
  }

  sliderWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
};

prevButton.addEventListener("click", () => {
  currentIndex--;
  updateSliderPosition();
});

nextButton.addEventListener("click", () => {
  currentIndex++;
  updateSliderPosition();
});

// Initialize the slider
updateSliderPosition();

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 4,
      nav: true,
    },
    1000: {
      items: 4,
      nav: true,
      loop: false,
    },
  },
});
