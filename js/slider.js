const SLIDES = document.querySelectorAll(".slider__item");
const BUTTONS = document.querySelectorAll(".slider__toggle");

const slide = [
{btn: BUTTONS[0], item: SLIDES[0], active: true},
{btn: BUTTONS[1], item: SLIDES[1], active: false},
{btn: BUTTONS[2], item: SLIDES[2], active: false},
{btn: BUTTONS[3], item: SLIDES[3], active: false},
{btn: BUTTONS[4], item: SLIDES[4], active: false},
{btn: BUTTONS[5], item: SLIDES[5], active: false}
];

BUTTONS.forEach( (btn, i) => {

  btn.addEventListener("click", (evt) => {
    evt.preventDefault();

    setSlides(i);
    console.log(i);
  });

});

const setSlides = (num) => {
  slide.forEach((obj) => {
     if (obj.active === true) {
      obj.item.classList.add("slider__item--hidden");
      obj.btn.classList.remove("slider__toggle--active");
      obj.active = false;
     }
  });

  slide[num].item.classList.remove("slider__item--hidden");
  slide[num].btn.classList.add("slider__toggle--active");
  slide[num].active = true;

};
