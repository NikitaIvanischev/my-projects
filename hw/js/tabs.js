document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.how-we-are-working__link').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;
      console.log(path)

      document.querySelectorAll('.how-we-are-working__wrapper').forEach(function(tabContent) {
        tabContent.classList.remove('how-we-are-working__wrapper-active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('how-we-are-working__wrapper-active');
    });
  });
});
