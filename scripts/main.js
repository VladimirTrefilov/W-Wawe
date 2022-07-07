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


  // guests accordion

  // new Accordion('.guests__accordion', {
  //   elementClass: 'accordion',
  //   triggerClass: 'accordion__control',
  //   panelClass: 'accordion__content',
  //   activeClass: 'accordion-active'
  // });

  $( function() {
    $( "#accordion" ).accordion({
      icons: false,
      heightStyle: "content",
      collapsible: true,
      active: false,
      width: 700,
    });
  });

  let item = document.querySelector('.accordion__item');
  let def = document.querySelector('.guests__cards__default');
  let card = document.querySelector('.guests__cards');

  item.addEventListener("click", function() {
    card.classList.toggle("closed");
    def.classList.toggle("closed");
  });

  $( function() {
    $( "input" ).checkboxradio({
    });
  } );

  // $( function() {
  //   $( "#slider" ).slider({
  //     disable: true
  //   });
  // } );


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
