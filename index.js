document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const mobileMenu = document.getElementById("mobile-menu-list");

    menuButton.addEventListener("click", function (event) {
        mobileMenu.classList.toggle("active");
        event.stopPropagation(); // Prevent click from closing menu immediately
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!mobileMenu.contains(event.target) && !menuButton.contains(event.target)) {
            mobileMenu.classList.remove("active");
        }
    });
});
  function easterEggOne() {
    document.body.style.backgroundImage = "url('eastereggimg.jpg')"
  }
  let sequence = [];
  const secretCode = ['1', '3', '3', '7'];

  document.addEventListener('keydown', function (event) {
      sequence.push(event.key);
      
      if (sequence.length > secretCode.length) {
          sequence.shift();
      }

      if (sequence.join('') === secretCode.join('')) {
          showModal();
      }
  });

  function showModal() {
      document.getElementById('modal').style.display = 'block';
      document.getElementById('overlay').style.display = 'block';
  }

  function closeModal() {
      document.getElementById('modal').style.display = 'none';
      document.getElementById('overlay').style.display = 'none';
  }