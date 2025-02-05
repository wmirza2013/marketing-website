// Example: Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  if (!name || !email || !message) {
    e.preventDefault();
    alert('Please fill out all fields.');
  }
});