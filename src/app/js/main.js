/**
 * Template Name: Company
 * Template URL: https://bootstrapmade.com/company-free-html-bootstrap-template/
 * Updated: Aug 07 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader) {
      console.warn('#header element not found');
      return;
    }
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', () => {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    });
  } else {
    console.warn('.mobile-nav-toggle element not found');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  const navMenuLinks = document.querySelectorAll('#navmenu a');
  if (navMenuLinks.length > 0) {
    navMenuLinks.forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          document.querySelector('body').classList.remove('mobile-nav-active');
          if (mobileNavToggleBtn) {
            mobileNavToggleBtn.classList.remove('bi-x');
            mobileNavToggleBtn.classList.add('bi-list');
          }
        }
      });
    });
  } else {
    console.warn('No #navmenu a links found');
  }

  /**
   * Toggle mobile nav dropdowns
   */
  const dropdownToggles = document.querySelectorAll('.navmenu .toggle-dropdown');
  if (dropdownToggles.length > 0) {
    dropdownToggles.forEach(navmenu => {
      navmenu.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      });
    });
  } else {
    console.warn('No .toggle-dropdown elements found');
  }

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  } else {
    console.warn('#preloader element not found');
  }

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    function toggleScrollTop() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }

    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);
  } else {
    console.warn('.scroll-top element not found');
  }

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    } else {
      console.warn('AOS library not found');
    }
  }
  window.addEventListener('load', aosInit);

  /**
   * Auto generate the carousel indicators
   */
  const carouselIndicators = document.querySelectorAll('.carousel-indicators');
  if (carouselIndicators.length > 0) {
    carouselIndicators.forEach((carouselIndicator) => {
      const carousel = carouselIndicator.closest('.carousel');
      if (carousel) {
        const carouselItems = carousel.querySelectorAll('.carousel-item');
        carouselItems.forEach((carouselItem, index) => {
          carouselIndicator.innerHTML += `<li data-bs-target="#${carousel.id}" data-bs-slide-to="${index}" class="${index === 0 ? 'active' : ''}"></li>`;
        });
      }
    });
  } else {
    console.warn('No .carousel-indicators elements found');
  }

  /**
   * Initiate glightbox
   */
  if (typeof GLightbox !== 'undefined') {
    GLightbox({
      selector: '.glightbox'
    });
  } else {
    console.warn('GLightbox library not found');
  }

  /**
   * Init isotope layout and filters
   */
  const isotopeLayouts = document.querySelectorAll('.isotope-layout');
  if (isotopeLayouts.length > 0) {
    isotopeLayouts.forEach(function(isotopeItem) {
      const container = isotopeItem.querySelector('.isotope-container');
      if (!container) {
        console.warn('No .isotope-container found inside .isotope-layout');
        return;
      }

      imagesLoaded(container, function() {
        const initIsotope = new Isotope(container, {
          itemSelector: '.isotope-item',
          layoutMode: isotopeItem.getAttribute('data-layout') ?? 'masonry',
          filter: isotopeItem.getAttribute('data-default-filter') ?? '*',
          sortBy: isotopeItem.getAttribute('data-sort') ?? 'original-order'
        });

        isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
          filters.addEventListener('click', function() {
            const activeFilter = isotopeItem.querySelector('.isotope-filters .filter-active');
            if (activeFilter) activeFilter.classList.remove('filter-active');
            this.classList.add('filter-active');
            initIsotope.arrange({
              filter: this.getAttribute('data-filter')
            });
          });
        });
      });
    });
  }

  /**
   * Animate the skills items on reveal
   */
  const skillsAnimation = document.querySelectorAll('.skills-animation');
  if (skillsAnimation.length > 0) {
    skillsAnimation.forEach((item) => {
      new Waypoint({
        element: item,
        offset: '80%',
        handler: function() {
          const progress = item.querySelectorAll('.progress .progress-bar');
          progress.forEach(el => {
            el.style.width = el.getAttribute('aria-valuenow') + '%';
          });
        }
      });
    });
  }

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    if (typeof Swiper !== 'undefined') {
      document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
        const configElement = swiperElement.querySelector(".swiper-config");
        if (configElement) {
          const config = JSON.parse(configElement.innerHTML.trim());
          new Swiper(swiperElement, config);
        }
      });
    } else {
      console.warn('Swiper library not found');
    }
  }
  window.addEventListener("load", initSwiper);

});
