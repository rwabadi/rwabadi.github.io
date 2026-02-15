(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var output = document.getElementById('output-main');

  if (reducedMotion) {
    output.classList.add('visible');
    return;
  }

  setTimeout(function () {
    output.classList.add('visible');
  }, 300);
})();
