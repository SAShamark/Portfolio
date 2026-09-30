(function () {
   'use strict';

   var sectionIds = ['home', 'about', 'portfolio', 'contact'];
   var desktopItems = Array.from(document.querySelectorAll('#desktop-nav .desktop-nav-element'));
   var mobileItems = Array.from(document.querySelectorAll('#mobile-nav .mobile-nav-element'));
   var mobileToggle = document.getElementById('inputmobile');
   var heroButton = document.getElementById('link-games');
   var heroCards = Array.from(document.querySelectorAll('.hero-game-card'));

   function setActive(index) {
      desktopItems.forEach(function (item, itemIndex) { item.classList.toggle('active', itemIndex === index); });
      mobileItems.forEach(function (item, itemIndex) { item.classList.toggle('active', itemIndex === index); });
   }

   function scrollToSection(index, updateHash) {
      var section = document.getElementById(sectionIds[index]);
      if (!section) return;
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActive(index);
      if (updateHash && window.history.replaceState) window.history.replaceState(null, '', '#' + sectionIds[index]);
      if (mobileToggle) mobileToggle.checked = false;
   }

   function bindNavigation(items) {
      items.forEach(function (item, index) {
         item.addEventListener('click', function () { scrollToSection(index, true); });
      });
   }

   bindNavigation(desktopItems);
   bindNavigation(mobileItems);

   if (heroButton) heroButton.addEventListener('click', function () { scrollToSection(3, true); });
   heroCards.forEach(function (card) {
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', 'Explore selected projects');
      card.addEventListener('click', function () { scrollToSection(2, true); });
      card.addEventListener('keydown', function (event) {
         if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            scrollToSection(2, true);
         }
      });
   });

   if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
         entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            var index = sectionIds.indexOf(entry.target.id);
            if (index === -1) return;
            setActive(index);
            if (window.history.replaceState) window.history.replaceState(null, '', '#' + entry.target.id);
         });
      }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

      sectionIds.forEach(function (id) {
         var section = document.getElementById(id);
         if (section) observer.observe(section);
      });
   }

   function openHashTarget() {
      var index = sectionIds.indexOf(window.location.hash.replace('#', ''));
      if (index !== -1) window.setTimeout(function () { scrollToSection(index, false); }, 0);
   }

   window.addEventListener('hashchange', openHashTarget);
   openHashTarget();
})();
