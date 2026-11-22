/**
 * NEWORA FASHION - Official Website Logic
 * Ultra-Fast Vanilla JavaScript (No Heavy Dependencies)
 * Seamless Facebook Page Posts, Messenger & WhatsApp Integration
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. BRAND & SOCIAL MEDIA CONFIGURATION
  // =========================================================================
  const NEWORA_CONFIG = {
    brandName: "Newora",
    brandFullName: "Newora Fashion",
    // Official Facebook Page
    facebookPageUrl: "https://www.facebook.com/profile.php?id=61596531761510",
    facebookPageId: "61596531761510",
    messengerUrl: "https://m.me/61596531761510",
    // WhatsApp Hotline: 072243455 (Formatted as 9472243455 for wa.me)
    whatsappNumber: "9472243455",
    whatsappDisplay: "072243455",
    whatsappMessage: "can I get more informations about this!",
    instagramHandle: "neworafashion"
  };

  // =========================================================================
  // 2. DYNAMIC SOCIAL & CHAT ACTION LINKS
  // =========================================================================
  // WhatsApp default order inquiry link with requested short message
  const defaultWhatsAppText = encodeURIComponent(NEWORA_CONFIG.whatsappMessage);
  const waFullUrl = `https://wa.me/${NEWORA_CONFIG.whatsappNumber}?text=${defaultWhatsAppText}`;

  // Update all WhatsApp buttons
  document.querySelectorAll('.dynamic-wa-link').forEach(link => {
    link.href = waFullUrl;
  });

  // Update Facebook and Messenger buttons
  document.querySelectorAll('.dynamic-fb-link').forEach(link => {
    link.href = NEWORA_CONFIG.facebookPageUrl;
  });

  document.querySelectorAll('.dynamic-messenger-link').forEach(link => {
    link.href = NEWORA_CONFIG.messengerUrl;
  });

  // =========================================================================
  // 3. SEO FAQ ACCORDION
  // =========================================================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => {
        i.classList.remove('active');
        const qBtn = i.querySelector('.faq-question');
        if (qBtn) qBtn.setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // =========================================================================
  // 4. MOBILE NAVIGATION MENU TOGGLE (Enhanced Responsive Behavior)
  // =========================================================================
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    function toggleMenu(open) {
      const willOpen = typeof open === 'boolean' ? open : !navLinks.classList.contains('active');
      navLinks.classList.toggle('active', willOpen);
      menuToggle.classList.toggle('active', willOpen);
      menuToggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    }

    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggleMenu(false);
      });
    });

    // Close when clicking outside menu on mobile
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && e.target !== menuToggle) {
        toggleMenu(false);
      }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        toggleMenu(false);
      }
    });
  }

  // =========================================================================
  // 5. SMOOTH SCROLL SPY FOR NAVIGATION
  // =========================================================================
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-links a[href*='${sectionId}']`);

      if (targetNavLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
          targetNavLink.classList.add('active');
        }
      }
    });
  });
});
