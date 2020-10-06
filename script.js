(function() {
  // This function will setup any `image-comparison` element  
  function makeComparison($el) {
    const fps = 60;
    const throttleDelay = 1000 / fps;

    $el.onmousemove = updatePosition

    function updatePosition(e) {
      const relative = e.offsetX / $el.clientWidth;
      $el.style.setProperty('--current-position', `${relative * 100}%`);
    }
  }
  
  // Automatically setup all `image-comparison` elements after the DOM loads
  document.addEventListener('DOMContentLoaded', () => {
    const $els = [...document.querySelectorAll('image-comparison')];
    $els.forEach(makeComparison);
  }, false);
})();
