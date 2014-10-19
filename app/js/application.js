window.Feedback = Ember.Application.create();

Feedback.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: new Firebase("https://clientfeedback.firebaseio.com/")
});
