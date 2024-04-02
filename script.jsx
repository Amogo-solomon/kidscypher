// script.js

document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById('modal'); //get id for pop up mode switch
  const maleModeBtn = document.getElementById('maleModeBtn');
  const femaleModeBtn = document.getElementById('femaleModeBtn');
  const modeSwitchNavbar = document.getElementById('modeSwitchNavbar');
  const pageTitle = document.getElementById('pageTitle');
  const pageSubtitle = document.getElementById('pageSubtitle');
  const contentSection = document.getElementById('contentSection');
  const modalToggle = document.getElementById('modalToggle'); // muted
  const enrolNow = document.getElementById('enrolNow');
  const enrolNow1 = document.getElementById('enrolNow1');
  const enrolNow2 = document.getElementById('enrolNow2');
  const heroSection = document.getElementById('heroSection');
  const heroRightDivPics = document.getElementById('heroRightDivPics')
  heroRightDivBelowImage = document.getElementById('heroRightDivBelowImage')
  pageSubtitleObjective = document.getElementById('pageSubtitleObjective');
  sectionThree = document.getElementById('sectionThree');
  navMenu = document.getElementById('navMenu');
/*   footer1 = document.getElementById('footer1') */


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

  /* modalToggle.addEventListener('click', function() {
      modal.classList.remove('hidden');
  }); */

  // Check if mode is stored in local storage, otherwise set default to 'male'
  if (savedMode) {
      setMode(savedMode);
  } else {
      localStorage.setItem('mode', 'male');
  }

  // Show popup on page load only if mode is not saved in local storage
/*   if (!savedMode) {
      setTimeout(function() {
          alert("Welcome! Please select your preferred mode.");
      }, 1000);
  } */
});

document.getElementById('enrolNow').addEventListener('click', function() {
    window.location.href = 'contact.html'; 
})

document.getElementById('enrolNow1').addEventListener('click', function() {
    window.location.href = 'contact.html';
})

// Toggle mobile menu on click
document.getElementById('mobile-menu-button').addEventListener('click', function() {
  document.getElementById('mobileMenu').classList.toggle('hidden');
});

// show mobile menu on hover
/* document.getElementById('mobile-menu-button').addEventListener('mouseover', function() {
  document.getElementById('mobile-menu').classList.remove('hidden');
}); */

// Hide mobil menu on mouse leaves
/* document.getElementById('menu-menu').addEventListener('mouseleave', function() {
  document.getElementById('mobile-menu').classList.add('hidden');
}); */

/* document.getElementById('enrolNow2').addEventListener('click', funciton() {
    window.location.href = 'contact.html';
}) */


function setMode(mode) {
 const navMenu = document.getElementById('navMenu');
 const mobileMenu = document.getElementById('mobileMenu')
  const pageTitle = document.getElementById('pageTitle');
  const pageSubtitle = document.getElementById('pageSubtitle');
  const contentSection = document.getElementById('contentSection');
  const modeSwitchNavbar = document.getElementById('modeSwitchNavbar');
  const heroSection = document.getElementById('heroSection');
  const enrolNow = document.getElementById('enrolNow');
  const enrolNow1 = document.getElementById('enrolNow1');
  const enrolNow2 = document.getElementById('enrolNow2');
  let heroRightDivPics = document.getElementById('heroRightDivPics');
  const heroRightDivBelowImage = document.getElementById('heroRightDivBelowImage');
  const pageSubtitleObjective = document.getElementById('pageSubtitleObjective');
  const sectionThree = document.getElementById('sectionThree');

 /*  const footer1 = docuemnt.getElementById('footer1') */
  // Set the dimensions (width and height) of the element
/* heroRightDivPics.style.width = "500px";  */// Set your desired width
/* heroRightDivPics.style.height = "300px"; */ // Set your desired height

// Set your desired width and height
let width = "400px";
let height = "300px";

// Check the screen width
if (window.innerWidth < 1000) { // Adjust this breakpoint as needed
    width = "100%"; // Set width to 100% for small screens
    height = "auto"; // Set height to auto to maintain aspect ratio
}

// Apply the width and height
heroRightDivPics.style.width = width;
heroRightDivPics.style.height = height;


  if (mode === 'male') {

   /*  NAVMENU */
   navMenu.classList.remove('text-purple-700');
   navMenu.classList.add('text-blue-500')

  /*  MOBILE MENU */
  mobileMenu.classList.remove('text-purple-700');
  mobileMenu.classList.add('text-blue-500')
      // Set background image for male mode
      /* heroSection.style.backgroundImage = "url('images/female2.png')"; */ // Replace 'male-background.jpg' with the male background image path
      heroSection.classList.remove('bg-purple-100')
      heroSection.classList.add('bg-blue-50');
      heroRightDivPics.style.backgroundImage = "url('images/img-heroMale.png')"

      // color behind the right image
      heroRightDivBelowImage.classList.remove('bg-purple-200')
    heroRightDivBelowImage.classList.add('bg-blue-100');

      // Set text and button colors for male mode navbar
      modeSwitchNavbar.textContent = 'Switch Mode';
      modeSwitchNavbar.classList.remove('bg-purple-700');
      modeSwitchNavbar.classList.add('bg-blue-500');

      //set text and button colors for enrolNow at hero section for male mode
    enrolNow.classList.remove('bg-purple-700');
    enrolNow.classList.add('bg-blue-500');
    // set text and button colors for enrolNow1 at course curriculum section for male
    enrolNow1.classList.remove('bg-purple-700');
    enrolNow1.classList.add('bg-blue-500');

    enrolNow2.classList.remove('bg-purple-700');
    enrolNow2.classList.add('bg-blue-500');

    /*   pageTitle.textContent = 'Welcome to Kids Coding (Male Mode)'; */
      pageTitle.textContent = 'Premier coding classes & camps from age 6';
      pageTitle.classList.remove('text-purple-700');
      pageTitle.classList.add('text-blue-600');

      pageSubtitle.textContent = 'Learn to code and build amazing projects!';
      pageSubtitle.classList.remove('text-purple-700');
      pageSubtitle.classList.add('text-blue-600');

      contentSection.classList.remove('bg-purple-700');
      contentSection.classList.add('bg-blue-100');

     /*  the objective page. Below the hero section */
     /* pageSubtitleObjective.textContent = ''; */
     pageSubtitleObjective.classList.remove('text-purple-700');
     pageSubtitleObjective.classList.add('text-blue-500');

   /*   SECTION 3 */
   
   sectionThree.classList.remove('bg-purple-100');
   sectionThree.classList.add('bg-blue-50');

   /*   SECTION 4 */
   
  /*  sectionFour.classList.remove('bg-purple-100');
   sectionFour.classList.add('bg-blue-50'); */

   /* FOOTER SECTION */
  /*  footer1.classList.remove('bg-purple-500');
   footer1.classList.add('bg-blue-500'); */
  } else {
 /*    NAV MENU BAR */
     navMenu.classList.remove('text-blue-500');
     navMenu.classList.add('text-purple-700');

     mobileMenu.classList.remove('text-blue-500');
     mobileMenu.classList.add('text-purple-700');
      // Set background image for female mode
     // heroSection.style.backgroundImage = "url('female-background.jpg')"; // Replace 'female-background.jpg' with the female background image path
      /* heroSection.style.backgroundImage = "url('images/female1.png')" */; 
      heroSection.classList.remove('bg-blue-50');
      heroSection.classList.add('bg-purple-100');
      heroRightDivPics.style.backgroundImage = "url('images/img-heroFemale.png')";
    
      // // color behind the right image (set color at right div below image)
    heroRightDivBelowImage.classList.remove('bg-blue-100')
    heroRightDivBelowImage.classList.add('bg-purple-200')

      // Set text and button colors for female mode
      modeSwitchNavbar.textContent = 'Switch Mode';
      modeSwitchNavbar.classList.remove('bg-blue-500');
      modeSwitchNavbar.classList.add('bg-purple-700');

    //set text and button colors for enrolNow for female mode
    enrolNow.classList.remove('bg-blue-500')
    enrolNow.classList.add('bg-purple-700')

    // set text and button colors for enrolNow1 for female mode
    enrolNow1.classList.remove('bg-blue-500');
    enrolNow1.classList.add('bg-purple-700');

    enrolNow2.classList.remove('bg-blue-500');
    enrolNow2.classList.add('bg-purple-700');

      /* pageTitle.textContent = 'Welcome to Kids Coding (Female Mode)'; */
      pageTitle.textContent = 'Premier coding classes & camps from age 6';
      pageTitle.classList.remove('text-blue-600');
      pageTitle.classList.add('text-purple-700');

      pageSubtitle.textContent = 'Learn to code and build amazing projects!';
      pageSubtitle.classList.remove('text-gray-600');
      pageSubtitle.classList.add('text-purple-700');

      contentSection.classList.remove('bg-blue-100');
      contentSection.classList.add('text-purple-700');

       /*  the objective page. Below the hero section */
    /*  pageSubtitleObjective.textContent = ''; */
     pageSubtitleObjective.classList.remove('text-blue-100');
     pageSubtitleObjective.classList.add('text-purple-700');

      /*   SECTION 3 */
      sectionThree.classList.remove('bg-blue-50')
      sectionThree.classList.add('bg-purple-100')

      
   /*   SECTION 4 */
   
  /*  sectionFour.classList.remove('bg-blue-50');
   sectionFour.classList.add('bg-purple-100'); */

       /*   SECTION 3 */
      /*  footer1.classList.remove('bg-blue-500')
       footer1.classList.add('bg-purple-500') */
  }

  localStorage.setItem('mode', mode);
}

