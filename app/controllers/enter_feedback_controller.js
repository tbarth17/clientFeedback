Feedback.EnterFeedbackController = Ember.Controller.extend({
  needs: ['application'],

  rateScale: [
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '5', value: '5'}
  ],

  yesNo: [
    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'}
  ],

  actions: {
    addFeedback: function() {
      var report = this.store.createRecord('report', {
        clientName: this.get('clientName'),
        mentorName: this.get('mentorName'),
        serviceRating: this.get('serviceRating'),
        treatedFairly: this.get('treatedFairly'),
        bestInterest: this.get('bestInterest'),
        completeGoals: this.get('completeGoals'),
        completeDescription: this.get('completeDescription'),
        serviceComment: this.get('serviceComment')
      });
      report.save();
      this.set('clientName', '');
      this.set('mentorName', '');
      this.set('serviceRating', '');
      this.set('treatedFairly', '');
      this.set('bestInterest', '');
      this.set('completeGoals', '');
      this.set('completeDescription', '');
      this.set('serviceComment', '');
    }
  }
});
