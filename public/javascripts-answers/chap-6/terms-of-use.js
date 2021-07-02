// the following requires updating HTML to add js-accordion class to the btn
const accordionBtns = Array.from(document.querySelectorAll('.js-accordion'));

accordionBtns.forEach((btn) => {
  const panelId = btn.getAttribute('aria-controls');

  const panel = document.querySelector(`#${panelId}`);

  if (panel) {
    panel.classList.add('hidden');

    btn.addEventListener('click', () => panel.classList.toggle('hidden'));
  }
});
