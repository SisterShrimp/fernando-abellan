const copyButton = document.querySelector('[data-copy]');
if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const status = document.querySelector('.copy-status');
    try {
      await navigator.clipboard.writeText(copyButton.dataset.copy);
      status.textContent = 'Email address copied.';
    } catch {
      status.textContent = 'Select the email address above to copy it.';
    }
  });
}
const sections = [...document.querySelectorAll('main > section[id]')];
const links = [...document.querySelectorAll('.site-header nav a')];
if (sections.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -60% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}
