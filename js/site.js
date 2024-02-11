"use strict";

$(document).ready(function () {
	/* Video Lightbox */
	if (!!$.prototype.simpleLightboxVideo) {
		$('.video').simpleLightboxVideo();
	}

	/*ScrollUp*/
	if (!!$.prototype.scrollUp) {
		$.scrollUp();
	}

	/*Responsive Navigation*/
	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-trigger span").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$(this).removeClass("open");
		} else {
			$("nav#nav-mobile ul").addClass("expanded").slideDown(250);
			$(this).addClass("open");
		}
	});

	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-mobile ul a").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$("#nav-trigger span").removeClass("open");
		}
	});

	/* Sticky Navigation */
	if (!!$.prototype.stickyNavbar) {
		$('#header').stickyNavbar();
	}

	$('#content').waypoint(function (direction) {
		if (direction === 'down') {
			$('#header').addClass('nav-solid fadeInDown');
		}
		else {
			$('#header').removeClass('nav-solid fadeInDown');
		}
	});

});


/* Preloader and animations */
$(window).load(function () { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow-y': 'visible'});

	/* WOW Elements */
	if (typeof WOW == 'function') {
		new WOW().init();
	}

	/* Parallax Effects */
	if (!!$.prototype.enllax) {
		$(window).enllax();
	}

});

    const translations = {
    "Dashboard": {
      "ru": "Панель управления",
      "kk": "Басқару панели"
    },
    "About us": {
      "ru": "О нас",
      "kk": "Біз туралы"
    },
    "Reports": {
      "ru": "Отчеты",
      "kk": "Есептер"
    },
    "3'rt Floor": {
      "ru": "3-й этаж",
      "kk": "3-ші қабат"
    },
    "2'nd Floor": {
      "ru": "2-й этаж",
      "kk": "2-ші қабат"
    },
    "1'st Floor": {
      "ru": "1-ый этаж",
      "kk": "1-ші қабат"
    },
    "Overview": {
      "ru": "Обзор",
      "kk": "Үлгі"
    },
    "Message": {
      "ru": "Сообщение",
      "kk": "Хабарлама"
    },
    "Settings": {
      "ru": "Настройки",
      "kk": "Параметрлер"
    },
    "Login": {
      "ru": "Войти",
      "kk": "Кіру"
    }
  };

  const languages = ['en', 'kk', 'ru'];
  let currentIndex = languages.indexOf(localStorage.getItem('language') || 'en'); // Получаем индекс текущего языка

  // Добавляем обработчик события клика на кнопку
  document.getElementById('toggleLanguage').addEventListener('click', function () {
    // Определяем следующий язык
    currentIndex = (currentIndex + 1) % languages.length; // Переходим к следующему языку в цикле

    // Получаем новый язык
    const newLanguage = languages[currentIndex];

    // Сохраняем новый язык в localStorage
    localStorage.setItem('language', newLanguage);

    // Переводим текст на новый язык
    translatePage(newLanguage);
  });

  // Функция для перевода всех слов на указанный язык
  function translatePage(language) {
    const links = document.querySelectorAll('.links a');
    links.forEach(link => {
      const englishWord = link.textContent.trim();
      const translatedWord = translateWord(englishWord, language);
      link.textContent = translatedWord;
    });
  }

  // Функция для перевода слова на указанный язык
  function translateWord(word, language) {
    if (translations[word]) {
      return translations[word][language] || word; // Возвращает перевод или само слово, если перевода нет
    } else {
      return word; // Возвращает само слово, если оно не найдено в объекте translations
    }
  }

  // Вызываем функцию для перевода на язык, сохраненный в localStorage, при загрузке страницы
  document.addEventListener('DOMContentLoaded', function () {
    const savedLanguage = localStorage.getItem('language');
    const defaultLanguage = savedLanguage || 'en'; // Если язык не сохранен, используем английский язык
    translatePage(defaultLanguage);
  });
