/*
 * Talamone (HTML)
 * Copyright 2014 Limitless LLC
 * www.limitless.company
 */

jQuery(document).ready(function($) {
   'use strict';

   	//Vars
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	var pageY = 0;

	//Basics
	$(document).scroll(function() { 
		pageY = $(this).scrollTop();
		if(pageY<100) {
			$('.header').removeClass("scroll", "fast", "swing");
		} else {
			$('.header').addClass("scroll", "fast", "swing");
		}
	});
	//Basics

	//Navigate
	$("header .logo").click(function(e){
		window.open("index.html", "_self");
	});

	$(".header .navigation li").click(function(){
		var type = $(this).attr("data-type");
		var url = $(this).attr("data-url");
		if(type=="in") {
			$('html,body').stop().animate({scrollTop: $("#"+url).position().top - 80}, 'slow');
		} else {
			window.open(url, "_self");	
		}
	});

	var pageNext = $(".header .navigation li.active").next().attr("data-url");
	var pagePrev = $(".header .navigation li.active").prev().attr("data-url");
	
	if (!pageNext) {
		$(".cover .right").hide();
	}

	if (!pagePrev) {
		$(".cover .left").hide();
	}

	$(".cover .right").click(function(){
		window.open(pageNext, "_self");
	});

	$(".cover .left").click(function(){
		window.open(pagePrev, "_self");
	});

	$(".team .member.join").click(function(){
		window.open("contact.html", "_self");
	});
	//Navigate

	//Navigation Menu
    $(".header .menu").click(function(e){
    	if (!$(".header").hasClass("active")) {
			$('.header .navigation').css('margin-top', (windowHeight - $('.header .navigation').height()) / 2);
			$('.header').addClass("active", "fast", "swing");
		} else {
			$('.header').removeClass("active", "fast", "swing");
		}
    });
	//Navigation Menu

	//Home
 	$(".home .discover").click(function(){
		var url = $(this).attr("data-url");
		window.open(url, "_self");
	});

 	$(".home .watch").click(function(){
 		var url = $(this).attr("data-url");
 		$.magnificPopup.open({
			items: {
			    src: url,
			    type: "iframe"
			}
		});
	});	


	$(".home .slider li").each(function() {
		$(this).css("background-image", "url("+$(this).attr("data-url")+")");
	});

	$('.home .slider').flexslider({
	    animation: "fade",
	    animationLoop: true,
	    animationSpeed: 1500,
	    easing: "easeOutBack",
	    slideshow: true,
	    pauseOnHover: false,
	    controlNav: false,
	    directionNav: true
 	});
	//Home


	//Team
	$(".team .member").hover(function(e){
		$(".team .member").stop().animate({ opacity: 0.25 }, 'slow');
		$(this).stop().animate({ opacity: 1 }, 'slow');
	}, function(){ 
		$(".team .member").stop().animate({ opacity: 1 }, 'slow');
	});

	$(".team .member").each(function() {
		$(this).find(".image").css("background-image", "url(./img/misc/team-image.png), url("+$(this).find("img").attr("src")+")");
	});
	//Team


	//Work
	$(".works .filter li").click(function(){
		var cat = $(this).text().toLowerCase();
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		if(cat=="all") {
			$(".works .project").stop().animate({ opacity: 1 }, 'slow');
		} else {
			$(".works .project").each(function() {
				var wrk = $(this).attr("data-type").toLowerCase();
				if( wrk == cat) {
					$(this).stop().animate({ opacity: 1 }, 'slow');
				} else {
					$(this).stop().animate({ opacity: 0.05 }, 'slow');
				}
			});
		}
	});

	$(".works .project").hover(function(e){
		$(this).find(".thumbnail").addClass("active");
		$(this).find(".info").addClass("active");
	}, function(){ 
		$(this).find(".thumbnail").removeClass("active");
		$(this).find(".info").removeClass("active");
	});

	$(".project .screenshot").hover(function(e){
		$(".project .screenshot").stop().animate({ opacity: 0.25 }, 'slow');
		$(this).stop().animate({ opacity: 1 }, 'slow');
	}, function(){ 
		$(".project .screenshot").stop().animate({ opacity: 1 }, 'slow');
	});

	$(".works .project img, .works .project .title").click(function(){
		var url = $(this).parent().parent().attr("data-url");
		window.open(url, "_self");
	});

	$(".project .facebook").click(function(){
		var url = $(location).attr('href');
		window.open("https://www.facebook.com/sharer/sharer.php?u="+url, "Share Template", "width=600, height=400, status=no, toolbar=no, menubar=no");
	});

	$(".project .twitter").click(function(){
		var url = $(location).attr('href');
		window.open("https://twitter.com/home?status="+url, "Share Template", "width=600, height=400, status=no, toolbar=no, menubar=no");
	});

	$(".project .feature").hover(function(e){
		$(this).find("div").addClass("active");
	}, function(){ 
		$(this).find("div").removeClass("active");
	});

	$(".project .image").each(function() {
		$(this).css("background-image", "url("+$(this).attr("data-url")+")");
	});
	//Work

	//Blog
	$(".blog .post .thumbnail, .blog .post .info").click(function(){
		var url = $(this).parent().attr("data-url");
		window.open(url, "_self");
	});

	$(".blog .post").hover(function(e){
		$(".blog .post .thumbnail, .blog .post .info").stop().animate({ opacity: 0.25 }, 'slow');
		$(this).find(".thumbnail").stop().animate({ opacity: 1 }, 'slow');
		$(this).find(".info").stop().animate({ opacity: 1 }, 'slow');
	}, function(){ 
		$(".blog .post .thumbnail, .blog .post .info").stop().animate({ opacity: 1 }, 'slow');
	});
	//Blog

	//Article
	$(".article .links .facebook").click(function(){
		var url = $(location).attr('href');
		window.open("https://www.facebook.com/sharer/sharer.php?u="+url, "Share Template", "width=600, height=400, status=no, toolbar=no, menubar=no");
	});

	$(".article .twitter").click(function(){
		var url = $(location).attr('href');
		window.open("https://twitter.com/home?status="+url, "Share Template", "width=600, height=400, status=no, toolbar=no, menubar=no");
	});
	//Article

	//Services
	$(".services .filter").append("<ul></ul>")
	$(".services .service").each(function() {
		var title = $(this).attr("data-text");
		var icon = $(this).attr("data-icon");
		$(".services .filter ul").append("<li><span class='icon "+icon+"'></span>"+title+"</li>");
	});

	$(".services .filter li:eq(0)").addClass("active");
	$(".services .service:eq(0)").addClass("active");
	$(".services .service:eq(0)").find(".content").css('top', ($(".services .service:eq(0)").find(".info").height() - $(".services .service:eq(0)").find(".content").height()) / 2);


	$(".services .filter li").click(function() {
		var title = $(this).text();
		$(".services .filter li").removeClass("active");
		$(this).addClass("active");
		$(".services .service").removeClass("active");
		$(".services .service").each(function() {
			if($(this).attr("data-text") == title) {
				$(this).addClass("active");
				$(this).find(".content").css('top', ($(this).find(".info").height() - $(this).find(".content").height()) / 2);
			}
		});
	});
	//Services

	//Contact
	$('.contact .submit').click(function(){ 

		$('.contact input#name').removeClass(".error");
		$('.contact textarea#message').removeClass(".error");
		$('.contact input#email').removeClass(".error");
		
		var error = false; 
		var name = $('input#name').val(); 
		if(name == "" || name == " ") { 
			error = true; 
			$('.contact input#name').addClass(".error");
		} 
		
		var msg = $('.contact textarea#message').val(); 
		if(msg == "" || msg == " ") {
			error = true;
			$('.contact textarea#message').addClass(".error");
			
		}
		
		var email_compare = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i; 
		var email = $('.contact input#email').val(); 
		if (email == "" || email == " ") { 
			$('.contact input#email').addClass(".error");
			error = true;
		}else if (!email_compare.test(email)) { 
			$('.contact input#email').addClass(".error");
			error = true;
		}

		if(error == true) {
			return false;
		}

		var data_string = $('.contact form').serialize(); 
		
		$.ajax({
			type: "POST",
			url: $('.contact form').attr('action'),
			data: data_string,
			
			success: function(message) {
				if(message === 'ok'){
					$('.contact .success').fadeIn('slow');
					$('.contact input#name').val('');
					$('.contact input#email').val('');
					$('.contact textarea#message').val('');
				}
				else{
					$('.contact .error').fadeIn('slow');
				}
			}
		});

		return false; 
	});
	//Contact

	//Footer
	$(".footer .top").click(function(){
		$('html,body').animate({scrollTop: 0}, 'slow');
	});

	$(".footer .social li").click(function(){
		var url = $(this).attr("data-url");
		window.open(url, '_blank');
	});

	$(".footer .link").click(function(){
		var url = $(this).attr("data-url");
		window.open(url, '_self');
	});
	//Footer

});

$(window).load(function() {

	fixSizes();
	loadMap();
	$(".loader").delay(1000).fadeOut(1000, function() {
		$(".wrapper").animate({ opacity: 1 }, 1000);
 	});

	//Animations
	setTimeout(function(){$('.header').addClass('animated fadeInDown')},2300);
    
    setTimeout(function(){$('section.home .title').addClass('animated fadeInLeft')},2600);
    setTimeout(function(){$('section.home .subtitle').addClass('animated fadeInRight')},2600);
    setTimeout(function(){$('section.home .buttons').addClass('animated fadeInUp')},2900);

    setTimeout(function(){$('section.about .story').addClass('animated fadeInDown')},2600);
    setTimeout(function(){$('section.about .image').addClass('animated fadeInUp')},2600);

    setTimeout(function(){$('section.works .filter').addClass('animated fadeInDown')},2600);
    setTimeout(function(){$('section.works .row').addClass('animated fadeInUp')},2600);

    setTimeout(function(){$('section.project .info').addClass('animated fadeInDown')},2600);
    setTimeout(function(){$('section.project .gallery').addClass('animated fadeInDown')},2600);
    setTimeout(function(){$('section.project .links').addClass('animated fadeInDown')},2600);

    setTimeout(function(){$('section.services .filter').addClass('animated fadeInDown')},2600);

    setTimeout(function(){$('section.blog .post').addClass('animated fadeInDown')},2600);

    setTimeout(function(){$('section.article .info').addClass('animated fadeInDown')},2600);
    setTimeout(function(){$('section.article .content').addClass('animated fadeInDown')},2600);
    setTimeout(function(){$('section.article .links').addClass('animated fadeInDown')},2600);

    setTimeout(function(){$('section.contact .content').addClass('animated fadeInLeft')},2900);
    setTimeout(function(){$('section.contact .map').addClass('animated fadeInRight')},2900);

    $('section.team').waypoint(function() {
        setTimeout(function(){$('section.team .row').addClass('animated fadeInUp')},0);
    }, { offset: '50' });

    $('section.gallery').waypoint(function() {
        setTimeout(function(){$('section.gallery .container').addClass('animated fadeInUp')},0);
    }, { offset: '50' });

    $('section.facts').waypoint(function() {
        setTimeout(function(){$('section.facts .fact').addClass('animated fadeInUp')},0);
    }, { offset: '50' });
    //Animations

});


$(window).resize(function() {
	fixSizes();
});

function fixSizes() {

	var windowHeight = $(window).height();
	var windowWidth = $(window).width();

	$(".fullscreen").css('height', windowHeight);

	//FIX HOME PAGE VIDEO
	var rat = windowWidth / windowHeight;
	if (rat > (16/9)) {

		var v = windowWidth * (16/9);
		$(".home video").css('width', windowWidth);
		$(".home video").css('height', v);

		var vc = ($(".home video").height() - windowHeight) / 2;
		$(".home video").css('margin-top', '-'+vc+'px');
		$(".home video").css('margin-left', '0px');

	} else {

		var v = windowHeight * (16/9);
		$(".home video").css('height', windowHeight);
		$(".home video").css('width', v);

		var vc = ($(".home video").width() - windowWidth) / 2;
		$(".home video").css('margin-top', '0px');
		$(".home video").css('margin-left', '-'+vc+'px');

	}

	$(".project .info").each(function() {
		$(this).css('top', ($(this).parent().height() - $(this).height()) / 2);
	});

	$(".vertical-center").each(function() {
		$(this).css('top', ($(this).parent().height() - $(this).height()) / 2);
	});

}


function loadMap() {
	
	if($('#map').length) {
		var mapElement = document.getElementById('map');
	    var Lat = $("#map").attr("data-latitude");
	    var Lng = $("#map").attr("data-longitude");
	   	var LatLng = new google.maps.LatLng(Lat,Lng);
	    var zm = $("#map").attr("data-zoom");
	    var mapOptions = {
	        zoom: parseInt(zm),
			center: new google.maps.LatLng(Lat, Lng),
			disableDefaultUI: false,
			mapTypeControl: false,
			scrollwheel: false,
			streetViewControl: false,
			zoomControl: false,
			styles: [{featureType:"landscape",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]/**/},{featureType:"administrative.locality",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"on"}]/**/},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}]
	    };

		var image = {
			url: 'img/misc/map-marker.png',
			size: new google.maps.Size(26, 32),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(17, 34),
			scaledSize: new google.maps.Size(26, 32)
		};

	    var map = new google.maps.Map(mapElement, mapOptions);
	    marker = new google.maps.Marker( {position: LatLng, map: map, icon: image} );
	    marker.setPosition( new google.maps.LatLng( Lat, Lng ) );
	}
}