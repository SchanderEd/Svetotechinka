document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.projects__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerGroup: 2,
    slidesPerView: 2,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  // Табы

  document.querySelectorAll('.catalog__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      console.log(path)

      document.querySelectorAll('.catalog__tab').forEach(function (tabContent) {
        tabContent.classList.remove('catalog__tab--active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__tab--active')
    })
  })

  // Активное состояние кнопки табов

  const catalogBtn = document.querySelectorAll('.catalog__btn')
  catalogBtn.forEach(catalogItem => {
    catalogItem.addEventListener('click', (e) => {
      catalogBtn.forEach(el => { el.classList.remove('catalog__btn--active'); });
      catalogItem.classList.add('catalog__btn--active')
      })
  })
})