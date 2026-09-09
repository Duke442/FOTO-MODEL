document.addEventListener('DOMContentLoaded', () => {
  // 1. Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // 3. Location Selector Highlight Logic
  const locationItems = document.querySelectorAll('.location-list li');
  locationItems.forEach(item => {
    item.addEventListener('click', () => {
      locationItems.forEach(loc => loc.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // 4. Modal Open & Close Handlers
  const modal = document.getElementById('vendorModal');
  const openBtns = document.querySelectorAll('.open-vendor-modal');
  const closeBtn = document.getElementById('closeVendorModal');

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
    });
  });

  const closeModal = () => modal.classList.remove('active');

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // 5. Vendor Application Form (WhatsApp Integration)
  const vendorForm = document.getElementById('vendorForm');
  if (vendorForm) {
    vendorForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const brandName = document.getElementById('brandName').value.trim();
      const contactEmail = document.getElementById('contactEmail').value.trim();
      const category = document.getElementById('category').value;

      // Updated with your Ghanaian WhatsApp number (233 country code included, leading 0 dropped)
      const whatsappNumber = "233534617306"; 

      const encodedMessage = encodeURIComponent(
        `*New Vendor Application - Fashion Trade Fair 2026*\n\n` +
        `*Brand Name:* ${brandName}\n` +
        `*Email:* ${contactEmail}\n` +
        `*Category:* ${category}`
      );

      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(whatsappURL, '_blank');

      vendorForm.reset();
      closeModal();
    });
  }

  // 6. Contact Form Submission (WhatsApp Integration)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      // Updated with your Ghanaian WhatsApp number (233 country code included, leading 0 dropped)
      const whatsappNumber = "233534617306"; 

      const encodedMessage = encodeURIComponent(
        `*New Booking / Inquiry from Website*\n\n` +
        `*Name:* ${name}\n` +
        `*Email:* ${email}\n` +
        `*Message:* ${message}`
      );

      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(whatsappURL, '_blank');

      contactForm.reset();
    });
  }
});




  