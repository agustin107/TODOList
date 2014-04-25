define(['backbone', 'handlebars', 'models/task/TaskModel'], function(Backbone, Handlebars, TaskModel) {
	var TaskCollection = Backbone.Collection.extend({
		model: TaskModel,
		initialize: function() {
			
		}
	});

	return TaskCollection;
});