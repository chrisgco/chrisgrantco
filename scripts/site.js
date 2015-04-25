/*
Site.js
Author: Chris Grant
*/
'use strict';

// Typekit Fonts
try {
  Typekit.load();
} catch (e) {}

// Loader
Pace.on('done', function() {
  // Hide Loader
  $('.loader').hide();

  // Animations
  $('body').css('opacity', 0);
  $('body').animate({
    opacity: 1
  }, 1000);
  $('.header').addClass('animated fadeInDown');
  $('.slide .title').addClass('animated fadeIn');
  $('.slide .subtitle').addClass('animated fadeIn');
  $('.slide .action').addClass('animated fadeInUp');
  $('.categories').addClass('animated fadeInDown');
  $('.work').addClass('animated fadeInUp');


})


jQuery(document).ready(function($) {

  var windowHeight = $(window).height();
  var windowWidth = $(window).width();


  //Navigation Menu
  $(document).scroll(function() {
    var pageY = $(this).scrollTop();
    if (pageY < 100) {
      $('.header').removeClass("scroll", "fast", "swing");
    } else {
      $('.header').addClass("scroll", "fast", "swing");
    }
  });

  $(".header .menu").click(function(e) {
    if (!$(".header").hasClass("active")) {
      $('.header .navigation').css('margin-top', (windowHeight - $('.header .navigation').height()) / 2);
      $('.header').addClass("active", "fast", "swing");
    } else {
      $('.header').removeClass("active", "fast", "swing");
    }
  });

  // Slider
  if ($('.slider').length > 0) {
    $('.slider').fullpage({
      slideSelector: '.slide',
      sectionSelector: '.slides',

      //Scrolling
      css3: true,
      scrollingSpeed: 700,
      autoScrolling: true,
      fitToSection: true,
      easing: 'easeInOutCubic',
      easingcss3: 'ease',
      loopHorizontal: true,

      //Design
      controlArrows: true,
      verticalCentered: true,
      resize: true,

      afterRender: function() {
        setInterval(function() {
          $.fn.fullpage.moveSlideRight();
        }, 5000);
      }

    });
  }

  // Work
  $(".work").hover(function(e) {
    $(this).find(".thumbnail").addClass("active");
    $(this).find(".info").addClass("active");
  }, function() {
    $(this).find(".thumbnail").removeClass("active");
    $(this).find(".info").removeClass("active");
  });

  $(".work .info").click(function() {
    console.log('click')
    var url = $(this).parent().attr("data-url");
    window.open(url, "_self");
  });
  if($('.blog .post').length > 3) {
    $('.blog').masonry({
      itemSelector: '.post'
    })
  }

  if ($('.article').length > 0) {
    $('.article-header').fullpage({
      autoScrolling: false,
          fitToSection:false,
          css3: true
    });
    $('.article .scroll').click(function(e) {
      $('html, body').animate({
          scrollTop: $('.article .article-content').offset().top + -135
      }, 750);
    })
  }

});
