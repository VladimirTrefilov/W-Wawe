document.addEventListener('DOMContentLoaded', function() {

  // header button search

  document.querySelector('.header__rowOne__search').addEventListener('click',function() {
    document.querySelector('.header__rowOne__search__active').style.opacity = '1';
    document.querySelector('.header__rowOne__search__active').style.visibility = 'initial';
  });
  document.querySelector('.header__rowOne__search__active_btn').addEventListener('click',function() {
    document.querySelector('.header__rowOne__search__active').style.opacity = '0';
    document.querySelector('.header__rowOne__search__active').style.visibility = 'hidden';
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

})
