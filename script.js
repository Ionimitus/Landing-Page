// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;

  if (!toggleButton) {
    console.error('Theme toggle button not found!');
    return;
  }

  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light';
  if (currentTheme === 'dark') {
    body.classList.add('dark');
    updateToggleIcon(true);
  } else {
    updateToggleIcon(false);
  }

  toggleButton.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    
    console.log('Dark mode toggled. Is dark:', isDark);
    console.log('Body classes:', body.className);
    
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
});

