// script.js

document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById('modal');
  const maleModeBtn = document.getElementById('maleModeBtn');
  const femaleModeBtn = document.getElementById('femaleModeBtn');
  const pageTitle = document.getElementById('pageTitle');
  const pageSubtitle = document.getElementById('pageSubtitle');
  const contentSection = document.getElementById('contentSection');

  // Show modal on page load
  modal.classList.remove('hidden');

  // Add event listeners for mode selection
  maleModeBtn.addEventListener('click', function() {
      setMode('male');
      modal.classList.add('hidden');
  });

  femaleModeBtn.addEventListener('click', function() {
      setMode('female');
      modal.classList.add('hidden');
  });

  // Check if mode is stored in local storage, otherwise set default to 'male'
  const savedMode = localStorage.getItem('mode');
  if (savedMode) {
      setMode(savedMode);
  } else {
      localStorage.setItem('mode', 'male');
  }

  // Show popup on page load
  /* setTimeout(function() {
      alert("Welcome! Please select your preferred mode.");
  }, 1000); */
});

function setMode(mode) {
  const pageTitle = document.getElementById('pageTitle');
  const pageSubtitle = document.getElementById('pageSubtitle');
  const contentSection = document.getElementById('contentSection');

  if (mode === 'male') {
      // Set colors for male mode
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
