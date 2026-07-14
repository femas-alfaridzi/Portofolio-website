// Simple theme manager: uses localStorage and toggles the 'dark' class on <html>
export function getTheme() {
  if (typeof window === 'undefined') return 'light';
  const stored = localStorage.getItem('theme');
  if (stored) return stored;
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

export function setTheme(theme) {
  if (typeof document === 'undefined') return;
  const html = document.documentElement;
  if (theme === 'dark') html.classList.add('dark');
  else html.classList.remove('dark');
  try {
    localStorage.setItem('theme', theme);
  } catch (e) {
    // ignore
  }
}

export function initTheme() {
  const t = getTheme();
  setTheme(t);
  return t;
}

export function toggleTheme() {
  const current = getTheme();
  const next = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
  return next;
}
