require.config({
	paths: {
		jquery: 'vendors/jquery/jquery-1.11.0.min',
		backbone: 'vendors/backbone/backbone-min',
		underscore: 'vendors/underscore/underscore-min',
		handlebars: 'vendors/handlebars/handlebars-v1.3.0'
	},
	shim: {
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		underscore: {
			exports: '_'
		},
		handlebars: {
			exports: 'Handlebars'
		}
	}
});

require(['app'], function(App){
	App.initialize();
});