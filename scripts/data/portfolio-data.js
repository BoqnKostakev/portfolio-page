var portfolioData = (function() {
	var items, thumbnails;

	items = [{
		'id': 1,
		'item-title': 'blue easy',
		'img-01-src': 'images/blue-easy/01.jpg',
		'img-02-src': 'images/blue-easy/02.jpg',
		'img-03-src': 'images/blue-easy/03.jpg',
		'technologies-used': [{
			title: 'HTML 5'
		}, {
			title: 'CSS 3'
		}],
		'description': 'One-page responsive PSD to HTML theme. It was my first time using media queries and fluid layout. The PSD was not-responsive so i decided where the breakpoints should be. At this time i was not very familiar with javascript so the code snippet for responsive drop-down navigation is copied from the net. The theme is tested on: Chrome, FF, Opera, IE(9, 8, 7)',
		'github': 'https://github.com/BoqnKostakev/blue-easy'
	}, {
		'id': 2,
		'item-title': 'PSD to HTML',
		'img-01-src': 'images/wheat-psd/01.jpg',
		'img-02-src': 'images/wheat-psd/02.jpg',
		'img-03-src': 'images/wheat-psd/03.jpg',
		'technologies-used': [{
			title: 'HTML 5'
		}, {
			title: 'CSS 3 / LESS'
		}],
		'description': 'Responsive PSD to HTML exercise this time using LESS. I\'m using node + sublime-text 2 - "Less2css" plugin to compile less files. Again the PSD was not-responsive so the breakpoints are my decision. The theme is tested on: Chrome, FF, Opera, IE(9, 8, 7)',
		'github': 'https://github.com/BoqnKostakev/wheat-psd'
	}, {
		'id': 3,
		'item-title': 'flat',
		'img-01-src': 'images/slice-flat-design/01.jpg',
		'img-02-src': 'images/slice-flat-design/02.jpg',
		'technologies-used': [{
			title: 'HTML 5'
		}, {
			title: 'CSS 3'
		}],
		'description': 'Just another slice practice nothing much to say. IE7 doesn\'t like it very much.',
		'github': 'https://github.com/BoqnKostakev/flat'
	}, {
		'id': 4,
		'item-title': 'corp-design',
		'img-01-src': 'images/corp-design/01.jpg',
		'img-02-src': 'images/corp-design/02.jpg',
		'img-03-src': 'images/corp-design/03.jpg',
		'technologies-used': [{
			title: 'HTML 5'
		}, {
			title: 'CSS 3'
		}],
		'description': 'Sliced PSD with implemented carousel and photo-view plugins',
		'github': 'https://github.com/BoqnKostakev/corp-design'
	}, {
		'id': 5,
		'item-title': 'flat green',
		'img-01-src': 'images/flat-green/01.jpg',
		'img-02-src': 'images/flat-green/02.jpg',
		'img-03-src': 'images/flat-green/03.jpg',
		'img-04-src': 'images/flat-green/04.jpg',
		'technologies-used': [{
			title: 'HTML'
		}, {
			title: 'CSS3'
		}, {
			title: 'Javascript'
		}],
		'description': 'My very first try for creating and styling web page. There is no PSD here, i just redrawn the visual design in CSS from the images of paid theme, just watch and code... There are some very unsemantic things going on in the markup so my advice is don\t watch it (i\'m sure that in the styling is the same). However it\'s my first "thing" and there is no room for words like - cross-browser(chrome only), responsive, semantic, DRY ect. but the page has sticky nav, the nav logo is "scroll-to-top" button and last but not, it looks great.',
		'github': 'https://github.com/BoqnKostakev/flat-green'
	}, {
		'id': 6,
		'item-title': 'sheeps vs rams',
		'img-01-src': 'images/sheeps-rams/01.jpg',
		'img-02-src': 'images/sheeps-rams/02.jpg',
		'img-03-src': 'images/sheeps-rams/03.jpg',
		'img-04-src': 'images/sheeps-rams/04.jpg',
		'technologies-used': [{
			title: 'HTML 5'
		}, {
			title: 'CSS 3'
		}, {
			title: 'Javascript / jQuery'
		}, {
			title: 'require-js'
		}, {
			title: 'underscore-js'
		}],
		'description': 'Sheeps vs Rams is simple number guessing game. Computer automatically generates number with four unique digits and user tries to guess it. The game has scoreboard wich stores user-scores in the browser local-sotrage after finding the "secret number". The code is organised in 5 different modules - ui, validation, score-storage, logic and main module. For loading modules i\'m using Require.js',
		'github': 'https://github.com/BoqnKostakev/sheeps-rams'
	}, {
		'id': 7,
		'item-title': 'quiz',
		'img-01-src': 'images/quiz/01.jpg',
		'img-02-src': 'images/quiz/02.jpg',
		'img-03-src': 'images/quiz/03.jpg',
		'img-04-src': 'images/quiz/04.jpg',
		'technologies-used': [{
			title: 'HTML'
		}, {
			title: 'CSS3'
		}, {
			title: 'Javascript / jQuery'
		}],
		'description': 'My first JS application. On purpose language is bulgarian because of the targeted audience. The code definitely needs refactoring and better structure. The UI here was not a key point, i was focused more on building the game logic. After all i am satisfied with the final result, quiz was tested with family and friends and they enjoyed it.',
		'github': 'https://github.com/BoqnKostakev/quiz'
	}, {
		'id': 8,
		'item-title': 'bits of code',
		'img-01-src': 'images/code-bits/code-thumb.jpg',
		'technologies-used': [{
			title: 'Javascript'
		}],
		'description': 'checkout "bits of code" section on my github. There you can find JS code-snippets, plugins, experiments and other code that i wrote.',
		'github': 'http://www.github.com'
	}, {
		'id': 9,
		'item-title': 'clear water',
		'img-01-src': 'images/clear-water/01.jpg',
		'img-02-src': 'images/clear-water/02.jpg',
		'technologies-used': [{
			title: 'HTML'
		}, {
			title: 'CSS3'
		}],
		'description': 'Sliced PSD',
		'github': 'https://github.com/BoqnKostakev/clear-water'
	}];

	thumbnails = [{
		'category': 'cat-slice',
		'id': '1',
		'img-source': 'blue-easy/01.jpg'
	}, {
		'category': 'cat-slice',
		'id': '2',
		'img-source': 'wheat-psd/01.jpg'
	}, {
		'category': 'cat-slice',
		'id': '3',
		'img-source': 'slice-flat-design/01.jpg'
	}, {
		'category': 'cat-slice',
		'id': '4',
		'img-source': 'corp-design/01.jpg'
	}, {
		'category': 'cat-slice',
		'id': '5',
		'img-source': 'flat-green/01.jpg'
	}, {
		'category': 'cat-apps',
		'id': '6',
		'img-source': 'sheeps-rams/02.jpg'
	}, {
		'category': 'cat-apps',
		'id': '7',
		'img-source': 'quiz/02.jpg'
	}, {
		'category': 'cat-code',
		'id': '8',
		'img-source': 'code-bits/code-thumb.jpg'
	}, {
		'category': 'cat-slice',
		'id': '9',
		'img-source': 'clear-water/01.jpg'
	}];

	return {
		items: items,
		thumbnails: thumbnails
	};
}());