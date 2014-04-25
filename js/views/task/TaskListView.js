define([
		'jquery',
		'underscore', 
		'backbone', 
		'handlebars', 
		'models/task/TaskModel', 
		'collections/tasks', 
		'views/task/TaskView', 
		'text!/TodoList/templates/task/taskListTemplate.html'
	], function($, _, Backbone, Handlebars, TaskModel, taskCollection, TaskView, taskListTemplate) {
	var TaskListView = Backbone.View.extend({
		model: TaskModel,
		template: Handlebars.compile($(taskListTemplate).html()),
		initialize : function() {
			this.collection = new taskCollection();
			this.collection.add({name: 'Lista n° 1', description: 'Descripción de tarea 1'});
			this.render();
		},
		render: function() {
			_.each(this.collection.models, this.showTasks, this);
			//var _html = this.template(this.collection.models.toJSON());
			/*this.$el.html(_html);*/
			return this;
		},
		showTasks: function(task) {
			var singularTask = new TaskView({model: task});
			singularTask.render();
			$('.tasks').append(singularTask.el);
		}
	});

	return TaskListView;
});