(function() {

	$.ajaxSetup({ cache: false });

	var app = Sammy(function() {
		var $container = $('#partials-container');

		this.get('#/', function() {
			$container.load('partials/home.html');
			ui.mainNavSelect('#main-nav-home');
		});

		this.get('#/home', function() {
			$container.load('partials/home.html');
			ui.mainNavSelect('#main-nav-home');
		});

		this.get('#/portfolio', function() {
			$container.load('partials/portfolio.html', function() {
				var $template = $('#portfolio-thumbnails-template'),
					$templateContainer = $('#portfolio-thumbnails-container'),
					thumbnails = portfolioData.thumbnails;

				portfolioController.render($template, $templateContainer, thumbnails, 'prepend');
				ui.portfolioFilter();
			});
			ui.mainNavSelect('#main-nav-portfolio');
		});

		this.get('#/portfolio/:id', function(id) {
			var self = this;
			$container.load('partials/portfolio-single.html', function() {
				var $template = $('#portfolio-template'),
					$templateContainer = $('.portfolio-item'),
					items = portfolioData.items,
					selectedItemId = parseInt(self.params.id),
					currentItem,
					itemExists = false,
					item;

				for(item in items) {
					if(items[item].id === selectedItemId) {
						currentItem = items[item];
						itemExists = true;
					}
				}

				if (!itemExists) {
					window.location.replace('http://localhost/front-end/javascript/portfolio/');
				}

				ui.mainNavSelect('#main-nav-portfolio');
				portfolioController.render($template, $templateContainer, currentItem);
			});
		});

		this.get('#/about', function() {
			$container.load('partials/about.html', function() {
				ui.skillsGraph();
			});
			ui.mainNavSelect('#main-nav-about');
		});

		this.get('#/contact', function() {
			$container.load('partials/contact.html');
			ui.mainNavSelect('#main-nav-contact');
		});

		this.get(/.*/, function() { 
			$container.load('partials/home.html');
			ui.mainNavSelect('#main-nav-home');
		});

		// this.notFound = function() {
		// 	alert('not found');
		// };

	});	

	$(function() {
		app.run('#/');
	});

}());