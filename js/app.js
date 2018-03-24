
(function() {
  var intFrameWidth = window.innerWidth;

    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.querySelector('.scrolling-container').scrollLeft -= (delta*40); // Multiplied by 40
        e.preventDefault();
    }
    if(intFrameWidth > 1200) {
      if (document.querySelector('.scrolling-container').addEventListener) {
          // IE9, Chrome, Safari, Opera
          document.querySelector('.scrolling-container').addEventListener("mousewheel", scrollHorizontally, false);
          // Firefox
          document.querySelector('.scrolling-container').addEventListener("DOMMouseScroll", scrollHorizontally, false);
      } else {
          // IE 6/7/8
          document.querySelector('.scrolling-container').attachEvent("onmousewheel", scrollHorizontally);
      }
    }
})();
