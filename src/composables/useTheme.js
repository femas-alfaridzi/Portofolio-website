// Permanent Dark Mode enforcement for portfolio website
export function getTheme() {
  return 'dark';
}

export function setTheme() {
  if (typeof document === 'undefined') return;
  const html = document.documentElement;
  html.classList.add('dark');
  try {
    localStorage.setItem('theme', 'dark');
  } catch (e) {
    // ignore
  }
}

export function initTheme() {
  setTheme();
  return 'dark';
}

export function toggleTheme() {
  setTheme();
  return 'dark';
}
