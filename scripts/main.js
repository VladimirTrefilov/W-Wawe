document.addEventListener('DOMContentLoaded', function() {

  // header button search

  const searchActive = document.querySelector('.header__rowOne__search__active');
  const activeInput = document.querySelector('.header__rowOne__search__active_input');

  document.querySelector('.header__rowOne__search').addEventListener('click',function() {
    searchActive.style.opacity = '1';
    searchActive.style.visibility = 'initial';
    activeInput.focus();
  });
  document.querySelector('.header__rowOne__search__active_btn').addEventListener('click',function() {
    searchActive.style.opacity = '0';
    searchActive.style.visibility = 'hidden';
  });
  window.addEventListener('click', e => { // при клике в любом месте окна браузера
    const target = e.target // находим элемент, на котором был клик
    if (!target.closest('.header__rowOne__search__active') && !target.closest('.header__rowOne__search')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
      searchActive.style.opacity = '0';
      searchActive.style.visibility = 'hidden';
    }
  })
  searchActive.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
      searchActive.style.opacity = '0';
      searchActive.style.visibility = 'hidden';
      }
  });

  // podcasts article more podcasts

  morePodcasts = document.querySelectorAll('.more-podcasts-toggle');

  document.querySelector('.podcasts__btn').addEventListener('click', function () {
    morePodcasts.forEach(n => {
      n.classList.toggle('more-podcasts')
    })
  });

  // broadcasts select

  const element = document.querySelector('.select');
  const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: ''
  });

  choices.passedElement.element.addEventListener(
    'unhighlightItem',
    function(event) {
      // each time an item is highlighted
      console.log(event.detail.id);
      console.log(event.detail.value);
      console.log(event.detail.label);
      console.log(event.detail.groupValue);
    },
    false,
  );

  // guests accordion

  const header = document.querySelectorAll('.accordion__item')

  function itemShowDel (el) {
    el.forEach(d => {
      d.classList.remove('accordion__item_show');
    })
  }

  header.forEach(n => {
    n.addEventListener('click', (e) => {
      itemShowDel(header)
      // получим элемент .accordion__header
      const elHeader = e.target.closest('.accordion__header');
      // если такой элемент не найден, то прекращаем выполнение функции
      if (!elHeader) {
        return;
      }
      // переключим класс accordion__item_show элемента .accordion__header
      elHeader.parentElement.classList.toggle('accordion__item_show');
    })
  });

  // about swiper

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiperPrev = document.getElementById('swiperPrev');
  const swiperNext = document.getElementById('swiperNext');

  swiperPrev.addEventListener('click', () => {
    swiper.slidePrev();
  });
  swiperNext.addEventListener('click', () => {
    swiper.slideNext();
  });


  // about form validation

  const validation = new JustValidate('#about__form');

  validation
    .addField('#about__form__text', [
      {
        rule: 'required',
        errorMessage: 'Введите минимум 2 символа',
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Введите минимум 2 символа',
      },
    ])
    .addField('#about__form_name', [
      {
        rule: 'required',
        errorMessage: "Введите имя",
      },
      {
        rule: 'customRegexp',
        value: /^[\p{L} ,.'-]+$/u,
        errorMessage: 'Введите имя из букв',
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Введите минимум 2 символа',
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Максимум 30 символов',
      },
    ])
    .addField('#about__form_email', [
      {
        rule: 'required',
        errorMessage: 'Введите email',
      },
      {
        rule: 'email',
        errorMessage: 'Введите корректный email',
      },
  ]);

    // Open modal

  const FOCUSABLE_SELECTORS = 'input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]';
  const openModalBtn = document.querySelector('.open__modal');
  const closeModalBtn = document.querySelector('.close__modal');
  const modal = document.querySelector('.modal');
  const main = document.querySelector('main');

  function openModal() {
      modal.style.display = 'flex';
      modal.querySelector(FOCUSABLE_SELECTORS).focus();
      const focusableElements = main.querySelectorAll(FOCUSABLE_SELECTORS);
      focusableElements.forEach(el => el.setAttribute('tabindex', '-1'));
      // Trap the screen reader focus as well with aria roles. This is much easier as our main and modal elements are siblings, otherwise you'd have to set aria-hidden on every screen reader focusable element not in the modal.
      modal.removeAttribute('aria-hidden');
      main.setAttribute('aria-hidden', 'true');
  }

  function closeModal() {
      modal.style.display = 'none';
      const focusableElements = main.querySelectorAll(FOCUSABLE_SELECTORS);
      focusableElements.forEach(el => el.removeAttribute('tabindex'));
      modal.setAttribute('aria-hidden', 'true');
      main.removeAttribute('aria-hidden');
      openModalBtn.focus();
  }

  openModalBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);
  modal.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
      closeModal()
    }
  });

  // Modal form validation

  const validationModal = new JustValidate('#modal__form');

  validationModal
    .addField('#modal__form_name', [
      {
        rule: 'required',
        errorMessage: "Введите имя",
      },
      {
        rule: 'customRegexp',
        value: /^[\p{L} ,.'-]+$/u,
        errorMessage: 'Введите имя из букв',
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Введите минимум 2 символа',
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Максимум 30 символов',
      },
    ]);
})
