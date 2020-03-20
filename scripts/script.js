function smoothScroll(target, duration) {
  let targett = document.getElementById(target);
  let targetPosition = targett.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currenTime) {
    if (startTime === null) startTime = currenTime;
    console.log(startTime);
    let timeElapsed = currenTime - startTime;
    let run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  }
  requestAnimationFrame(animation);
}

// let section = document.getElementById("start").innerHTML;

// section.addEventListener("click", function() {
//   smoothScroll("end", 1000);
// });

// document.getElementById("start").addEventListener("click", function() {
//   smoothScroll("end", 1000);
// });

smoothScroll("end", 1000);
