// Example: Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  if (!name || !email || !message) {
    e.preventDefault();
    alert('Please fill out all fields.');
  }
  // Get DOM elements
const serviceCards = document.querySelectorAll('.service-card');
const modal = document.getElementById('service-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.querySelector('.close-modal');

// Service details (can be expanded)
const serviceDetails = {
  seo: {
    title: 'SEO Optimization',
    description: 'We use advanced SEO techniques to improve your website’s ranking on search engines like Google. Our strategies include keyword research, on-page optimization, and backlink building.'
  },
  ppc: {
    title: 'PPC Advertising',
    description: 'Our PPC campaigns are designed to maximize ROI. We manage Google Ads, Facebook Ads, and other platforms to drive targeted traffic to your website.'
  },
  'social-media': {
    title: 'Social Media Marketing',
    description: 'We create engaging content and run targeted campaigns on platforms like Instagram, Facebook, and LinkedIn to grow your brand and engage your audience.'
  }
};

// Add event listeners to service cards
serviceCards.forEach(card => {
  const learnMoreButton = card.querySelector('.learn-more');
  learnMoreButton.addEventListener('click', () => {
    const service = learnMoreButton.getAttribute('data-service');
    modalTitle.textContent = serviceDetails[service].title;
    modalDescription.textContent = serviceDetails[service].description;
    modal.style.display = 'flex';
  });
});

// Close modal when clicking the close button
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside the modal
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
});