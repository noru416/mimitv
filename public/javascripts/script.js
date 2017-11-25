function renderSection() {
	var newSection = $('.navigation-link.is-active').text();
	
	if ($('section').attr('class')) {
		var oldSection = $('section');
		oldSection.animate({
			opacity: 0
		}, 500, function() {
			oldSection.remove();
			switchSection();
		});
	} else {
		switchSection();
	}
	
}
function switchSection() {
	var newSection = $('.navigation-link.is-active').text();
	switch(newSection) {
		case 'gallery': 
			$('.app').append(`
				<section class="gallery">
					<ul class="gallery-list">
					  <li class="gallery-item is-active">
					    <div class="gallery-image" style="background-image: url(images/naturally-bizarre.jpg)"></div>
					    <div class="gallery-title">
					      <div class="gallery-text">
					        <span>Naturally</span>
					        <span>Bizarre</span>
					      </div>
					    </div>
					  </li>
					  <li class="gallery-item">
					    <div class="gallery-image" style="background-image: url(images/richard-rodrigues.jpg)"></div>
					    <div class="gallery-title">
					      <div class="gallery-text">
					      	<span>Richard</span>
					        <span>Rodrigues</span>
					      </div>
					    </div>
					  </li>
					  <li class="gallery-item">
					    <div class="gallery-image" style="background-image: url(images/triangles.jpg)"></div>
					    <div class="gallery-title">
					      <div class="gallery-text">
					        <span>Triangles</span>
					      </div>
					    </div>
					  </li>
					</ul>
					<div class="gallery-pagination">
					  <button class="gallery-pagination-button is-active"></button>
					  <button class="gallery-pagination-button"></button>
					  <button class="gallery-pagination-button"></button>
					</div>
					<div class="gallery-navigation">
					  <button class="gallery-navigation-button gallery-navigation-button-previous"></button>
					  <button class="gallery-navigation-button gallery-navigation-button-next"></button>
					</div>
				</section>
			`);
			$('.gallery-list').css({'width': 0});
			$('.gallery-list').animate({
				width: '100%'
			},1000,'easeInOutCubic');
			break;

		case 'timeline': 
			$('.app').append(`
				<section class="services">
					<div class="services-wrapper">
						<div class="services-column">
							<div class="services-columns">
								<div class="services-title"><span class="services-text">2016</span></div>
								<ul class="services-list">
									<div class="services-images vertical" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
									<div class="services-images" style="background-image: url(images/naturally-bizarre.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
									<div class="services-images" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
								</ul>
							</div>
							<div class="services-columns">
								<div class="services-title"><span class="services-text">2017</span></div>
								<ul class="services-list">
									<div class="services-images" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
									<div class="services-images" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
									<div class="services-images" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
								</ul>
							</div>
							<div class="services-columns">
								<div class="services-title"><span class="services-text">2018</span></div>
								<ul class="services-list">
									<div class="services-images" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
									<div class="services-images" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
									<div class="services-images" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
								</ul>
							</div>
						</div>
					</div>
				</section>
			`);
			$('.services-list').css({'opacity': 0});
			$('.services-text').css({'transform': 'translateY(100px)'})
			$('.services-text').animate({transform: 'translateY(0)'}, 1000);
			$('.services-list').animate({opacity: 1}, 500,'easeInOutCubic');
			break;
		
		case 'category':
			$('.app').append(`
				<section class="services">
					<div class="services-wrapper">
						<div class="services-column">
							<div class="services-columns">
								<div class="services-title"><span class="services-text">Painting</span></div>
								<ul class="services-list">
									<div class="services-images vertical" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
									<div class="services-images" style="background-image: url(images/naturally-bizarre.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
									<div class="services-images" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
								</ul>
							</div>
							<div class="services-columns">
								<div class="services-title"><span class="services-text">Web</span></div>
								<ul class="services-list">
									<div class="services-images" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
									<div class="services-images" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
									<div class="services-images" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
								</ul>
							</div>
							<div class="services-columns">
								<div class="services-title"><span class="services-text">Application</span></div>
								<ul class="services-list">
									<div class="services-images" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
									<div class="services-images" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
									<div class="services-images" style="background-image: url(images/zurich.jpg)"></div>
									<p class="services-images-caption">Zürich Metropolis<br>Oil on Canvas<br>1929 • 100×64cm</p>
								</ul>
							</div>
						</div>
					</div>
				</section>
			`);
			$('.services-list').css({'opacity': 0});
			$('.services-text').css({'transform': 'translateY(100px)'})
			$('.services-text').animate({transform: 'translateY(0)'}, 1000);
			$('.services-list').animate({opacity: 1}, 500,'easeInOutCubic');
			break;

		case 'contact':
			$('.app').append(`
				<section class="contact">
					<div class="contact-wrapper">
						<div class="contact-box">
							<div class="contact-section">
								<h1 class="contact-title">
									<span>Keep</span>
									<span>In</span>
									<span>Touch</span>
								</h1>
								<div class="contact-colums">
									<div class="contact-column">
										<p class="contact-description">
											<strong class="contact-description-highlight">Business Inquiries</strong>
											<strong class="contact-description-highlight">business@dotcore.com.br</strong>
										</p>
									</div>
									<div class="contact-column">
										<div class="contact-description">
											<strong>If you have interest in contracting any of our services,<br>please contact us! We love new challenges... ;)</strong>
									</div>
								</div>
							</div>
							<div class="contact-section">
								<span class="contact-section-line" style="transform: matrix(1, 0, 0, 1, 0, 0);"></span>
								<ul class="contact-list">
									<li class="contact-item" style="visibility: inherit; opacity: 1;">
										<a href="https://www.facebook.com/dotcorestudio/" class="contact-link">
											<img src="images/facebook.svg" class="contact-icon">
											<span class="contact-text">Facebook</span>
										</a>
									</li>
									<li class="contact-item" style="visibility: inherit; opacity: 1;">
										<a href="https://www.twitter.com/dotcorestudio/" class="contact-link">
											<img src="images/twitter.svg" class="contact-icon">
											<span class="contact-text">Twitter</span>
										</a>
									</li>
									<li class="contact-item" style="visibility: inherit; opacity: 1;">
										<a href="https://www.linkedin.com/company-beta/16248447" class="contact-link">
											<img src="images/linkedin.svg" class="contact-icon">
											<span class="contact-text">LinkedIn</span>
										</a>
									</li>
									<li class="contact-item" style="visibility: inherit; opacity: 1;">
										<a href="https://www.vimeo.com/dotcorestudio/" class="contact-link">
											<img src="images/vimeo.svg" class="contact-icon">
											<span class="contact-text">Vimeo</span>
										</a>
									</li>
									<li class="contact-item" style="visibility: inherit; opacity: 1;">
										<a href="https://www.instagram.com/dotcorestudio/" class="contact-link">
											<img src="images/instagram.svg" class="contact-icon">
											<span class="contact-text">Instagram</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			`)
			break;
	}
}
$(document).on('click', '.navigation-link',function() {
	if($(this).hasClass('is-active')){
      return false;
    }
	$('.navigation-link.is-active').removeClass('is-active');
	$(this).addClass('is-active');
	renderSection();
    
    if ($(window).width() < 1024) {
    	$('.navigation.is-active').removeClass('is-active');
    }
    $.cookie("section", $('.navigation-link.is-active').text());
});	

$('.languages-button').on('click', function() {
	$('.languages-button.is-active').removeClass('is-active');
	$(this).addClass('is-active');
});
$('.navigation-button').on('click', function() {
	$('.navigation').toggleClass('is-active');
});

var animating = false;
function animategalleryItem() {
	animating = true;
	var oldItem = $('.gallery-item.is-active');
	var oldPagination = $('.gallery-pagination-button.is-active');
	if (button.hasClass('gallery-navigation-button-next')) {
		if (oldItem.is($('.gallery-item:last'))) {
			newItem = $('.gallery-item:first');
			newPagination = $('.gallery-pagination-button:first');
		} else {
			var newItem = oldItem.next();
			var newPagination = oldPagination.next();
		} 
		
	} else {
		if (oldItem.is($('.gallery-item:first'))) {
			newItem = $('.gallery-item:last');
			newPagination = $('.gallery-pagination-button:last');
		} else {
			var newItem = oldItem.prev();
			var newPagination = oldPagination.prev();
		}
	}
	
	oldItem.removeClass('is-active');
	newItem.addClass('is-active');

	oldPagination.removeClass('is-active');
	newPagination.addClass('is-active');

	oldItem.css({
		'z-index': 1,
		'visibility': 'inherit',
		'opacity': 1
	});
	newItem.css({
		'z-index': 2,
		'visibility': 'inherit',
		'opacity': 1,
		'width': 0
	});
	newItem.animate({
		'width': '100%'
	},1000, 'easeInExpo', function() {
		oldItem.removeAttr('style');
		newItem.removeAttr('style');
		animating = false;
	});
}

$(document).on('click', '.gallery-navigation-button', function () {
	button = $(this);
	if (animating) {
		return false;
	} else {
		animategalleryItem();
	}
});

$(document).on('click', '.logout', function() {
	$.cookie('displayName', '');
});

function switchWithURL() {
	var gallery = $('.navigation-link:contains("gallery")');
	var timeline = $('.navigation-link:contains("timeline")');
	var category = $('.navigation-link:contains("category")');
	var contact = $('.navigation-link:contains("contact")');
	$('.navigation-link').removeClass('is-active');
	switch ($.cookie('hash')) {
		case '#/gallery':
			gallery.addClass('is-active');
			break;
		case '#/timeline':
			timeline.addClass('is-active');
			break;
		case '#/category':
			category.addClass('is-active');
			break;
		case '#/contact':
			contact.addClass('is-active');
			break;
		default :
			$(location).attr('hash', '#/gallery');
			gallery.addClass('is-active');
			break;
	}
}
$(window).on('hashchange', function(e){
	$.cookie('hash', $(location).attr('hash'));
	switchWithURL();
	renderSection();
});

$(document).ready(function() {
	switchWithURL();
	renderSection();
	authenticate();
});

function authenticate() {
	var displayName = $.cookie('displayName');
	if($.cookie('displayName')) {
		$('.login-button').remove();
		$('.navigation').after(`
			<div class="logout-button">
		        <div class="dropdown">
		          <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">
		            ${displayName}
		            <span class="caret"></span>
		          </button>
		          <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
		            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Action</a></li>
		            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li>
		            <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Something else here</a></li>
		            <li class="divider"></li>
		            <li role="presentation"><a role="menuitem" tabindex="-1" href="/" class='logout'>Sign out</a></li>
		          </ul>
		        </div>
		      </div>
		`);
	}
}
