;
$('document').ready(function() {

	// Load JSON data

	loadProduct();

	loadReviewsQuestions();

	loadArticles();

	// slinky content-menu

	var slinky = $('.min-main-top-menu').slinky({

		title: true,
		speed: 150
	});

	// Lightcase 

	$('document').ready(function() {

		$('a[data-rel^=lightcase]').lightcase({
			swipe : true
		});
	});

	// show and Hide catalog - top-menu

	if($(window).width() < 768) {

		$('#menu-catalog').bind ('click', menuShow);
		$('.content').bind ('click', menuHide);

	} else {

		$('#menu-catalog').bind ('mousemove', menuShow);
		$('#menu-catalog').bind ('mouseleave', menuHide);

	}

	// TABS

	if($(window).width() < 1303) {

		$('.reviews-block').css('grid-template-columns', 'minmax(auto, 1fr)');
		$('.reviews-block-text').css('width', 'auto').css('margin-right', '26px');
		$('.reviews-block-bottom').css('margin-right', '26px');
		$('.partition-reviews-block').css('margin', '0 30px 0 30px').css('height', '1px');
		$('.reviews-block-right').css('margin', '20px 0 20px 0').css('display', 'grid').css('grid-template-columns', 'minmax(auto, 110px) minmax(auto, 1fr)');
		$('.reviews-block-evaluation').css('margin', '0 0 0 5px');
		$('.reviews-block-stars').css('margin', '0').css('grid-template-columns', 'minmax(auto, 115px) minmax(auto, 50px)');
		$('.reviews-rating-star').css('padding', '2px 0 0 0');
		$('.quantity-star').css('padding-top', '1px');

	}
	
	// Show and Hide catalog - placeholder-min

	$('.button-placeholder-min-on').bind ('click', showPlaceholder);
	$('.button-placeholder-min-off').bind ('click', hidePlaceholder);

	// Show and Hide min-menu

	$('.min-main-menu').bind ('mousemove', minMenuShow);
	$('.min-main-menu').bind ('mouseleave', minMenuHide);

	// Add img to breadcrumbs

	var breadcrumbsImg = $('.rectangle-breadcrumbs').show();

	$('.breadcrumbs li').append(breadcrumbsImg);
	$('.breadcrumbs li:last .rectangle-breadcrumbs').css('display', 'none');

	// Show and Hide product preview block 

	$('.product-min-3d').bind('click', productTop3dShow);

	$('.product-min-img').bind('click', productTopImgShow);

	$('.product-min-video').bind('click', productTopVideoShow);

	// Tabs 

	Tabs();

	// Show All Characteristics (TABs)

	$('.show-all-characteristics').bind('click', showAllCharact);

	// Product fits your car Dropdown

	$('.button-on-nav-top-product').bind('click', fitsYCarTopProductShow);
	$('.button-off-nav-top-product').bind('click', fitsYCarTopProductHide);

	// Product fits your car Dropdown in Slider Buyers-choose-for

	$('.button-on-nav-buyers-choose-for').bind('click', fitsYCarBuyersChooseShow);
	$('.button-off-nav-buyers-choose-for').bind('click', fitsYCarBuyersChooseHide);

	// Sliders 

	allSlider();

});

	// Show and Hide catalog - top-menu 

	function menuShow() {
		$('#list-menu-catalog').show();
	};
	function menuHide() {
		$('#list-menu-catalog').hide();
	};

	// Show and Hide min-menu 

	function minMenuShow() {
		$('#list-menu-catalog').show();
	};

	function minMenuHide() {
		$('#list-menu-catalog').hide();
	};

	// Show and Hide placeholder-min

	function hidePlaceholder() {

		$('.full-placeholder-min').hide(90, function(){
			$('.button-placeholder-min-off').hide();
			$('.button-placeholder-min-on').show();
			$('.header-user-buttons, .top-phones').css('opacity','100');

			if ($(window).width() < 482) {

				$('.breadcrumbs').css('opacity','1');

			};

		});

	};

	function showPlaceholder() {

		$('.full-placeholder-min').show(90, function(){
			$('.button-placeholder-min-on').hide();
			$('.button-placeholder-min-off').show();
			$('.header-user-buttons, .top-phones').css('opacity','0.2');

			if ($(window).width() < 482) {

				$('.breadcrumbs').css('opacity','0.2');
				
			};

		});

	};

	// Show and Hide product preview block 

	function productTop3dShow() {

		$('.product-min-3d').css('border', '1px solid #ffdc2c');
		$('.product-min-img').css('border', '1px solid #e9eaeb');
		$('.product-min-video img').css('opacity', '.3');

		$('.product-top-3d').show();
		$('.product-top-img').hide();
		$('.product-top-video').hide();
	};

	function productTopImgShow() {

		$('.product-min-img').css('border', '1px solid #ffdc2c');
		$('.product-min-3d').css('border', '1px solid #e9eaeb');
		$('.product-min-video img').css('opacity', '.3');

		$('.product-top-img').show();
		$('.product-top-3d').hide();
		$('.product-top-video').hide()

	};

	// Product Top Video Show 

	function productTopVideoShow() {

		$('.product-min-img').css('border', '1px solid #e9eaeb');
		$('.product-min-3d').css('border', '1px solid #e9eaeb');
		$('.product-min-video img').css('opacity', '10');

		$('.product-top-video').show();
		$('.product-top-3d').hide();
		$('.product-top-img').hide();

		$(document).on('click', '.product-min-3d, .product-min-img', function() {
			$('.product-top-video iframe').each(function() {
				$(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
			});
		});

	};

	// Show All Charact

	function showAllCharact() {

		$('.wrapper-product-characteristics-text').css('height', 'auto').css('overflow', 'none');
		$('.show-all-characteristics').hide();

	};

	// Load JSON Product

	function loadProduct() {

		$.getJSON('json/product.json', function(data) {

			// Top Product

			var productTop = data[1];

			var outImg = '';

			outImg += '<img src="'+productTop.image+'">';

			var outVideo = '';

			var outVideo = '<iframe class="video-youtube-top" src="'+productTop.video[0]+'?enablejsapi=1" pallowfullscreen></iframe>';

			$('.product-title').append(productTop.name);
			$('.product-code .code-data').append(productTop.code);
			$('.product-price span.value').append(productTop.price);
			$('.product-description').append(productTop.description);
			$('.product-min-img').append(outImg);
			$('.product-top-img-link').append(outImg);
			$('.product-top-img-link').attr('data-lc-options', '{"maxWidth":600, "maxHeight":600}');
			$('.product-top-img-link').attr('data-rel', 'lightcase:сollection');
			$('.product-top-img-link').attr('data-lc-caption', productTop.name);
			$('.product-top-img-link').attr('href', productTop.image);
			$('.product-top-video').append(outVideo);
			$('.product-top-video-link').attr('href', productTop.video[0]);
			$('.product-description-tab-text').append(productTop.productDescriptionTab);

			// Similar product First-block!

			var similarProductFirst = data[2];

			var similarProductFirstText = '<span>'+similarProductFirst.name+'</span>'

			var similarProductFirstImg = '';

			similarProductFirstImg += '<img src="'+similarProductFirst.image+'">';

			$('.similar-product-content-img').append(similarProductFirstImg);
			$('.similar-product-content-text').append(similarProductFirstText);
			$('.similar-product-price').append(similarProductFirst.price);

			var simProdFirstTrue = '<span class="availability-true">В наличии</span>';

			var simProdFirstFalse = '<span class="availability-false">Нет в наличии</span>';

			if (similarProductFirst.availability == false) {

				$('.similar-product-first-availability').append(simProdFirstFalse);

				$('.similar-product-content-text').css('color', '#999999');

				$('.similar-product-price').css('color', '#999999');

				$('.similar-product-currency-price').css('color', '#999999');

			}

			else {

				$('.similar-product-first-availability').append(simProdFirstTrue);
				
			};

			// Stars Top Product

			ratingStars(productTop.stars, '.rating-product');

			// breadcrumbs

			$('.breadcrumbs-title-product').append(productTop.name);

			// Top Product Characteristics TAB

			var leftSide = data[1].characteristics.leftSide;

			var rightSide = data[1].characteristics.rightSide;

			var objSize = 0;

			for (key in leftSide) {

				objSize++;

			};

			for (i = 0; i < objSize; i++) {

				var itemCharacteristics = '';

				itemCharacteristics += '<div class="item-characteristics">' + '<span>' + leftSide[i] + '</span>' + '<span>'+ rightSide[i] + '</span>' + '</div>';

				$('.product-characteristics-text').append(itemCharacteristics);

			};

			if (objSize > 7) {

				$('.wrapper-product-characteristics-text').css('height', '325px').css('overflow', 'hidden');

			}
			else {
				$('.show-all-characteristics').hide(50).fadeOut();
			};

			// Product Description TAB

			if ( productTop.productDescriptionTab.length > 490 ) {

				$('.product-description-tab-text').css('max-height', '70px').css('overflow', 'hidden');

				var showMoreDescriptionTab = '';

				showMoreDescriptionTab += '<div class="show-all-description-tab"><span class="show-characteristics-icon"></span><div class="show-all-description-text"><span>Подробнее</span></div></div>';

				$('.product-description-tab').append(showMoreDescriptionTab);

				$('.show-all-description-tab').bind('click', showMoreDescription)

				function showMoreDescription() {

					$('.product-description-tab-text').css('max-height', 'none').css('overflow', 'none');

					$('.show-all-description-tab').hide(50).fadeOut();
				};

			};

			// Video quantity TAB

			var lengthVideo = 0;

			for (key in productTop.video) {

				lengthVideo++;

			};

			var videoSpan = '<span>(' + lengthVideo + ')</span>';

			$('.video-reviews h2').append(videoSpan);

			// Certificates of conformity TAB

			var lengthCertificates = 0;

			for (key in productTop.certificates) {

				lengthCertificates++;

			};

			for (i = 0; i < lengthCertificates; i++) {

				var certificates = '<a href="'+productTop.certificates[i]+'" data-rel="lightcase:certificatesCollection"" ><img src="'+productTop.certificates[i]+'" alt="" /></a>';

				$('.certificates-block').append(certificates);

			};

			// Right-bar TAB    Similar product Second-block!

			var similarProductSecond = data[3];

			$('.similar-product-second-img img').attr('src', similarProductSecond.image);

			var notAvailable = '<span class="availability-false">Нет в наличии</span>';

			var inAvailable = '<span class="availability-true">В наличии</span>';

			if (similarProductSecond.availability == false) {

				$('.similar-product-availability').append(notAvailable);
				$('.similar-product-second-price a').hide();

			}

			else {

				$('.similar-product-availability').append(inAvailable);
				$('.similar-product-second-name').css('color', '#333333');
				$('.similar-product-second-price').css('color', '#333333');
				$('.nav-similar-product-second').hide();
				$('.similar-product-second-price a').css('margin-left', '15px');
				
			};

			$('.similar-product-second-name').append(similarProductSecond.name);

			$('.similar-product-second-value').append(similarProductSecond.price);

			// Play Video Block Img	overlapping

			$('.img-overlapping-1').attr('src', 'https://img.youtube.com/vi/hpjV962DLWs/maxresdefault.jpg');
			$('.img-overlapping-2').attr('src', 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg');

		});

	};

	// Load JSON Tabs 

	function loadReviewsQuestions() {

		$.getJSON('json/reviews.json', function(data) {

			// Reviews

			var reviews = data[0];

			$('.reviews-user-name').append(reviews.user);
			$('.reviews-date').append(reviews.date);
			$('.wrapper-reviews-block-text').append(reviews.comment);
			$('.advantages-answer').append(reviews.advantages);
			$('.disadvantages-answer').append(reviews.disadvantages);

			if ( reviews.comment.length > 331 ) {

				$('.wrapper-reviews-block-text').css('max-height', '56px').css('overflow', 'hidden');

				var showMoreReviewsText = '';

				showMoreReviewsText += '<div class="show-more-reviews"><span class="show-more-reviews-text-icon"></span><span class="show-more-reviews-text"><span>Читать полностью</span></span></div>';

				$('.reviews-block-text').append(showMoreReviewsText);
				$('.reviews-block-advantages').css('margin-top', '11px');

				$('.show-more-reviews').bind('click', showMoreReviews)

				function showMoreReviews() {

					$('.wrapper-reviews-block-text').css('max-height', 'none').css('overflow', 'none');

					$('.show-more-reviews').hide(50).fadeOut();
				};

			};

			// Evaluation Comment Stars

			var evaluationComment = '';

			evaluationComment += '<div class="quantity-star"><span>'+ reviews.evaluation + ',0' +'</span></div>';

			$('.quantity-star').append(evaluationComment);

			// Reviews Rating Star

			ratingStars(reviews.evaluation, '.reviews-rating-star');

		});

	};

	// Tabs 

	function Tabs() {

		$('.tabs .tab').on('click', fTabs);

		function fTabs(event) {

			if (event.target.className == 'tab') {

				var dataTab = event.target.getAttribute('data-tab');

				var tabs = $('.tab');

				for (var i =0; i < tabs.length; i++) {

					$(tabs[i]).css('border-bottom', 'none');
					$(tabs[i]).css('color', '#777777');

				};

				$(event.target).css('border-bottom', '2px solid #fb2539').css('color', '#fb2539');

				var tabItem = $('.tab-item');

				for (var i = 0; i < tabItem.length; i++) {

					if (dataTab == i) {

						$(tabItem[i]).show(50).fadeIn();

					}
					else {

						$(tabItem[i]).hide(50).fadeOut();
					}

				};

			};

			// Slider articles

			if($(window).width() < 1000) {

				$('.articles-slider').bxSlider({

					infiniteLoop: false,
					speed : 250,
					pager : false,
					slideMargin : 31,
					maxSlides : 1,
					moveSlides : 1,
					nextSelector: $('.next-articles-slide'),
					prevSelector: $('.prev-articles-slide'),

				});

			}

			else {
				$('.articles-slider').bxSlider({

					infiniteLoop: false,
					speed : 250,
					pager : false,
					slideMargin : 31,
					maxSlides : 2,
					moveSlides : 1,
					nextSelector: $('.next-articles-slide'),
					prevSelector: $('.prev-articles-slide'),

				});
			};

		};

	};

	// Articles Block in tab

	function loadArticles() {

		$.getJSON('json/articles.json', function(data) {

			var lengthArticles = 0;

			var dataArticle = data;

			for (key in dataArticle) {

				lengthArticles++

			};

			var articlesSpan = '<span>(' + lengthArticles + ')</span>';

			$('.articles-top-block h2').append(articlesSpan);

			// Articles slider

			var articlesSlider = '<div class="articles-slider"></div>'

			$('.articles-top-block').append(articlesSlider)

			for (i = 1; i <= lengthArticles; i++) {

				var articlesSliderContent = '';

				articlesSliderContent += '<div class="articles-slider-content"><img src="'+dataArticle[i].image+'" alt="#" /><div class="description-articles-slider"><span class="date-articles-slider">'+dataArticle[i].date+'</span><h2 class="title-articles-slider">'+dataArticle[i].title+'</h2><span class="text-articles-slider">'+dataArticle[i].text+'</span><div></div></div></div>';

				$('.articles-slider').append(articlesSliderContent);

			};

		});

	};

	// Product fits your car Dropdown

	function fitsYCarTopProductShow() {

		$('.nav-trigger-product-fits-your-car ul').slideToggle(100);
		$('.button-on-nav-top-product').hide();
		$('.button-off-nav-top-product').show();
		$('.nav-trigger-product-fits-your-car span').css('color', '#fb2539');

	};

	function fitsYCarTopProductHide() {

		$('.nav-trigger-product-fits-your-car ul').slideToggle(70);
		$('.trigger-fits-your-car-off').hide();
		$('.trigger-fits-your-car-on').show();
		$('.nav-trigger-product-fits-your-car span').css('color', '#333333');
	
	};

	// Sliders

	// ------ Similar Slider ------- >

	function allSlider() {

		var sliderDiscount = '<div class="discount-slider"><span>Скидка -10%</span></div>';

		var sliderAvailabilityFalse = '<span class="slider-availability-false">Заканчивается</span>';

		var sliderAvailabilityTrue = '<span class="slider-availability-true">В наличии</span>';

		function similarSlider() {

			$.getJSON('json/product.json', function(data) {

				var lengthSimilarSlider = 0;

				for (key in data[4].similar_products) {

					lengthSimilarSlider++;

				};

				var similarSliderData = data[4].similar_products; 

				for (i = 0; i < lengthSimilarSlider; i++) {

					var similarSliderBlock = '';

					similarSliderBlock += '<div class="slider-block"><div class="slider-img similar-block-img"><img src="'+similarSliderData[i].image+'" alt="#" /></div><div class="description-slider-block"><div class="slider-code-availability similar-slider-availability"><span class="slider-code">Код товара : '+similarSliderData[i].code+'</span></div><span class="name-slider-block">'+similarSliderData[i].name+'</span><div class="price-slider-block similar-slider-price"><span class="now-price">'+similarSliderData[i].price+'<span>грн</span></span></div></div></div>';

					$('.wrapper-similar-products-slider').append(similarSliderBlock);


					if (similarSliderData[i].old_price) {

						var sliderOldPrice = '<span class="old-price">'+similarSliderData[i].old_price+'<span>грн</span></span>';

						$('.similar-slider-price').eq([i]).append(sliderOldPrice);

					};

					if (similarSliderData[i].discount == true) {
	
						$('.similar-block-img').eq([i]).append(sliderDiscount);
		
					};

					if (similarSliderData[i].availability == true) {

						$('.similar-slider-availability').eq([i]).append(sliderAvailabilityTrue);

					}
					else {

						$('.similar-slider-availability').eq([i]).append(sliderAvailabilityFalse);
						
					};

				};

				// Sliders - configuration

				$('.wrapper-similar-products-slider').bxSlider({

					infiniteLoop: true,
					speed : 350,
					pager : false,
					slideMargin : 30,
					maxSlides : 5,
					moveSlides : 1,
					nextSelector: $('.next-slider-button-similar-products'),
					prevSelector: $('.prev-slider-button-similar-products')


				});

			});

		};

		// ------ Product Also Bought Slider ------- >

		function productAlsoBought() {

			$.getJSON('json/product.json', function(data) {

				var sliderMoreBlock = '<div class="buy-slider-block"><button class="buy-button-slider">Купить</button><span class="libra-button-block"></span></div><div class="slider-stars-block"><div class="all-rating-star star-in-product-also-bought"></div><div class="reviews-in-slider"><a href="#">3 отзыва</a></div></div>';

				var lengthAlsoBought = 0;

				for (key in data[4].product_also_bought) {

					lengthAlsoBought++;

				};

				var alsoBoughtData = data[4].product_also_bought;

				for (i = 0; i < lengthAlsoBought; i++) {

					var alsoBoughtBlock = '';

					alsoBoughtBlock += '<div class="slider-block"><div class="slider-img also-bought-block-img"><img src="'+alsoBoughtData[i].image+'" alt="#" /></div><div class="description-slider-block"><div class="slider-code-availability also-bought-availability"><span class="slider-code">Код товара : '+alsoBoughtData[i].code+'</span></div><span class="name-slider-block">'+alsoBoughtData[i].name+'</span><div class="price-slider-block also-bought-price"><span class="now-price">'+alsoBoughtData[i].price+'<span>грн</span></span></div>'+sliderMoreBlock+'</div></div>';  

					$('.wrapper-product-also-bought').append(alsoBoughtBlock);

					if (alsoBoughtData[i].old_price) {

						var sliderOldPrice = '<span class="old-price">'+alsoBoughtData[i].old_price+'<span>грн</span></span>';

						$('.also-bought-price').eq([i]).append(sliderOldPrice);

					};
				
					if (alsoBoughtData[i].discount == true) {
						
						$('.also-bought-block-img').eq([i]).append(sliderDiscount);
		
					};

					if (alsoBoughtData[i].availability == true) {

						$('.also-bought-availability').eq([i]).append(sliderAvailabilityTrue);

					}
					else {

						$('.also-bought-availability').eq([i]).append(sliderAvailabilityFalse);
						
					};

					ratingStars(alsoBoughtData[i].stars, '.star-in-product-also-bought');

				};

				// Sliders - configuration

				$('.wrapper-product-also-bought').bxSlider({

					infiniteLoop: true,
					speed : 250,
					pager : false,
					slideMargin : 30,
					maxSlides : 5,
					moveSlides : 1,
					nextSelector: $('.next-slider-button-also-bought'),
					prevSelector: $('.prev-slider-button-also-bought'),

				});

			});

		};

		// ------ Buyers Choose For Slider ------- >

		function buyersChooseFor() {

			$.getJSON('json/product.json', function(data) {

				var lengthBuyersChooseFor = 0;

				for (key in data[4].buyers_choose_for) {

					lengthBuyersChooseFor++;

				};

				var buyersChooseForData = data[4].buyers_choose_for; 

				for (i = 0; i < lengthBuyersChooseFor; i++) {

					var buyersChooseForBlock = '';

					buyersChooseForBlock += '<div class="slider-block"><div class="slider-img buyers-choose-for-block-img"><img src="'+buyersChooseForData[i].image+'" alt="#" /></div><div class="description-slider-block"><div class="slider-code-availability buyers-choose-for-block-slider-availability"><span class="slider-code">Код товара : '+buyersChooseForData[i].code+'</span></div><span class="name-slider-block">'+buyersChooseForData[i].name+'</span><div class="price-slider-block buyers-choose-for-block-slider-price"><span class="now-price">'+buyersChooseForData[i].price+'<span>грн</span></span></div></div></div>';

					$('.wrapper-buyers-choose-for').append(buyersChooseForBlock);


					if (buyersChooseForData[i].old_price) {

						var sliderOldPrice = '<span class="old-price">'+buyersChooseForData[i].old_price+'<span>грн</span></span>';

						$('.buyers-choose-for-block-slider-price').eq([i]).append(sliderOldPrice);

					};


					if (buyersChooseForData[i].discount == true) {
	
						$('.buyers-choose-for-block-img').eq([i]).append(sliderDiscount);
		
					};

					if (buyersChooseForData[i].availability == true) {

						$('.buyers-choose-for-block-slider-availability').eq([i]).append(sliderAvailabilityTrue);

					}
					else {

						$('.buyers-choose-for-block-slider-availability').eq([i]).append(sliderAvailabilityFalse);
						
					};

				};

				// Sliders - configuration

				$('.wrapper-buyers-choose-for').bxSlider({

					infiniteLoop: true,
					speed : 250,
					pager : false,
					slideMargin : 30,
					maxSlides : 5,
					moveSlides : 1,
					nextSelector: $('.next-slider-button-buyers-choose-for'),
					prevSelector: $('.prev-slider-button-buyers-choose-for'),


				});

			});

		};

		// ------ You Looked Through Slider ------- >

		function youLookedThrough() {

			$.getJSON('json/product.json', function(data) {

				var sliderMoreBlock = '<div class="buy-slider-block"><button class="buy-button-slider">Купить</button><span class="libra-button-block"></span></div><div class="slider-stars-block"><div class="all-rating-star star-in-you-looked-th"></div><div class="reviews-in-slider"><a href="#">32 отзыва</a></div></div>';

				var lengthYouLookedThrough = 0;

				for (key in data[4].you_looked_through) {

					lengthYouLookedThrough++;

				};

				var youLookedThroughData = data[4].you_looked_through;

				for (i = 0; i < lengthYouLookedThrough; i++) {

					var youLookedThroughBlock = '';

					youLookedThroughBlock += '<div class="slider-block"><div class="slider-img you-looked-through-block-img"><img src="'+youLookedThroughData[i].image+'" alt="#" /></div><div class="description-slider-block"><span class="name-slider-block">'+youLookedThroughData[i].name+'</span><div class="slider-code-availability you-looked-through-availability"></div><div class="price-slider-block you-looked-through-price"><span class="now-price">'+youLookedThroughData[i].price+'<span>грн</span></span></div>'+sliderMoreBlock+'</div></div>';  

					$('.wrapper-you-looked-through').append(youLookedThroughBlock);

					if (youLookedThroughData[i].old_price) {

						var sliderOldPrice = '<span class="old-price">'+youLookedThroughData[i].old_price+'<span>грн</span></span>';

						$('.you-looked-through-price').eq([i]).append(sliderOldPrice);

					};
				
					if (youLookedThroughData[i].discount == true) {
						
						$('.you-looked-through-block-img').eq([i]).append(sliderDiscount);
		
					};

					if (youLookedThroughData[i].availability == true) {

						$('.you-looked-through-availability').eq([i]).append(sliderAvailabilityTrue);

					}
					else {

						$('.you-looked-through-availability').eq([i]).append(sliderAvailabilityFalse);
						
					};

					ratingStars(youLookedThroughData[i].stars, '.star-in-you-looked-th');

				};

				// Sliders - configuration

				$('.wrapper-you-looked-through').bxSlider({

					infiniteLoop: true,
					speed : 250,
					pager : false,
					slideMargin : 0,
					maxSlides : 6,
					moveSlides : 1,
					nextSelector: $('.next-slider-button-you-looked-through'),
					prevSelector: $('.prev-slider-button-you-looked-through'),

				});

			});

		};

		return similarSlider(), productAlsoBought(), buyersChooseFor(), youLookedThrough();

	};

	// Product fits your car Dropdown in Slider Buyers-Choose-For

	function fitsYCarBuyersChooseShow() {

		$('.nav-trigger-buyers-choose-for ul').slideToggle(100);
		$('.button-on-nav-buyers-choose-for').hide();
		$('.button-off-nav-buyers-choose-for').show();
		$('.nav-trigger-buyers-choose-for span').css('color', '#fb2539');
	};

	function fitsYCarBuyersChooseHide() {

		$('.nav-trigger-buyers-choose-for ul').slideToggle(70);
		$('.button-off-nav-buyers-choose-for').hide();
		$('.button-on-nav-buyers-choose-for').show();
		$('.nav-trigger-buyers-choose-for span').css('color', '#333333');

	};

	// Rating Star Function

	function ratingStars(event, div) {

		var starGoldDiv = '<div class="gold-star-in-rating"></div>';
					
		var starQuantity = event;

		for (var starGold = 0; starGold < starQuantity; starGold++) {

			(div == '.reviews-rating-star' || div == '.rating-product') ? $(div).append(starGoldDiv) : $(div).eq([i]).append(starGoldDiv);
		};

		var starGrayDiv = '<div class="gray-star-in-rating"></div>';

		for (var starGray = 5; starGray > starGold; starGray--) {

			(div == '.reviews-rating-star' || div == '.rating-product') ? $(div).append(starGrayDiv) : $(div).eq([i]).append(starGrayDiv);

		};

	};






