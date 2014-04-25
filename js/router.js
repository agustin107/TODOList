define(['backbone', 'handlebars', 'jquery', 'views/task/TaskView', 'views/task/TaskListView'], function(Backbone, Handlebars, $, TaskView, TaskListView) {
	var AppRouter = Backbone.Router.extend({
		routes: {
			'tasks': 'showTask',
			'*actions': 'defaultAction'
		}
	});

	var initialize = function() {
		var app_router = new AppRouter;
		app_router.on('route:showTasks', function() {
			var taskView = new TaskView();
			taskView.render();
		});
		app_router.on('route:defaultAction', function() {
			var taskListView = new TaskListView();
			taskListView.render();
		});

		Backbone.history.start();
	};

	return{
		initialize: initialize
	}
});