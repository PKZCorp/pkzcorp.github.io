export function initProjectSearch() {
  const searchInput = document.getElementById('project-search') as HTMLInputElement;
  const projectCards = document.querySelectorAll('.project-card');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = (e.target as HTMLInputElement).value.toLowerCase();

    projectCards.forEach(card => {
      const title = card.querySelector('.project-title')?.textContent?.toLowerCase() || '';
      const description = card.querySelector('.project-description')?.textContent?.toLowerCase() || '';

      const matches = title.includes(query) || description.includes(query);
      (card as HTMLElement).style.display = matches ? '' : 'none';
    });

    const visibleCards = Array.from(projectCards).filter(
      card => (card as HTMLElement).style.display !== 'none'
    );

    const noResults = document.getElementById('search-no-results') as HTMLElement;
    if (noResults) {
      noResults.style.display = visibleCards.length === 0 ? 'block' : 'none';
    }
  });
}
