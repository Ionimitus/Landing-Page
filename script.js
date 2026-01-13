document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;

  if (!toggleButton) return;

  const currentTheme = localStorage.getItem('theme') || 'light';
  if (currentTheme === 'dark') {
    body.classList.add('dark');
  }
  updateToggleIcon(body.classList.contains('dark'));

  toggleButton.addEventListener('click', function() {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateToggleIcon(isDark);
  });

  function updateToggleIcon(isDark) {
    const icon = toggleButton.querySelector('span');
    if (icon) {
      icon.textContent = isDark ? '☀️' : '🌙';
    }
  }
});
