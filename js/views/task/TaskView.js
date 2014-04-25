define(['underscore', 'backbone', 'handlebars', 'jquery', 'text!/TodoList/templates/task/taskTemplate.html'], function (_, Backbone, Handlebars, $, TaskTemplate) {
	var TaskView = Backbone.View.extend({
		el: $('.task'),
		type: 'TaskView',
		template: Handlebars.compile($(TaskTemplate).html()),
		editTemaplate: Handlebars.compile($(TaskTemplate).html()),
		initialize: function() {

		},
		render: function() {
			var _html = this.template(this.model.toJSON());
			this.$el.html(_html);
			return this;
		}
	});

	return TaskView;
});