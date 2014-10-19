Feedback.Router.map(function() {
  this.route('enterFeedback', {route: '/enterFeedback'});
  this.route('clientsView', {path: '/clientsView'});
  this.resource('mentors', function() {
    this.route('view', {path: ':report_id'});
  });
});

Feedback.ClientsViewRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('report');
  }
});

Feedback.ReportsViewRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('report', params.goal_id);
  }
});
