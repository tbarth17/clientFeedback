Feedback.Router.map(function() {
  this.route('enterFeedback', {route: '/enterFeedback'});
  this.route('clientsView', {path: '/clientsView'});
});

Feedback.ClientsViewRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('report');
  }
});
