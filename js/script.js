// кнопка показать еще

$(document).ready(function() {
    var list = $(".podcast__box");
    var numToShow = 4; //сколько показывать элементов
    var button = $(".podcast__btn");
    var numInList = list.length;
    list.hide();
    if (numInList > numToShow) {
      button.show();
    }
    list.slice(0, numToShow).show();
    button.click(function() {
      var showing = list.filter(':visible').length;
      list.slice(showing - 1, showing + numToShow).fadeIn();
      var nowShowing = list.filter(':visible').length;
      if (nowShowing >= numInList) {
        button.hide();
      }
    });
  });

  // broadcast choice js

  const select = function () {
    const element = document.querySelector('.broadcast__select');
    const choices = new Choices(element, {
      searchEnabled: false,
      itemSelectText: '',
    });
  }

  select ();

  // accordion guests

  $( function() {
    $( "#accordion" ).accordion({
      collapsible: true,
    });
  });


// таб для раздела guest
let activityLink = document.querySelectorAll (".accordion__link");
let activitySlide = document.querySelectorAll (".guests__person")


activityLink.forEach(function (el) {
  el.addEventListener ("click", function (event) {
    const path = event.currentTarget.dataset.path;

    activitySlide.forEach (function (tabContent) {
      tabContent.classList.remove ("active-block");
    })
    document.querySelector(`[data-target="${path}"]`).classList.add ("active-block");
  })
});


// валидация формы ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

new JustValidate (".form", {
  rules: {
    name: {
      required:true,
      minLength:1,
      maxLength:10,
    },
    mail: {
      required:true,
      email:true,
    },
    text: {
      required:true,
      minLength:10,
      maxLength:100,
    },
    tooltip: {
      selectorWrap: '.tooltip-wrapper' // default value - just-validate-tooltip-container
    },
    checkbox: {
      required: true,
    }
  },
  messages: {
    name: {
      minLength: 'Введите минимум 1 символ',
      required: 'Поле обязательно для заполнения',
      maxLength: 'Не более 10 символов',
    },
    text: {
      minLength: 'Введите минимум 10 символов',
      required: 'Поле обязательно для заполнения',
      maxLength: 'Не более 100 символов',
    },
    email: 'Ошибка',
    checkbox: {
      required: "Поставьте галку",
    }
  },
});

// реализация поиска (открытие)

let loop = document.querySelector(".header__loop");
let searchField =  document.querySelector (".header__search-field");

loop.addEventListener ("click", function () {
  searchField.classList.toggle ("active-block");
});

// реализация бургер-меню (открытие)

let burger = document.querySelector (".burger");
let navigation = document.querySelector (".nav");
let iconClose = document.querySelector (".burger__icon-close");
let iconOpen = document.querySelector (".burger__icon-open");
let menuHeaderBottom = document.querySelector (".nav-bottom");

burger.addEventListener ("click", function () {
  navigation.classList.toggle ("active-block");
  iconClose.classList.toggle ("active-block");
  iconOpen.classList.toggle ("disable-block");
  menuHeaderBottom.classList.toggle ("active-block");
});


// реализация "Что в эфире?" для мобильного

let musicOnline = document.querySelector (".header__info-online");
let musicBOx = document.querySelector (".music-box");
let iconOnline = document.querySelector (".header__icon-online");

musicOnline.addEventListener ("click", function () {
  musicBOx.classList.toggle ("flex-block");
  iconOnline.classList.toggle ("reverse");
});


// переполнение блока
$(".podcast__name").each(function() {
  // вызов плагина для каждого элемента (this)
  $clamp(this, {clamp: 1, truncationChar: false, animate: true})
});

$(".podcast__author").each(function() {
  // вызов плагина для каждого элемента (this)
  $clamp(this, {clamp: 1, truncationChar: false, animate: true})
});

$(".broadcast__archive-info").each(function() {
  // вызов плагина для каждого элемента (this)
  $clamp(this, {clamp: 3, truncationChar: false, animate: true})
});
