$( document ).ready(function() {
	$('.mouse').click(function(){
	    $('html, body').animate({
	       	scrollTop: $('#section-1').position().top
	    }, 1500);
	});

	$('.button-top').click(function () {
	    $('body, html').animate({
	      scrollTop: 0
	    }, 1000);
    });

	$('.reviews').slick({
		dots: true,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		autoplay: true
	});
	
	checkScrollTop();
	$(window).scroll(function () {
      checkScrollTop();
    });
    
    function checkScrollTop(){
    	if ($(this).scrollTop() > 150){
	      	$('.button-top').fadeIn();
	      	$('.nav').addClass('fixed');
	    }
	    else{
	      	$('.button-top').fadeOut();
	      	$('.nav').removeClass('fixed');
	    }
    }

	$(".nav .menu").on("click", "a", function(event){
	    event.preventDefault();
	    $('.nav .menu .menu-item').removeClass('active');
	    $(this).addClass('active');
	    var navHeight = $(".nav").outerHeight();
	    var idItem = $(this).attr('href');
	    var topScroll = $(idItem).offset().top;  
	    $('body, html').animate({scrollTop: topScroll - navHeight}, 1500);
	}); 
});