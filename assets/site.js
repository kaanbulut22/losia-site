document.documentElement.classList.remove("no-js");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Fade sections in once as they scroll into view; the strike-through list too.
const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    }
  },
  { rootMargin: "0px 0px -12% 0px" }
);
document.querySelectorAll(".reveal, .struck").forEach((el) => revealObserver.observe(el));

// Routine steps check themselves off as they pass the middle of the screen,
// and uncheck when scrolled back, like working through the routine.
const steps = [...document.querySelectorAll(".steps li")];
const tally = document.querySelector("[data-tally]");
if (steps.length) {
  let ticking = false;
  const update = () => {
    ticking = false;
    const line = window.innerHeight * 0.55;
    let done = 0;
    for (const step of steps) {
      const isDone = step.getBoundingClientRect().top < line;
      step.classList.toggle("done", isDone);
      if (isDone) done++;
    }
    if (tally) tally.textContent = `${done}/${steps.length}`;
  };
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true }
  );
  window.addEventListener("resize", update);
  update();
}

// The level pills step down slowly: full, half, low, empty.
const levels = [...document.querySelectorAll(".levels span")];
if (levels.length && !reduceMotion) {
  let i = 0;
  setInterval(() => {
    levels[i].classList.remove("on");
    i = (i + 1) % levels.length;
    levels[i].classList.add("on");
  }, 1800);
}

// Scatter the logo's sparkles over the night band.
const night = document.querySelector(".night");
if (night) {
  const spots = [
    [6, 14, 26], [18, 78, 15], [34, 8, 12], [47, 88, 22], [58, 22, 11],
    [66, 64, 18], [78, 10, 28], [88, 84, 14], [93, 40, 10], [26, 46, 9],
    [52, 52, 8], [72, 92, 12],
  ];
  spots.forEach(([x, y, size], n) => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 100 100");
    svg.setAttribute("class", "sparkle");
    svg.setAttribute("aria-hidden", "true");
    svg.style.cssText = `left:${x}%;top:${y}%;width:${size}px;height:${size}px;animation-delay:${(n * 0.73) % 5}s`;
    svg.innerHTML = '<use href="#spark"/>';
    night.appendChild(svg);
  });
}

// Questions open and close smoothly, one at a time. <details> itself snaps
// open, so the answer's height is animated by hand; without JS it still works.
const questions = [...document.querySelectorAll(".faq-list details")];
const running = new WeakMap();

function setOpen(question, open) {
  const answer = question.querySelector(".answer");
  // Read the current height first: a reversed click lands mid-animation.
  const start = question.open ? answer.offsetHeight : 0;
  running.get(question)?.cancel();
  question.classList.toggle("is-open", open);
  if (open) question.open = true;
  const end = open ? answer.scrollHeight : 0;
  if (reduceMotion) {
    if (!open) question.open = false;
    return;
  }
  const animation = answer.animate(
    [
      { height: `${start}px`, opacity: open ? 0 : 1 },
      { height: `${end}px`, opacity: open ? 1 : 0 },
    ],
    { duration: 520, easing: "cubic-bezier(0.25, 0.8, 0.25, 1)" }
  );
  running.set(question, animation);
  animation.onfinish = () => {
    running.delete(question);
    if (!open) question.open = false;
  };
}

questions.forEach((question) =>
  question.querySelector("summary").addEventListener("click", (event) => {
    event.preventDefault();
    const opening = !question.classList.contains("is-open");
    if (opening) {
      for (const other of questions) {
        if (other !== question && other.classList.contains("is-open")) setOpen(other, false);
      }
    }
    setOpen(question, opening);
  })
);
