(() => {
  const cards = document.querySelectorAll('.privacy-policy-card--clickable[data-policy-url]');

  const openPolicy = (card) => {
    const url = card.dataset.policyUrl;
    if (url) window.location.assign(url);
  };

  cards.forEach((card) => {
    card.addEventListener('click', (event) => {
      if (event.target.closest('a, button')) return;
      openPolicy(card);
    });

    card.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      openPolicy(card);
    });
  });
})();
