window.addEventListener('DOMContentLoaded', function() {
  // Account info display
  const user = localStorage.getItem('user');
  const info = document.getElementById('accountInfo');
  if (info) {
    info.textContent = user ? `Logged in as: ${user}` : '';
  }

  // Newsletter thank you logic
  const form = document.getElementById('newsletterForm');
  const thanks = document.getElementById('newsletterThanks');
  if(form && thanks) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      thanks.classList.remove('hidden');
      form.reset();
    });
  }

  // Button: Show Alert
  const alertBtn = document.getElementById('alertBtn');
  if (alertBtn) {
    alertBtn.addEventListener('click', function() {
      alert('Hello! This is your alert.');
    });
  }

  // Button: Change Background
  const changeBgBtn = document.getElementById('changeBgBtn');
  if (changeBgBtn) {
    changeBgBtn.addEventListener('click', function() {
      document.body.style.backgroundColor = '#222244';
    });
  }

  // Button: Hide Newsletter
  const hideNewsletterBtn = document.getElementById('hideNewsletterBtn');
  const newsletterSection = document.querySelector('section.bg-[#1c1c1c]');
  if (hideNewsletterBtn && newsletterSection) {
    hideNewsletterBtn.addEventListener('click', function() {
      newsletterSection.style.display = 'none';
    });
  }

  // Newsletter Form Submission
  document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('newsletterModal').classList.remove('hidden');
    document.getElementById('newsletterForm').reset();
  });

  // Close Modal
  document.getElementById('closeNewsletterModal').addEventListener('click', function() {
    document.getElementById('newsletterModal').classList.add('hidden');
  });
});
