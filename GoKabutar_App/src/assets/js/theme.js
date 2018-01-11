/*------------------------------------------------------------------
[Table of contents]

--*/

(function() {

	"use strict";

	var Core = {

		initialized: false,

		initialize: function() {

			if (this.initialized) return;
			this.initialized = true;

			this.build();

		},

		build: function() {

			//Placeholder for IE
			$('input, textarea').placeholder();
			
			// Dropdown menu
			this.dropdownhover();
			
			// Page preloader
			this.initPagePreloader();
			
			// Equal Height
			this.setEqualHeight();
			
			// Slider
			this.initSlider();
			
			//Setup WOW.js
			this.initScrollAnimations();

			// Owl Carousel
			this.initOwlCarousel();
			
			// bxSlider
			this.initBxSlider();
			
			// Tabs
			this.initTabs();
			
			// Collapse Blocks
			this.initCollapsible();
			
			// Counter
			this.initNumberCounter();
			
			// Go to top
			this.initGoToTop();
			
			// Fancybox
			this.initFancybox();
			
			// Isotope
			this.initIsotope();
			
			//Product Counter
			this.productCounter();
			
			// Search
			this.initSearchModal();
			
		},

		dropdownhover: function(options) {
			/** Extra script for smoother navigation effect **/
			if ($(window).width() > 767) {
				$('.navbar-main-slide').on('mouseenter', '.navbar-nav-menu > .dropdown', function() {
					"use strict";
					$(this).addClass('open');
				}).on('mouseleave', '.navbar-nav-menu > .dropdown', function() {
					"use strict";
					$(this).removeClass('open');
				});
			}
		},

		initPagePreloader: function(options) {
			var $preloader = $('#page-preloader'),
			$spinner = $preloader.find('.spinner-loader');
			$( window ).on('load', function() {
				$spinner.fadeOut();
				$preloader.delay(500).fadeOut('slow');
				window.scrollTo( 0, 0 );
			});
		},

		setEqualHeight: function(){
			var equalHeight = $('.equal-height-item');
			if(equalHeight && equalHeight.length){
				var columns = $(equalHeight);
				var tallestcolumn = 0;
				columns.each(
					function(){
						var currentHeight = $(this).height();
						if(currentHeight > tallestcolumn){
							tallestcolumn = currentHeight;
						}
					}
				);
				columns.height(tallestcolumn);
			}
		},

		initSlider: function(options){
			var slider = $('.js-shop-slider').length;
			if(slider){
		        jQuery(".js-shop-slider").slider({
		            min: 100,
		            max: 1000,
		            values: [0,1000],
		            range: true,
		            slide: function(event, ui){
		                $(".js-min").text(ui.values[0]);
						$(".js-max").text(ui.values[1]);
		            },
		            stop:function(event, ui){
		                $(".js-min-input").val(ui.values[0]);
						$(".js-max-input").val(ui.values[1]);
		            }
		        });
			}
		
		},

		initScrollAnimations: function(options) {
			var scrollingAnimations = true; // Set true for turn on animation
			if(scrollingAnimations){
				new WOW().init();
			}
		},
		
		initOwlCarousel: function(options) {
			var owlCarouselBox = $('.enable-owl-carousel');
			if(owlCarouselBox && owlCarouselBox.length){
				owlCarouselBox.each(function(i) {
					var $owl = $(this);
					
					var itemsData = $owl.data('items');
					var autoPlayData = $owl.data('auto-play');
					var stopOnHoverData = $owl.data('stop-on-hover');
					var paginationData = $owl.data('pagination');
					var navigationData = $owl.data('navigation');
					var itemsDesktopData = $owl.data('items-desktop');
					var itemsDesktopSmallData = $owl.data('items-desktop-small');
					var itemsTabletData = $owl.data('items-tablet');
					var itemsTabletSmallData = $owl.data('items-tablet-small');
					
					$owl.owlCarousel({
						items: itemsData,
						pagination: paginationData,
						navigation: navigationData,
						autoPlay: autoPlayData,
						stopOnHover: stopOnHoverData,
						navigationText: ["<span class='fa fa-angle-left'></span>","<span class='fa fa-angle-right'></span>"],
						itemsCustom:[
							[0, 1],
							[599, itemsTabletSmallData],
							[767, itemsTabletData],
							[992, itemsDesktopSmallData],
							[1199, itemsDesktopData]
						],
					});
				});
			}
		},
		
		initBxSlider: function(options) {
			var bxSliderBox = $('.enable-bx-slider');
			if(bxSliderBox && bxSliderBox.length){
				bxSliderBox.each(function(i) {
					var $bx = $(this);
					var autoData = $bx.data('auto');
					var autoHoverData = $bx.data('auto-hover');
					var modeData = $bx.data('mode');
					var pagerData = $bx.data('pager');
					var pagerCustomData = $bx.data('pager-custom');
					var prevSelectorData = $bx.data('prev-selector');
					var nextSelectorData = $bx.data('next-selector');
				
					$bx.bxSlider({
						auto: autoData,
						autoHover: autoHoverData,
						mode: modeData,
						pager: pagerData,
						pagerCustom: pagerCustomData,
						prevSelector: prevSelectorData,
						nextSelector: nextSelectorData,
						prevText: (modeData == 'vertical' ? '<span class="fa fa-angle-up"></span>' : '<span class="fa fa-angle-left"></span>'),
						nextText: (modeData == 'vertical' ? '<span class="fa fa-angle-down"></span>' : '<span class="fa fa-angle-right"></span>'),
					});
				});
			}
		},
		
		initTabs: function(options) {
			$(document).on('click', '.js-tab-link', function(e){
				var tabId = $(this).data('for');
				var tabContainer = $(tabId);
				if(tabContainer.length > 0){
					$('.js-tab-link').removeClass('aside-tabs__active-link');
					$(this).addClass('aside-tabs__active-link');
					$('.js-tab-block').hide();
					tabContainer.show();
				}
				e.preventDefault();
			});
		},
		
		initCollapsible: function(options) {
			var collapse = $('.js-toggle').length;
			if(collapse){
				$(document).on('click', '.js-toggle', function(e){
					$(this).find('span').toggleClass('fa-plus fa-minus');
					$(this).parents('.services__info-block').toggleClass('services__info-block--active');
					e.preventDefault();
				});
			}
		},
		
		initNumberCounter: function(options) {
			if ($('body').length) {
				var waypointScroll = $('.percent-blocks').data('waypoint-scroll');
				if(waypointScroll){
					$(window).on('scroll', function() {
						var winH = $(window).scrollTop();
						$('.percent-blocks').waypoint(function() {
							$('.chart').each(function() {
								CharsStart();
							});
						}, {
							offset: '80%'
						});
					});
				}
			}
			function CharsStart() {
				$('.chart').easyPieChart({
					barColor: false,
					trackColor: false,
					scaleColor: false,
					scaleLength: false,
					lineCap: false,
					lineWidth: false,
					size: false,
					animate: 3000,
					onStep: function(from, to, percent){
						$(this.el).find('.percent').text(Math.round(percent));
					}
				});
			}
		},

		initGoToTop: function(options) {
			// Show/Hide Button on Window Scroll event.
			$(window).on('scroll', function(){
				var fromTop = $(this).scrollTop();
				var display = 'none';
				if(fromTop > 650){
					display = 'block';
				}
				$('#to-top').css({'display': display});
			});
			$("#to-top").smoothScroll();
		},
		
		initFancybox: function(options) {
			$(".fancyimage").fancybox();
		},

		initIsotope: function(options) {
			var $isotopeContainer = $('.isotope');
			if($isotopeContainer && $isotopeContainer.length){
				var $container = $('.isotope');
				$(document).on('click', '.js-isotope-btn', function(){
					$('.js-isotope-btn').removeClass('button--active');
					$(this).addClass('button--active');
					
					var sortName = $(this).data('sort-by');

					$container.isotope({ 
						sortBy : sortName,
					});
					return false;
				});

				$container.isotope({
					itemSelector : '.isotope-item',
					getSortData : {
						name: '.name',
					}
				});
			}
		},
		
		productCounter: function(options){
			$(".product-counter").on('click', '.productCounter', function(e){
				e.preventDefault();
				var counterStep = parseInt($(this).data("counter-step"), 10);
				var counterType = $(this).data("counter-type");
				var counterField = $(this).data("counter-field");
				var counterAmount = parseInt($(counterField).val(), 10);
				if(!isNaN(counterAmount)){
					if(counterType == 'add'){
						counterAmount = counterAmount + counterStep;
					}
					else if(counterType == 'minus'){
						counterAmount = counterAmount - counterStep;
					}
					if(counterAmount < 0){
						counterAmount = 0;
					}
					$(counterField).val(counterAmount);
				}
			});
		},
		
		initSearchModal: function(options) {
			$(document).on("click", ".btn_header_search", function (event) {
				event.preventDefault();
				$(".search-form-modal").addClass("open");
			});
			$(document).on("click", ".search-form_close", function (event) {
				event.preventDefault();
				$(".search-form-modal").removeClass("open");
			});
		},
		
	};

	Core.initialize();

})();
/*   */
	jQuery(document).ready(function(){
	  jQuery("body").on('click', 'a.signintop', (function(){
		jQuery("div.sign-in").addClass('visible-sign');
	  }));
	  jQuery("body").on('click', '.signin-form .form-close > span', (function(){
		jQuery("div.sign-in").removeClass('visible-sign');
	  }));
	  jQuery("body").on('click', '.signup-form div.already > a', (function(){
		jQuery("div.sign-in").addClass('visible-sign');
	  }));
	  /*jQuery("body").on('click', '.signup-form .form-close > span', (function(){
		jQuery("div.sign-up").removeClass('visible-sign');
	  }));*/
	  ////
	  /*jQuery("body").on('click', 'ul.sliders__main a.btn', (function(){
		jQuery("div.sign-up").addClass('visible-sign');
	  }));*/
	});
/**/
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 2000);
            return false;
        }
    });
});
/**/
jQuery(document).on("scroll", function() {
    jQuery("body > nav").toggleClass("shrink", $(this).scrollTop() > 100);
	jQuery("body > header").toggleClass("removetop", $(this).scrollTop() > 100);
});
