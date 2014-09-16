var ui = (function() {

	function mainNavSelect(anchorId) {
		var $navigation = $('#header').find('#main-nav'),
			$navigationLinks = $navigation.find('a'),
			$body = $("html, body");

		$navigationLinks.removeClass('selected');

		if (!anchorId) return false;

		$(anchorId).addClass('selected');

		$body.animate({
			scrollTop: 0
		}, 120, 'swing');
	}


	function portfolioFilter() {
		$('#portfolio-filter').on('click', 'a', function() {
			var $this = $(this),
				$portfolioFilterAnchors = $('#portfolio-filter').find('a'),
				$category;

			$portfolioFilterAnchors.removeClass('selected');
			$this.addClass('selected');
			$category = $this.data('category');

			if ($category === 'cat-all') {
				$('.portfolio-entry').show(200);
			} else {
				$('.portfolio-entry').each(function() {
					var $this = $(this);

					if (!$this.hasClass($category)) {
						$this.hide(200);
					} else {
						$this.show(200);
					}
				});
			}

			return false;
		});
	}

	function skillsGraph () {
		$('#html').animate({'width': '90%'});
		$('#css').animate({'width': '80%'});
		$('#photoshop').animate({'width': '18%'});
		$('#javascript').animate({'width': '40%'});
		$('#php').animate({'width': '9%'});
	}

	return {
		mainNavSelect: mainNavSelect,
		portfolioFilter: portfolioFilter,
		skillsGraph: skillsGraph
	};

}());