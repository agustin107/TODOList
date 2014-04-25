define(['underscore', 'backbone'], function(_, Backbone) {
	var TaskModel = Backbone.Model.extend({
		defaults: {
			name: 'Task Name',
			description: 'Task Description',
			done: false
		}
	});

	return TaskModel;
});