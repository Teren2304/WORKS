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

	checkScrollTop();
	
	$(window).scroll(function () {
      checkScrollTop();
    });
    
    function checkScrollTop(){
    	if ($(this).scrollTop() > 150) 
	      	$('.button-top').fadeIn();
	      else 
	      	$('.button-top').fadeOut();
    }
});