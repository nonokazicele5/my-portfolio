document.addEventListener('scroll', () => {
  const skillBars = document.querySelectorAll('.skill-bar');
  skillBars.forEach(bar => {
    const percent = bar.getAttribute('data-percent');
    const barFill = bar.querySelector('.bar::after');
    if (isElementInViewport(bar)) {
      bar.querySelector('.bar').style.width = `${percent}%`;
    }
  });
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}