// Dark Mode Toggle
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;


const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
  body.classList.add('dark');
  updateToggleIcon(true);
}

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  
  // Save theme preference
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  
  // Update toggle icon
  updateToggleIcon(isDark);
});

function updateToggleIcon(isDark) {
  const icon = toggleButton.querySelector('span');
  if (icon) {
    icon.textContent = isDark ? '☀️' : '🌙';
  }
}

