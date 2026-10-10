const toggleBtn = document.getElementById('theme-toggle');

// Check for saved theme preference, otherwise use system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
  document.documentElement.classList.add('dark-mode');
}

// Add click event listener to the button
toggleBtn.addEventListener('click', () => {
  // Toggle the dark-mode class
  document.documentElement.classList.toggle('dark-mode');
  
  // Save the current preference to localStorage
  if (document.documentElement.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});