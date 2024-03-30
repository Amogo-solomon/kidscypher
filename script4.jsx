// script.js

document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById('modal');
  const maleModeBtn = document.getElementById('maleModeBtn');
  const femaleModeBtn = document.getElementById('femaleModeBtn');
  const modeSwitchNavbar = document.getElementById('modeSwitchNavbar');
  const pageTitle = document.getElementById('pageTitle');
  const pageSubtitle = document.getElementById('pageSubtitle');
  const contentSection = document.getElementById('contentSection');
  const modalToggle = document.getElementById('modalToggle');

  // Show modal only if mode is not saved in local storage
  const savedMode = localStorage.getItem('mode');
  if (!savedMode) {
      modal.classList.remove('hidden');
  }

  // Add event listeners for mode selection
  maleModeBtn.addEventListener('click', function() {
      setMode('male');
      modal.classList.add('hidden');
  });

  femaleModeBtn.addEventListener('click', function() {
      setMode('female');
      modal.classList.add('hidden');
  });

  modeSwitchNavbar.addEventListener('click', function() {
      modal.classList.remove('hidden');
  });

  modalToggle.addEventListener('click', function() {
      modal.classList.remove('hidden');
  });

  // Check if mode is stored in local storage, otherwise set default to 'male'
  if (savedMode) {
      setMode(savedMode);
  } else {
      localStorage.setItem('mode', 'male');
  }

  // Show popup on page load only if mode is not saved in local storage
  if (!savedMode) {
      setTimeout(function() {
          alert("Welcome! Please select your preferred mode.");
      }, 1000);
  }
});

function setMode(mode) {
  const pageTitle = document.getElementById('pageTitle');
  const pageSubtitle = document.getElementById('pageSubtitle');
  const contentSection = document.getElementById('contentSection');
  const modeSwitchNavbar = document.getElementById('modeSwitchNavbar');

  if (mode === 'male') {
      // Set background image for male mode
      document.body.classList.remove('bg-female');
      document.body.classList.add('bg-male');

      // Set text and button colors for male mode
      modeSwitchNavbar.textContent = 'Male';
      modeSwitchNavbar.classList.remove('bg-pink-500');
      modeSwitchNavbar.classList.add('bg-blue-500');

      pageTitle.textContent = 'Welcome to Kids Coding (Male Mode)';
      pageTitle.classList.remove('text-pink-600');
      pageTitle.classList.add('text-blue-600');

      pageSubtitle.textContent = 'Start your coding journey now!';
      pageSubtitle.classList.remove('text-pink-600');
      pageSubtitle.classList.add('text-gray-600');

      contentSection.classList.remove('bg-pink-100');
      contentSection.classList.add('bg-blue-100');
  } else {
      // Set background image for female mode
      document.body.classList.remove('bg-male');
      document.body.classList.add('bg-female');

      // Set text and button colors for female mode
      modeSwitchNavbar.textContent = 'Female';
      modeSwitchNavbar.classList.remove('bg-blue-500');
      modeSwitchNavbar.classList.add('bg-pink-500');

      pageTitle.textContent = 'Welcome to Kids Coding (Female Mode)';
      pageTitle.classList.remove('text-blue-600');
      pageTitle.classList.add('text-pink-600');

      pageSubtitle.textContent = 'Start your coding journey now!';
      pageSubtitle.classList.remove('text-gray-600');
      pageSubtitle.classList.add('text-pink-600');

      contentSection.classList.remove('bg-blue-100');
      contentSection.classList.add('bg-pink-100');
  }

  localStorage.setItem('mode', mode);
}
