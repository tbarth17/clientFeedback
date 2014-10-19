Feedback.Report = DS.Model.extend({
  clientName: DS.attr('string'),
  mentorName: DS.attr('string'),
  serviceRating: DS.attr('string'),
  treatedFairly: DS.attr('string'),
  bestInterest: DS.attr('string'),
  completeGoals: DS.attr('string'),
  completeDescription: DS.attr('string'),
  serviceComment: DS.attr('string')
});
