// script.js

document.addEventListener("DOMContentLoaded", function() {
  const modeSwitch = document.getElementById('modeSwitch');
  const pageTitle = document.getElementById('pageTitle');
  const pageSubtitle = document.getElementById('pageSubtitle');
  const contentSection = document.getElementById('contentSection');

  // Check if mode is stored in local storage, otherwise set default to 'male'
  const savedMode = localStorage.getItem('mode');
  if (savedMode) {
      setMode(savedMode);
  } else {
      localStorage.setItem('mode', 'male');
  }

  // Add event listener for mode switch
  modeSwitch.addEventListener('click', function() {
      const currentMode = localStorage.getItem('mode');
      const newMode = currentMode === 'male' ? 'female' : 'male';
      setMode(newMode);
      localStorage.setItem('mode', newMode);
  });

  // Show popup on page load
  setTimeout(function() {
      alert("Welcome! Please select your preferred mode.");
  }, 1000);
});

function setMode(mode) {
  const modeSwitch = document.getElementById('modeSwitch');
  const pageTitle = document.getElementById('pageTitle');
  const pageSubtitle = document.getElementById('pageSubtitle');
  const contentSection = document.getElementById('contentSection');

  if (mode === 'male') {
      // Set colors for male mode
      modeSwitch.textContent = 'Male';
      modeSwitch.classList.remove('bg-pink-500', 'text-white');
      modeSwitch.classList.add('bg-blue-500', 'text-white');

      pageTitle.textContent = 'Welcome to Kids Coding (Male Mode)';
      pageTitle.classList.remove('text-pink-600');
      pageTitle.classList.add('text-blue-600');

      pageSubtitle.textContent = 'Start your coding journey now!';
      pageSubtitle.classList.remove('text-pink-600');
      pageSubtitle.classList.add('text-gray-600');

      contentSection.classList.remove('bg-pink-100');
      contentSection.classList.add('bg-blue-100');
  } else {
      // Set colors for female mode
      modeSwitch.textContent = 'Female';
      modeSwitch.classList.remove('bg-blue-500', 'text-white');
      modeSwitch.classList.add('bg-pink-500', 'text-white');

      pageTitle.textContent = 'Welcome to Kids Coding (Female Mode)';
      pageTitle.classList.remove('text-blue-600');
      pageTitle.classList.add('text-pink-600');

      pageSubtitle.textContent = 'Start your coding journey now!';
      pageSubtitle.classList.remove('text-gray-600');
      pageSubtitle.classList.add('text-pink-600');

      contentSection.classList.remove('bg-blue-100');
      contentSection.classList.add('bg-pink-100');
  }
}
