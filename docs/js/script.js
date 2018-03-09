$(document).ready(function() {

  $(".js--hero-text").addClass("animated fadeInUp");

    /* Sticky navigation */
    $('.js--section-about').waypoint(function(direction) {
      if(direction == "down") {
        $('.js--logo').addClass('logoBlack');
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
        $('.js--logo').removeClass('logoBlack');
      }
    }, {
      offset: '60px'
    });

    /* Header reservation button */
    $("#reservationNav").addClass("animated pulse");

    /* Navigation scroll */
    // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

    /* Animations on scroll */

    $(".js--wp-1").waypoint(function(direction) {
      $(".js--wp-1").addClass('animated fadeIn');
    }, {
      offset: '50%'
    });

    $(".js--wp-2").waypoint(function(direction) {
      $(".js--wp-2").addClass('animated fadeIn');
    }, {
      offset: '50%'
    });

    $(".js--wp-3").waypoint(function(direction) {
      $(".js--wp-3").addClass('animated fadeIn');
    }, {
      offset: '50%'
    });

    $(".js--wp-4").waypoint(function(direction) {
      $(".js--wp-4").addClass('animated fadeIn');
    }, {
      offset: '50%'
    });

    $(".js--wp-5").waypoint(function(direction) {
      $(".js--wp-5").addClass('animated fadeIn');
    }, {
      offset: '50%'
    });

    $(".js--wp-6").waypoint(function(direction) {
      $(".js--wp-6").addClass('animated fadeIn');
    }, {
      offset: '50%'
    });

    $(".js--notification-icon").waypoint(function(direction) {
      $(".js--notification-icon").addClass('animated shake');
    }, {
      offset: '80%'
    });

    $(".js--food-icon").waypoint(function(direction) {
      $(".js--food-icon").addClass('animated pulse');
    }, {
      offset: '80%'
    });

    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
      var nav = $('.js--main-nav');
      var icon = $(".js--nav-icon i");

      nav.slideToggle(200);

      if (icon.hasClass("ion-navicon-round")) {
        icon.addClass('ion-close-round');
        icon.removeClass('ion-navicon-round');
      } else {
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round');
      }

    });

    // Fix navigation resize
    $(window).resize(function(){

      var nav = $('.js--main-nav');

      var icon = $('.js--nav-icon i');

      if ($(window).width() > 767){

      nav.css("display", "block");

      icon.addClass('ion-close-round');

      icon.removeClass('ion-navicon-round');

      } else {

      nav.css("display", "none");

      icon.addClass('ion-navicon-round');

      icon.removeClass('ion-close-round');

      }

    });

    /* Menu section */
    $("#js--lunch").click(function() {
      if($(".menu-lunch").hasClass("hidden")) {
        $(".menu-lunch").css('display', 'block');
        $(".menu-lunch").removeClass('animated fadeOut');
        $(".menu-lunch").addClass('animated fadeIn');
        $(".menu-lunch").removeClass('hidden')
        $(".menu-lunch").addClass('shown');
        $(".menu-dinner").css('display', 'none');
        $(".menu-dinner").addClass('animated fadeOut');
        $(".menu-dinner").removeClass('shown');
        $(".menu-dinner").addClass('hidden');
        $(".menu-wine").css('display', 'none');
        $(".menu-wine").addClass('animated fadeOut');
        $(".menu-wine").removeClass('shown');
        $(".menu-wine").addClass('hidden');
        return false;
      } else {
        $(".menu-lunch").removeClass('animated fadeIn')
        $(".menu-lunch").removeClass('shown');
        $(".menu-lunch").addClass('hidden');
        $(".menu-lunch").css('display', 'none');
        return false;
      }
    });
    //
    $("#js--dinner").click(function() {
      if($(".menu-dinner").hasClass("hidden")) {
        $(".menu-dinner").css('display', 'block');
        $(".menu-dinner").removeClass('animated fadeOut');
        $(".menu-dinner").addClass('animated fadeIn');
        $(".menu-dinner").removeClass('hidden')
        $(".menu-dinner").addClass('shown');
        $(".menu-lunch").css('display', 'none');
        $(".menu-lunch").addClass('animated fadeOut');
        $(".menu-lunch").removeClass('shown');
        $(".menu-lunch").addClass('hidden');
        $(".menu-wine").css('display', 'none');
        $(".menu-wine").addClass('animated fadeOut');
        $(".menu-wine").removeClass('shown');
        $(".menu-wine").addClass('hidden');
        return false;
      } else {
        $(".menu-dinner").css('display', 'none');
        $(".menu-dinner").removeClass('animated fadeIn')
        $(".menu-dinner").addClass('animated fadeOut');
        $(".menu-dinner").removeClass('shown');
        $(".menu-dinner").addClass('hidden');
        return false;
      }
    });
    //
    $("#js--wine").click(function() {
      if($(".menu-wine").hasClass("hidden")) {
        $(".menu-wine").css('display', 'block');
        $(".menu-wine").removeClass('animated fadeOut');
        $(".menu-wine").addClass('animated fadeIn');
        $(".menu-wine").removeClass('hidden')
        $(".menu-wine").addClass('shown');
        $(".menu-lunch").css('display', 'none');
        $(".menu-lunch").addClass('animated fadeOut');
        $(".menu-lunch").removeClass('shown');
        $(".menu-lunch").addClass('hidden');
        $(".menu-dinner").css('display', 'none');
        $(".menu-dinner").addClass('animated fadeOut');
        $(".menu-dinner").removeClass('shown');
        $(".menu-dinner").addClass('hidden');
        return false;
      } else {
        $(".menu-wine").css('display', 'none');
        $(".menu-wine").removeClass('animated fadeIn')
        $(".menu-wine").addClass('animated fadeOut');
        $(".menu-wine").removeClass('shown');
        $(".menu-wine").addClass('hidden');
        return false;
      }
    });
});
