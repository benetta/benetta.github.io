const SLIDES = document.querySelectorAll(".slider__item");
const BUTTONS = document.querySelectorAll(".slider__toggle");

var curr = 0;

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

//  SLIDER ON MOBILE

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;


function handleTouchStart(evt) {
  xDown = evt.touches[0].clientX;
  yDown = evt.touches[0].clientY;
};

function handleTouchMove(evt) {
  if ( ! xDown || ! yDown ) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/

    if ( xDiff > 0 ) {
      /* left swipe */
      console.log("left swipe " + curr + " slide");

      if(curr === slide.length-1) {
        slide[curr].item.classList.add("slider__item--hidden");
        slide[curr].btn.classList.remove("slider__toggle--active");
        slide[curr].active = false;

        slide[0].item.classList.remove("slider__item--hidden");
        slide[0].btn.classList.add("slider__toggle--active");
        slide[0].active = true;

        curr = 0;
      } else {
        // скрываем текущий
        slide[curr].item.classList.add("slider__item--hidden");
        slide[curr].btn.classList.remove("slider__toggle--active");
        slide[curr].active = false;

        // открываем новый
        slide[curr+1].item.classList.remove("slider__item--hidden");
        slide[curr+1].btn.classList.add("slider__toggle--active");
        slide[curr+1].active = true;

        curr++;
        }
    } else {
      /* right swipe */
        console.log("right swipe " + curr + " slide");

      if(curr === 0) {
        slide[curr].item.classList.add("slider__item--hidden");
        slide[curr].btn.classList.remove("slider__toggle--active");
        slide[curr].active = false;

        // открываем новый
        slide[slide.length-1].item.classList.remove("slider__item--hidden");
        slide[slide.length-1].btn.classList.add("slider__toggle--active");
        slide[slide.length-1].active = true;

        curr = slide.length-1;
      } else {
        // скрываем текущий
        slide[curr].item.classList.add("slider__item--hidden");
        slide[curr].btn.classList.remove("slider__toggle--active");
        slide[curr].active = false;

        // открываем новый
        slide[curr-1].item.classList.remove("slider__item--hidden");
        slide[curr-1].btn.classList.add("slider__toggle--active");
        slide[curr-1].active = true;

        curr--;
      }
    }
  }
    /* reset values */
    xDown = null;
    yDown = null;
};
