var portfolioController = (function() {

	function render (template, templateContainer, item, appendMethod) {
        var generateTemplate = Handlebars.compile(template.html());

        $('body').animate({
			scrollTop: 0
		}, 120, 'swing');

		if (appendMethod === 'prepend') {
			templateContainer.prepend(generateTemplate({item: item}));
			return true;
		}

		templateContainer.append(generateTemplate(item));
	}

	return {
		render: render
	};

}());