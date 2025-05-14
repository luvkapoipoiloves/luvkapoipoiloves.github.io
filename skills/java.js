document.querySelectorAll('.skill-filters button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.skill-filters button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.skill-card').forEach(card => {
      card.style.display = (filter === 'all' || card.dataset.category === filter) ? 'block' : 'none';
    });
  });
});