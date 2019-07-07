$(document).ready(function() {


// мобильная навигация


// Создаем переменые для кнопки и для меню
	var pull = $("#navigation-rus");
	var holl = $("#navigation-eng")
	var rus = $(".navigation-rus");
	var eng = $(".navigation-eng");
	var flag_rus = $(".flag-rus");
	var flag_eng = $(".flag-eng");


	// var Nav_icon = $('.navigation__tougle .fa');
	// var iconNav = 'fa-bars tougle--white';
	// var iconClose = 'fa-times tougle--blue';
	// var blockLink = $(".nav_block a");
	// var blockOpen = "nav_block--open";

    // Описываем событие при нажатии на кнопку
	$(pull).on("click", function(e){
        
        // Отменяем стандартное поведение ссылки в браузере
		e.preventDefault();

		rus.removeClass("hidden");

		eng.removeClass("visible");
		eng.addClass("hidden");

		flag_rus.removeClass("flag-rus--hidden");
		flag_eng.addClass("flag-eng--hidden");

	});

	$(holl).on("click", function(e){
        
        // Отменяем стандартное поведение ссылки в браузере
		e.preventDefault();

		rus.removeClass("visible");
		rus.addClass("hidden");

		eng.removeClass("hidden");

		flag_eng.removeClass("flag-eng--hidden");
		flag_rus.addClass("flag-rus--hidden");

	});


  $(".owl-carousel").owlCarousel({
  	items: 1,
  	loop: true,
  	autoplay: true,
  	autoplayTimeout: 5000,
  });

	
});