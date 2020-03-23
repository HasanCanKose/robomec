function smoothScroll() {
  let target = document.querySelector(".end");
  let targetPosition = target.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  let startTime = null;
  let duration = 1000;

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

function removeFragment() {
  history.pushState("", document.title, window.location.pathname);
}

function isFragment() {
  return window.location.hash === "#start";
}

function isSamePathName(element) {
  return window.location.pathname === element.pathname;
}

if (isFragment()) {
  removeFragment();
  smoothScroll();
}

let elements = document.querySelectorAll(".start");

elements.forEach(element => {
  element.addEventListener("click", function(event) {
    if (isSamePathName(element)) {
      event.preventDefault();
    }
    smoothScroll();
    removeFragment();
  });
});
