$(document).ready(function () {
    initHeaderSticky()
  });
  $(window).resize(function() {
    initHeaderSticky()
  });
  $(window).scroll(function() {
    initHeaderSticky()
  });
  function initHeaderSticky() {
    if (jQuery(document).height() > jQuery(window).height()) {
        if (jQuery('.site-header .top-header-wrapper').hasClass("sticky_header")) {
          if (jQuery(this).scrollTop() > 400) {
            jQuery('.site-header .top-header-wrapper').addClass("fixed");
          } else {
            jQuery('.site-header .top-header-wrapper').removeClass("fixed");
          }
        } else {
          jQuery('.site-header .top-header-wrapper').removeClass("fixed");
        }
    }
  }
$(document).ready(function () {
     /*********  desktop menu  ********/ 
  $(".menu-lnk.has-item").hover(function(){
     $(this).toggleClass("menu_active");
    $(this).find(".menu-dropdown").toggleClass("open_menu");
    $("body").toggleClass("no-scroll");
  });
    jQuery(".product-write-review").on('click',function(e) {
    $(".product-review").toggleClass("open-model");
    $('body').addClass('no-scroll open');
    $('.overlay').addClass('active');
  });
  jQuery(".overlay,.review-close-icon").on('click',function(e) {
    $(".product-review").removeClass("open-model");
    $('body').removeClass('no-scroll open');
    $('.overlay').removeClass('active');
  });
  jQuery('.cart__items-wrapper,.cart__footer-wrapper').wrapAll('<section class="cart-page-section padding-bottom"><div class="container"><div class="row"></div></div></section>');
  jQuery('.cart-page-section .section-title.main').prependTo('.cart-page-section > .container');
  var contentDiv = $('#WebPixelsManagerSandboxContainer');
  $('footer').after(contentDiv);
  countDownIni('.flip-countdown,.js-flip-countdown');
   /*********  size Popup  ********/ 
      $(".size-btn").click(function() { 
        $(".size-popup").toggleClass("active"); 
        $("body").toggleClass("no-scroll");
    });
    $(".close-search").click(function() { 
        $(".size-popup").removeClass("active"); 
        $("body").removeClass("no-scroll");
    });
    $(".close-btn").click(function() { 
        $(".size-popup").removeClass("active"); 
        $("body").removeClass("no-scroll");
    });
 /********* On scroll heder Sticky *********/
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("header-sticky").style.top = "0";
      } else {
        document.getElementById("header-sticky").style.top = "-200px";
      }
      prevScrollpos = currentScrollPos;
    }
       // Subscribe popup Js
  $('.close-sub-btn').click(function () {
    $('.subscribe-popup').slideUp(); 
    $(".subscribe-overlay").removeClass("open");
  }); 
    /********* Wrapper top space ********/
    var header_hright = $('header').outerHeight();
    $('header').next('.wrapper').css('margin-top', header_hright + 'px');
    /********* Announcebar hide ********/
    $('#announceclose').click(function () {
        $('.announcebar').slideUp();
    });
    /********* Mobile Menu ********/
    $(".mobile-menu-button").on("click", function () {
        $(".mobile-menu-wrapper, body").toggleClass("active-menu");
    });
    $(".menu-close-icon svg").on("click", function () {
        $(".mobile-menu-wrapper, body").toggleClass("active-menu");
    });
    /********* Cart Popup ********/
    $('.main-cart').on('click', function (e) {
      $('body').addClass('no-scroll cartOpen');
    });
    $('body').on('click', '.overlay.cart-overlay, .closecart', function (e) {
        $('body').removeClass('no-scroll cartOpen');
    });
    /********* Mobile Filter Popup ********/
    $('.mobile-facets__open').on('click', function (e) {
    $('body').addClass('mobile-open no-scroll');
    $('.overlay').addClass('active');
  });
  $('.overlay,.close-filter,.apply-btn').on('click', function (e) {
    $('body').removeClass('mobile-open no-scroll');
    $('.overlay').removeClass('active');
  });
    $('.filter-title').on('click', function (e) {
        e.preventDefault();
        setTimeout(function () {
            $('body').addClass('no-scroll filter-open');
            $('.overlay').addClass('active');
        }, 50);
    });
    $('body').on('click', '.overlay.active, .close-filter', function (e) {
        e.preventDefault();
        $('.overlay').removeClass('active');
        $('body').removeClass('no-scroll filter-open');
    });
    /*********  Header Search Popup  ********/
    $(".search-header a").click(function () {
        $(".search-popup").toggleClass("active");
        $("body").toggleClass("no-scroll");
        $("body").toggleClass("search-popup-open");
    });
    $(".close-search").click(function () {
        $(".search-popup").removeClass("active");
        $("body").removeClass("no-scroll");
        $("body").removeClass("search-popup-open");
    });
    /******* Cookie Js *******/
    $('.cookie-close').click(function () {
        $('.cookie').slideUp();
    });
    /******* Subscribe popup Js *******/
    $('.close-sub-btn').click(function () {
        $('.subscribe-popup').slideUp();
    });
    // /********* qty spinner ********/
    // var quantity = 0;
    // $('.quantity-increment').click(function () {
    //     ;
    //     var t = $(this).siblings('.quantity');
    //     var quantity = parseInt($(t).val());
    //     $(t).val(quantity + 1);
    // });
    // $('.quantity-decrement').click(function () {
    //     var t = $(this).siblings('.quantity');
    //     var quantity = parseInt($(t).val());
    //     if (quantity > 1) {
    //         $(t).val(quantity - 1);
    //     }
    // });
    /*********  Multi-level accordion nav  ********/
    $('.acnav-label').click(function () {
        var label = $(this);
        var parent = label.parent('.has-children');
        var list = label.siblings('.acnav-list');
        if (parent.hasClass('is-open')) {
            list.slideUp('fast');
            parent.removeClass('is-open');
        } else {
            list.slideDown('fast');
            parent.addClass('is-open');
        }
    });
    /****  TAB Js ****/
    $('ul.tabs li').click(function(){
        var $this = $(this);
        var $theTab = $(this).attr('data-tab');
        if($this.hasClass('active')){
          // do nothing
        } else{
          $this.closest('.tabs-wrapper').find('ul.tabs li, .tabs-container .tab-content').removeClass('active');
          $('.tabs-container .tab-content[id="'+$theTab+'"], ul.tabs li[data-tab="'+$theTab+']').addClass('active');
        } 
        $('ul.tabs li').removeClass('active');
        $(this).addClass('active');
        $('.shop-protab-slider').slick('refresh');
    });
    if ($('.banner-slider').length > 0) {
      $('.banner-slider').slick({
          autoplay: false,
          slidesToShow: 1,
          speed: 1000,
          rtl:true,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: '<button class="slide-arrow slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.65976 0.662719C0.446746 0.879677 0.446746 1.23143 0.65976 1.44839L2.18316 3L0.65976 4.55161C0.446747 4.76856 0.446747 5.12032 0.65976 5.33728C0.872773 5.55424 1.21814 5.55424 1.43115 5.33728L3.34024 3.39284C3.55325 3.17588 3.55325 2.82412 3.34024 2.60716L1.43115 0.662719C1.21814 0.445761 0.872773 0.445761 0.65976 0.662719Z" fill="white"></path></svg></button>',
          nextArrow: '<button class="slide-arrow slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.65976 0.662719C0.446746 0.879677 0.446746 1.23143 0.65976 1.44839L2.18316 3L0.65976 4.55161C0.446747 4.76856 0.446747 5.12032 0.65976 5.33728C0.872773 5.55424 1.21814 5.55424 1.43115 5.33728L3.34024 3.39284C3.55325 3.17588 3.55325 2.82412 3.34024 2.60716L1.43115 0.662719C1.21814 0.445761 0.872773 0.445761 0.65976 0.662719Z" fill="white"></path></svg></button>',
          dots: false,
          buttons: false,
          infinite: false,
          loop: false,
          appendArrows:'.home-banner-nav'
      });
    }
    if ($('.shop-protab-slider').length > 0) {
        $('.shop-protab-slider').slick({
            arrows: true,
            dots: false,
          rtl:true,
            infinite: true,
            speed: 800,
            slidesToShow:4,
            prevArrow: '<button class="slide-arrow slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.65976 0.662719C0.446746 0.879677 0.446746 1.23143 0.65976 1.44839L2.18316 3L0.65976 4.55161C0.446747 4.76856 0.446747 5.12032 0.65976 5.33728C0.872773 5.55424 1.21814 5.55424 1.43115 5.33728L3.34024 3.39284C3.55325 3.17588 3.55325 2.82412 3.34024 2.60716L1.43115 0.662719C1.21814 0.445761 0.872773 0.445761 0.65976 0.662719Z" fill="white"></path></svg></button>',
            nextArrow: '<button class="slide-arrow slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.65976 0.662719C0.446746 0.879677 0.446746 1.23143 0.65976 1.44839L2.18316 3L0.65976 4.55161C0.446747 4.76856 0.446747 5.12032 0.65976 5.33728C0.872773 5.55424 1.21814 5.55424 1.43115 5.33728L3.34024 3.39284C3.55325 3.17588 3.55325 2.82412 3.34024 2.60716L1.43115 0.662719C1.21814 0.445761 0.872773 0.445761 0.65976 0.662719Z" fill="white"></path></svg></button>',
            responsive: [
              {
                breakpoint: 1100,
                settings: {
                    slidesToShow:3,
                }
              }, 
              {
                breakpoint: 992,
                settings: {
                    slidesToShow:2,
                }
              },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow:2,
                  arrows: true,
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow:1,
                  arrows: true,
                }
              }
        ]
        });
    }
    if ($('.loved-category-slider').length > 0) {
        $('.loved-category-slider').slick({
            autoplay: false,
            slidesToShow: 2,
            speed: 1000,
          rtl:true,
            slidesToScroll: 1,
            arrows: true,
            infinite:true,
            loop:true,
            prevArrow: '<button class="slide-arrow slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.65976 0.662719C0.446746 0.879677 0.446746 1.23143 0.65976 1.44839L2.18316 3L0.65976 4.55161C0.446747 4.76856 0.446747 5.12032 0.65976 5.33728C0.872773 5.55424 1.21814 5.55424 1.43115 5.33728L3.34024 3.39284C3.55325 3.17588 3.55325 2.82412 3.34024 2.60716L1.43115 0.662719C1.21814 0.445761 0.872773 0.445761 0.65976 0.662719Z" fill="white"></path></svg></button>',
            nextArrow: '<button class="slide-arrow slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.65976 0.662719C0.446746 0.879677 0.446746 1.23143 0.65976 1.44839L2.18316 3L0.65976 4.55161C0.446747 4.76856 0.446747 5.12032 0.65976 5.33728C0.872773 5.55424 1.21814 5.55424 1.43115 5.33728L3.34024 3.39284C3.55325 3.17588 3.55325 2.82412 3.34024 2.60716L1.43115 0.662719C1.21814 0.445761 0.872773 0.445761 0.65976 0.662719Z" fill="white"></path></svg></button>',
            dots: false,
            buttons: false,
            responsive: [   
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    
    /** PDP slider **/
    if ($('.client-logo-slider').length > 0) {
        $('.client-logo-slider').slick({
            autoplay: true,
            slidesToShow: 6,
            speed: 1000,
          rtl:true,
            slidesToScroll: 1,
            arrows: false,
            prevArrow: '<button class="slide-arrow slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.65976 0.662719C0.446746 0.879677 0.446746 1.23143 0.65976 1.44839L2.18316 3L0.65976 4.55161C0.446747 4.76856 0.446747 5.12032 0.65976 5.33728C0.872773 5.55424 1.21814 5.55424 1.43115 5.33728L3.34024 3.39284C3.55325 3.17588 3.55325 2.82412 3.34024 2.60716L1.43115 0.662719C1.21814 0.445761 0.872773 0.445761 0.65976 0.662719Z" fill="white"></path></svg></button>',
            nextArrow: '<button class="slide-arrow slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.65976 0.662719C0.446746 0.879677 0.446746 1.23143 0.65976 1.44839L2.18316 3L0.65976 4.55161C0.446747 4.76856 0.446747 5.12032 0.65976 5.33728C0.872773 5.55424 1.21814 5.55424 1.43115 5.33728L3.34024 3.39284C3.55325 3.17588 3.55325 2.82412 3.34024 2.60716L1.43115 0.662719C1.21814 0.445761 0.872773 0.445761 0.65976 0.662719Z" fill="white"></path></svg></button>',
            dots: false,
            buttons: false,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    if ($('.review-slider').length > 0) {
        $('.review-slider').slick({
            autoplay: false,
            slidesToShow: 3,
            speed: 1000,
          rtl:true,
            slidesToScroll: 1,
            prevArrow: '<button class="slide-arrow slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.65976 0.662719C0.446746 0.879677 0.446746 1.23143 0.65976 1.44839L2.18316 3L0.65976 4.55161C0.446747 4.76856 0.446747 5.12032 0.65976 5.33728C0.872773 5.55424 1.21814 5.55424 1.43115 5.33728L3.34024 3.39284C3.55325 3.17588 3.55325 2.82412 3.34024 2.60716L1.43115 0.662719C1.21814 0.445761 0.872773 0.445761 0.65976 0.662719Z" fill="white"></path></svg></button>',
            nextArrow: '<button class="slide-arrow slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.65976 0.662719C0.446746 0.879677 0.446746 1.23143 0.65976 1.44839L2.18316 3L0.65976 4.55161C0.446747 4.76856 0.446747 5.12032 0.65976 5.33728C0.872773 5.55424 1.21814 5.55424 1.43115 5.33728L3.34024 3.39284C3.55325 3.17588 3.55325 2.82412 3.34024 2.60716L1.43115 0.662719C1.21814 0.445761 0.872773 0.445761 0.65976 0.662719Z" fill="white"></path></svg></button>',
            dots: false,
            arrows:true,
            buttons: false,
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });
    }
    if ($('.blog-slider-home').length > 0) {
        $('.blog-slider-home').slick({
            autoplay: false,
            slidesToShow: 4,
            speed: 1000,
          rtl:true,
            slidesToScroll: 1,
            prevArrow: '<button class="slide-arrow slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.65976 0.662719C0.446746 0.879677 0.446746 1.23143 0.65976 1.44839L2.18316 3L0.65976 4.55161C0.446747 4.76856 0.446747 5.12032 0.65976 5.33728C0.872773 5.55424 1.21814 5.55424 1.43115 5.33728L3.34024 3.39284C3.55325 3.17588 3.55325 2.82412 3.34024 2.60716L1.43115 0.662719C1.21814 0.445761 0.872773 0.445761 0.65976 0.662719Z" fill="white"></path></svg></button>',
            nextArrow: '<button class="slide-arrow slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.65976 0.662719C0.446746 0.879677 0.446746 1.23143 0.65976 1.44839L2.18316 3L0.65976 4.55161C0.446747 4.76856 0.446747 5.12032 0.65976 5.33728C0.872773 5.55424 1.21814 5.55424 1.43115 5.33728L3.34024 3.39284C3.55325 3.17588 3.55325 2.82412 3.34024 2.60716L1.43115 0.662719C1.21814 0.445761 0.872773 0.445761 0.65976 0.662719Z" fill="white"></path></svg></button>',
            dots: false,
            arrows:true,
            buttons: false,
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }
    if ($('.today-discounts-slider').length > 0) {
        $('.today-discounts-slider').slick({
            autoplay: false,
            slidesToShow: 4,
            speed: 1000,
          rtl:true,
            slidesToScroll: 1,
            prevArrow: '<button class="slide-arrow slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.65976 0.662719C0.446746 0.879677 0.446746 1.23143 0.65976 1.44839L2.18316 3L0.65976 4.55161C0.446747 4.76856 0.446747 5.12032 0.65976 5.33728C0.872773 5.55424 1.21814 5.55424 1.43115 5.33728L3.34024 3.39284C3.55325 3.17588 3.55325 2.82412 3.34024 2.60716L1.43115 0.662719C1.21814 0.445761 0.872773 0.445761 0.65976 0.662719Z" fill="white"></path></svg></button>',
            nextArrow: '<button class="slide-arrow slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.65976 0.662719C0.446746 0.879677 0.446746 1.23143 0.65976 1.44839L2.18316 3L0.65976 4.55161C0.446747 4.76856 0.446747 5.12032 0.65976 5.33728C0.872773 5.55424 1.21814 5.55424 1.43115 5.33728L3.34024 3.39284C3.55325 3.17588 3.55325 2.82412 3.34024 2.60716L1.43115 0.662719C1.21814 0.445761 0.872773 0.445761 0.65976 0.662719Z" fill="white"></path></svg></button>',
            dots: false,
            arrows:true,
            buttons: false,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                  
                        
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                  
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }
    /** PDP slider **/
    $('.pdp-main-slider').slick({
        dots: false,
        infinite: false,
        speed: 1000,
      rtl:true,
        loop: true,
        slidesToShow: 1,
        arrows: false,
        asNavFor: '.pdp-thumb-slider',
    });
    $('.pdp-thumb-slider').slick({
        prevArrow: '<button class="slide-arrow slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.65976 0.662719C0.446746 0.879677 0.446746 1.23143 0.65976 1.44839L2.18316 3L0.65976 4.55161C0.446747 4.76856 0.446747 5.12032 0.65976 5.33728C0.872773 5.55424 1.21814 5.55424 1.43115 5.33728L3.34024 3.39284C3.55325 3.17588 3.55325 2.82412 3.34024 2.60716L1.43115 0.662719C1.21814 0.445761 0.872773 0.445761 0.65976 0.662719Z" fill="white"></path></svg></button>',
        nextArrow: '<button class="slide-arrow slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.65976 0.662719C0.446746 0.879677 0.446746 1.23143 0.65976 1.44839L2.18316 3L0.65976 4.55161C0.446747 4.76856 0.446747 5.12032 0.65976 5.33728C0.872773 5.55424 1.21814 5.55424 1.43115 5.33728L3.34024 3.39284C3.55325 3.17588 3.55325 2.82412 3.34024 2.60716L1.43115 0.662719C1.21814 0.445761 0.872773 0.445761 0.65976 0.662719Z" fill="white"></path></svg></button>',
        dots: false,
        asNavFor: '.pdp-main-slider',
        speed: 1000,
      rtl:true,
        slidesToScroll: 1,
        touchMove: true,
        focusOnSelect: true,
        loop: true,
        infinite: false,
        focusOnSelect: true,
        slidesToShow: 3,
        appendArrows:'.pdp-thumb-nav',
        responsive: [{
            breakpoint: 1261,
            settings: {
                slidesToShow: 3
            }
        }]
    });
    // Slick lightbox 
    if ($('.lightbox').length > 0) {
        $('.lightbox').slickLightbox({
            itemSelector: 'a.open-lightbox',
            caption: 'caption',
            prevArrow: '<button class="slide-arrow slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.65976 0.662719C0.446746 0.879677 0.446746 1.23143 0.65976 1.44839L2.18316 3L0.65976 4.55161C0.446747 4.76856 0.446747 5.12032 0.65976 5.33728C0.872773 5.55424 1.21814 5.55424 1.43115 5.33728L3.34024 3.39284C3.55325 3.17588 3.55325 2.82412 3.34024 2.60716L1.43115 0.662719C1.21814 0.445761 0.872773 0.445761 0.65976 0.662719Z" fill="white"></path></svg></button>',
            nextArrow: '<button class="slide-arrow slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.65976 0.662719C0.446746 0.879677 0.446746 1.23143 0.65976 1.44839L2.18316 3L0.65976 4.55161C0.446747 4.76856 0.446747 5.12032 0.65976 5.33728C0.872773 5.55424 1.21814 5.55424 1.43115 5.33728L3.34024 3.39284C3.55325 3.17588 3.55325 2.82412 3.34024 2.60716L1.43115 0.662719C1.21814 0.445761 0.872773 0.445761 0.65976 0.662719Z" fill="white"></path></svg></button>',
            navigateByKeyboard: true,
            layouts: {
                closeButton: '<button class="close"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none"><path d="M27.7618 25.0008L49.4275 3.33503C50.1903 2.57224 50.1903 1.33552 49.4275 0.572826C48.6647 -0.189868 47.428 -0.189965 46.6653 0.572826L24.9995 22.2386L3.33381 0.572826C2.57102 -0.189965 1.3343 -0.189965 0.571605 0.572826C-0.191089 1.33562 -0.191186 2.57233 0.571605 3.33503L22.2373 25.0007L0.571605 46.6665C-0.191186 47.4293 -0.191186 48.666 0.571605 49.4287C0.952952 49.81 1.45285 50.0007 1.95275 50.0007C2.45266 50.0007 2.95246 49.81 3.3339 49.4287L24.9995 27.763L46.6652 49.4287C47.0465 49.81 47.5464 50.0007 48.0463 50.0007C48.5462 50.0007 49.046 49.81 49.4275 49.4287C50.1903 48.6659 50.1903 47.4292 49.4275 46.6665L27.7618 25.0008Z" fill="white"></path></svg></button>'
            }
        });
    }
    $('.testimonial-slider').slick({
        prevArrow: '<button class="slide-arrow slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.65976 0.662719C0.446746 0.879677 0.446746 1.23143 0.65976 1.44839L2.18316 3L0.65976 4.55161C0.446747 4.76856 0.446747 5.12032 0.65976 5.33728C0.872773 5.55424 1.21814 5.55424 1.43115 5.33728L3.34024 3.39284C3.55325 3.17588 3.55325 2.82412 3.34024 2.60716L1.43115 0.662719C1.21814 0.445761 0.872773 0.445761 0.65976 0.662719Z" fill="white"></path></svg></button>',
        nextArrow: '<button class="slide-arrow slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.65976 0.662719C0.446746 0.879677 0.446746 1.23143 0.65976 1.44839L2.18316 3L0.65976 4.55161C0.446747 4.76856 0.446747 5.12032 0.65976 5.33728C0.872773 5.55424 1.21814 5.55424 1.43115 5.33728L3.34024 3.39284C3.55325 3.17588 3.55325 2.82412 3.34024 2.60716L1.43115 0.662719C1.21814 0.445761 0.872773 0.445761 0.65976 0.662719Z" fill="white"></path></svg></button>',
        dots: false,
        infinite: true,
      rtl:true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    $('.latest-article-slider').slick({
        prevArrow: '<button class="slide-arrow slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.65976 0.662719C0.446746 0.879677 0.446746 1.23143 0.65976 1.44839L2.18316 3L0.65976 4.55161C0.446747 4.76856 0.446747 5.12032 0.65976 5.33728C0.872773 5.55424 1.21814 5.55424 1.43115 5.33728L3.34024 3.39284C3.55325 3.17588 3.55325 2.82412 3.34024 2.60716L1.43115 0.662719C1.21814 0.445761 0.872773 0.445761 0.65976 0.662719Z" fill="white"></path></svg></button>',
        nextArrow: '<button class="slide-arrow slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.65976 0.662719C0.446746 0.879677 0.446746 1.23143 0.65976 1.44839L2.18316 3L0.65976 4.55161C0.446747 4.76856 0.446747 5.12032 0.65976 5.33728C0.872773 5.55424 1.21814 5.55424 1.43115 5.33728L3.34024 3.39284C3.55325 3.17588 3.55325 2.82412 3.34024 2.60716L1.43115 0.662719C1.21814 0.445761 0.872773 0.445761 0.65976 0.662719Z" fill="white"></path></svg></button>',
        dots: false,
        infinite: true, 
      rtl:true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,  
        responsive: [ 
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
            breakpoint: 576,
                settings: {
                    arrows:false,
                    dots:true,
                    slidesToShow: 1,
                    slidesToScroll: 1 
                }
            }
        ]
    });
    $('.product-card-image-slider').slick({
        autoplay: false,
        autoplaySpeed: 300,
        arrows: false,
      rtl:true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        infinite: true,
        appendDots: '.image-inslide',
    });
    $('.product-card-image-slider').mouseover(function () {
        $(this).slick('play')
    });
    $('.product-card-image-slider').mouseout(function () {
        $(this).slick('pause')
    });

    // currency
  function currencyFormSubmit(event) {
    event.target.form.submit();
  }

  document.querySelectorAll('.shopify-currency-form select').forEach(function(element) {
    element.addEventListener('change', currencyFormSubmit);
  });

   // coupan code
  $('body').on('keyup','.discount_coupan', function() {
   var apply_href = $('.apply').attr("href").split('discount=')[0];
   var val = $(this).val();
    $('.apply').attr("href",apply_href+'discount='+val);
  });

  // notify me
  $('body').on('click','.notify-btn', function(e) {
      e.preventDefault();
      $('body').addClass('no-scroll notify-active');
      $('.out-of-stock-form,.overlay').addClass('active');
    });
   $('body').on('click','.overlay,.notify-popup-close', function(e) {
      e.preventDefault();
     $('body').removeClass('no-scroll notify-active');
      $('.out-of-stock-form,.overlay').removeClass('active');
    });
  
// quickview
  $('body').on('click', '.quickview-close', function(e) {
    e.preventDefault();
    $('.quickview-popup').hide();
    $('body').removeClass('no-scroll quick-active');
  });
  
  $('body').on('click', '.quickview-btn, .show-qv', function(e) {
    e.preventDefault();
    $('body').addClass('no-scroll quick-active');
    var href= '/products/'+$(this).find('a').data('handle')+'?view=qv';
    $.get(href, function(product) {
      $('.quickview_popup_data').html(product);
      $('.qv_slider').slick({
          autoplay: false,
          slidesToShow: 1,
          speed: 1000,
          slidesToScroll: 1,
          arrows: true,
          rtl: true,
          prevArrow: '<button class="slide-arrow slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.65976 0.662719C0.446746 0.879677 0.446746 1.23143 0.65976 1.44839L2.18316 3L0.65976 4.55161C0.446747 4.76856 0.446747 5.12032 0.65976 5.33728C0.872773 5.55424 1.21814 5.55424 1.43115 5.33728L3.34024 3.39284C3.55325 3.17588 3.55325 2.82412 3.34024 2.60716L1.43115 0.662719C1.21814 0.445761 0.872773 0.445761 0.65976 0.662719Z" fill="white"></path></svg></button>',
          nextArrow: '<button class="slide-arrow slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.65976 0.662719C0.446746 0.879677 0.446746 1.23143 0.65976 1.44839L2.18316 3L0.65976 4.55161C0.446747 4.76856 0.446747 5.12032 0.65976 5.33728C0.872773 5.55424 1.21814 5.55424 1.43115 5.33728L3.34024 3.39284C3.55325 3.17588 3.55325 2.82412 3.34024 2.60716L1.43115 0.662719C1.21814 0.445761 0.872773 0.445761 0.65976 0.662719Z" fill="white"></path></svg></button>',
          dots: false,
          buttons: false,
          infinite: false,
          loop: false
      });

    });
    $('.quickview-popup').show();
  });

 $('body').on('change', '.nice-select.qv_select__select', function() {
    var selectedValues = [];

    // Collect selected option values
    $('.nice-select.qv_select__select').each(function() {
      var selectedValue = $(this).val();
      if (selectedValue) {
        selectedValues.push(selectedValue);
      }
    });
    var joinedValues = selectedValues.join(' / ');


    $('.variant-qv').each(function() {
     var variant_title = $(this).data('title'); 
     var variant_img = $('.variant-qv[data-title="'+variant_title+'"]').data('img');
     var variant_price = $('.variant-qv[data-title="'+variant_title+'"]').data('price');
     var qv_btn =  $('.variant-qv[data-title="'+variant_title+'"]').data('avail');
     var variant_id = $('.variant-qv[data-title="'+variant_title+'"]').data('id');
      variant_title = String(variant_title);
      joinedValues = String(joinedValues);
      
      if(variant_title === joinedValues){
      var slideIndex = $('.qv_slider .qv-pro-slider-img img[data-img="'+variant_img+'"]').parent().index();
      $('.qv_slider').slick('slickGoTo', slideIndex)
        
        $('.qv-price').find('.price-item--regular').text(variant_price);

        if(qv_btn === true ){
          $('#quick-view-temp .product-form__submit').find('span').text('Add to Cart');
          $('#quick-view-temp .product-form__submit').removeAttr('disabled');
          $('#quick-view-temp .quantity-select').show();
        }else{
          $('#quick-view-temp .product-form__submit').find('span').text('Sold out');
          $('#quick-view-temp .product-form__submit').attr('disabled', 'disabled');
          $('#quick-view-temp .quantity-select').hide();
        }

        $('input[name="id"]').val(variant_id);
        
      }
  });
  
  });
// end quickview


    // custom reviews on product page
  $(window).on('load', function() {
    $(".pdp-right-column-inner").find(".jdgm-prev-badge").append("<a class='product-write-review d-flex align-items-center'><svg xmlns='http://www.w3.org/2000/svg' fill='#173334' id='Outline' viewBox='0 0 24 24' width='16' height='16'><path d='M22.853,1.148a3.626,3.626,0,0,0-5.124,0L1.465,17.412A4.968,4.968,0,0,0,0,20.947V23a1,1,0,0,0,1,1H3.053a4.966,4.966,0,0,0,3.535-1.464L22.853,6.271A3.626,3.626,0,0,0,22.853,1.148ZM5.174,21.122A3.022,3.022,0,0,1,3.053,22H2V20.947a2.98,2.98,0,0,1,.879-2.121L15.222,6.483l2.3,2.3ZM21.438,4.857,18.932,7.364l-2.3-2.295,2.507-2.507a1.623,1.623,0,1,1,2.295,2.3Z'></path></svg> Write a Review</a>");
  });

  
});
if ($(".my-acc-column").length > 0) {
    jQuery(function ($) {
        var topMenuHeight = $("#daccount-nav").outerHeight();
        $("#account-nav").menuScroll(topMenuHeight);
        $(".account-list li:first-child").addClass("active");
    });
    // COPY THE FOLLOWING FUNCTION INTO ANY SCRIPTS
    jQuery.fn.extend({
        menuScroll: function (offset) {
            // Declare all global variables
            var topMenu = this;
            var topOffset = offset ? offset : 0;
            var menuItems = $(topMenu).find("a");
            var lastId;
            // Save all menu items into scrollItems array
            var scrollItems = $(menuItems).map(function () {
                var item = $($(this).attr("href"));
                if (item.length) {
                    return item;
                }
            });
            // When the menu item is clicked, get the #id from the href value, then scroll to the #id element
            $(topMenu).on("click", "a", function (e) {
                var href = $(this).attr("href");
                var offsetTop = href === "#" ? 0 : $(href).offset().top - topOffset;
                function checkWidth() {
                    var windowSize = $(window).width();
                    if (windowSize <= 767) {
                        $('html, body').stop().animate({
                            scrollTop: offsetTop - 180
                        }, 300);
                    } else if(windowSize == 768){
                        $('html, body').stop().animate({
                            scrollTop: offsetTop - 100
                        }, 300);
                    }
                    else {
                        $('html, body').stop().animate({
                            scrollTop: offsetTop - 20
                        }, 300);
                    }
                }
                // Execute on load
                checkWidth();
                // Bind event listener
                $(window).resize(checkWidth);
                e.preventDefault();
            });
            // When page is scrolled
            $(window).scroll(function () {
                function checkWidth() {
                    var windowSize = $(window).width();
                    if (windowSize <= 767) {
                        var nm = $("html").scrollTop();
                        var nw = $("body").scrollTop();
                        var fromTop = (nm > nw ? nm : nw) + topOffset;
                        // When the page pass one #id section, return all passed sections to scrollItems and save them into new array current
                        var current = $(scrollItems).map(function () {
                            if ($(this).offset().top - 250 <= fromTop)
                                return this;
                        });
                        // Get the most recent passed section from current array
                        current = current[current.length - 1];
                        var id = current && current.length ? current[0].id : "";
                        if (lastId !== id) {
                            lastId = id;
                            // Set/remove active class
                            $(menuItems)
                                .parent().removeClass("active")
                                .end().filter("[href='#" + id + "']").parent().addClass("active");
                        }
                    }
                    else {
                        var nm = $("html").scrollTop();
                        var nw = $("body").scrollTop();
                        var fromTop = (nm > nw ? nm : nw) + topOffset;
                        // When the page pass one #id section, return all passed sections to scrollItems and save them into new array current
                        var current = $(scrollItems).map(function () {
                            if ($(this).offset().top <= fromTop)
                                return this;
                        });
                        // Get the most recent passed section from current array
                        current = current[current.length - 1];
                        var id = current && current.length ? current[0].id : "";
                        if (lastId !== id) {
                            lastId = id;
                            // Set/remove active class
                            $(menuItems)
                                .parent().removeClass("active")
                                .end().filter("[href='#" + id + "']").parent().addClass("active");
                        }
                    }
                }
                // Execute on load
                checkWidth();
                // Bind event listener
                $(window).resize(checkWidth);
            });
        }
    });
}
function responsiveMenu(){
  if(jQuery(window).width() < 768) {
    $('.product-filter-column').prependTo('.product-heading-row');
  }
  else { 
    $('.product-filter-column').prependTo('.product-list-row');
  }
}
jQuery(document).ready(function() {
  responsiveMenu();
});

jQuery(window).resize(function() {
  responsiveMenu();
});
function countDownIni(countdown) {
  $(countdown).each(function () {
    var countdown = $(this);
    var promoperiod;
    if (countdown.attr('data-promoperiod')) {
      promoperiod = new Date().getTime() + parseInt(countdown.attr('data-promoperiod'), 10);
    } else if (countdown.attr('data-countdown')) {
      promoperiod = countdown.attr('data-countdown');
    }
    if (Date.parse(promoperiod) - Date.parse(new Date()) > 0) {
      $(this).addClass('countdown-block');
      countdown.countdown(promoperiod, function (event) {
        // countdown.html(event.strftime('%-w weeks %-d days %Hh %Mm %Ss'));
        countdown.html(event.strftime('<span><span>%D</span><span class="dots"> : </span></span>' + '<span><span>%H</span><span class="dots"> : </span></span>' + '<span><span>%M</span><span class="dots"> : </span></span>' + '<span><span class="second">%S</span></span>'));
      });
    }

  });
}