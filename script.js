(function () {
  'use strict';

  var sidebar = document.getElementById('sidebar');
  var sidebarOverlay = document.getElementById('sidebarOverlay');
  var menuToggle = document.getElementById('menuToggle');

  function openSidebar() {
    if (sidebar) sidebar.classList.add('is-open');
    if (sidebarOverlay) {
      sidebarOverlay.classList.add('is-visible');
      sidebarOverlay.setAttribute('aria-hidden', 'false');
    }
    if (menuToggle) {
      menuToggle.classList.add('is-open');
      menuToggle.setAttribute('aria-label', 'Close menu');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    if (sidebar) sidebar.classList.remove('is-open');
    if (sidebarOverlay) {
      sidebarOverlay.classList.remove('is-visible');
      sidebarOverlay.setAttribute('aria-hidden', 'true');
    }
    if (menuToggle) {
      menuToggle.classList.remove('is-open');
      menuToggle.setAttribute('aria-label', 'Open menu');
    }
    document.body.style.overflow = '';
  }

  function toggleSidebar() {
    var isOpen = sidebar && sidebar.classList.contains('is-open');
    if (isOpen) closeSidebar(); else openSidebar();
  }

  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', toggleSidebar);
  }
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebar);
  }

  // Close sidebar when clicking a sidebar link (e.g. anchor)
  var sidebarLinks = document.querySelectorAll('.sidebar__link');
  sidebarLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.matchMedia('(max-width: 900px)').matches) closeSidebar();
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
