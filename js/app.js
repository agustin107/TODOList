define(['jquery', 'backbone', 'underscore', 'handlebars', 'router'], function($, Backbone, _, Handlebars, Router) {
	var initialize = function() {
		Router.initialize();
	};

	return {
		initialize: initialize
	};
});