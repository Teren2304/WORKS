$(document).ready(function() {

    // lightslider init
	$('.product-gallery').lightSlider({
        gallery:true,
        item:1,
        loop:true,
        thumbItem:4,
        slideMargin:0,
        enableDrag: false,
        currentPagerPosition:'left',
        onSliderLoad: function(el) {
            el.lightGallery({
                selector: '.imageGallery .lslide'
            });
        }   
    });

	if ($(document).outerWidth() < 768) {
		$('.show').click(function(){
			if ($(this).hasClass('active')) {
				$(this).removeClass('active').addClass('not-active');
				$('.menu').removeClass('active').addClass('not-active');
			}
			else{
				$(this).addClass('active').removeClass('not-active');
				$('.menu').addClass('active').removeClass('not-active');
			}
		});

        sortShowMobile();
        
    }
    else{
        $('.menu').removeClass('active').removeClass('not-active');
    }

    $('.sort-header').click(function(){
        $(this).next().slideToggle();
    });

    $('.popup-tab-link:first-child').addClass('active');
    $('.popup-tab-body:first-child').show();    

    popupTabSwitch('login');
    popupTabSwitch('registration');
    popupTabSwitch('edit-popup');

    if ($(window).width() > 991) {
        changeMainBg('mouseover');
    } else {
        // changeMainBg('click');        
    }

    showPopup('user-login', 'login');
    showPopup('user-registration', 'registration');
    showPopup('user-edit', 'edit-popup');

    $('.popup-close').click(function(){
        $('.popup').hide();
        $('.blur').removeClass('block');
    });

});

function showPopup(element, popup) {
    $('.' + element).click(function(){
        $('.popup.'+ popup).show();
        $('.blur').addClass('block');
    });
}

function clickPopup(parent, data){
    var attr = $(data).attr('data');
    $(parent + ' .popup-tab-body').hide();
    $(parent + ' .popup-tab-link').removeClass('active');
    $(attr).show();
    $(data).addClass('active');
}

function popupTabSwitch(popup) {
    $('.popup.' + popup + ' .popup-tab-link').click(function(){
        clickPopup('.' + popup, this);
    });
}

function sortShowMobile() {
    $('.sort-show').click(function(){
        if ($(this).hasClass('hide')) {
            $(this).removeClass('hide');
            $('.sort-wrapper').animate({left: '0px'}, 500);     
            $(this).removeClass('fa-angle-right').addClass('fa-angle-left');    
        }
        else
        { 
            $(this).addClass('hide');
            $('.sort-wrapper').animate({left: '-240px'}, 500);
            $(this).removeClass('fa-angle-left').addClass('fa-angle-right');    
        }
    });    
}

// Gooogle map api
    var map;

    function initMap() {
        var myLatlng = new google.maps.LatLng(41.721459, 44.742449);
        var image = 'img/content/about-us/map-icon.png';
        var mapOptions = {
            center: { lat: 41.722, lng: 44.742 },
            zoom: 14,
            zoomControl: false,
            scrollwheel: false,
            disableDefaultUI: true,
            styles: [
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e9e9e9"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 29
                        },
                        {
                            "weight": 0.2
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 18
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dedede"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "saturation": 36
                        },
                        {
                            "color": "#333333"
                        },
                        {
                            "lightness": 40
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
                }
            ] 
        }
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            icon: image
        });

        google.maps.event.addDomListener(window, "resize", function() {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });
    }
// END OF gooogle map api

function changeMainBg(event) {
    $('.index-menu-item').on(event, function() {
        var mainBg = $(this).attr('data-main-bg');
        $('.index-menu-item').removeClass('active');
        $(this).addClass('active');
        $('.home-page').css('background-image', 'url(img/content/index/' + mainBg + ')');
    });
} 