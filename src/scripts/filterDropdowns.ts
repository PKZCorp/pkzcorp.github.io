export function initFilterDropdowns() {
  const categorySelect = document.getElementById('category-filter') as HTMLSelectElement;
  const statusSelect = document.getElementById('status-filter') as HTMLSelectElement;

  if (!categorySelect || !statusSelect) return;

  const updateFilters = () => {
    const category = categorySelect.value;
    const status = statusSelect.value;

    const params = new URLSearchParams();
    if (category) params.append('category', category);
    if (status) params.append('status', status);

    const newUrl = params.toString()
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname;

    window.history.replaceState({}, '', newUrl);
    applyFilters(category, status);
  };

  categorySelect.addEventListener('change', updateFilters);
  statusSelect.addEventListener('change', updateFilters);
}

function applyFilters(category: string, status: string) {
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    const cardStatus = card.getAttribute('data-status');

    const categoryMatch = !category || cardCategory === category;
    const statusMatch = !status || cardStatus === status;

    (card as HTMLElement).style.display = categoryMatch && statusMatch ? '' : 'none';
  });

  const visibleCards = Array.from(projectCards).filter(
    card => (card as HTMLElement).style.display !== 'none'
  );

  const noResults = document.getElementById('filter-no-results') as HTMLElement;
  if (noResults) {
    noResults.style.display = visibleCards.length === 0 ? 'block' : 'none';
  }
}
