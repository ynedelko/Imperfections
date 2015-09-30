import Ember from 'ember';

export default Ember.Route.extend({
  // model() {
  //   return this.store.findAll('imperfection');
  // }
  //
  actions: {
    saveImperfection(params) {
      var newImperfection = this.store.createRecord('imperfection', params);
      newImperfection.save();
      this.transitionTo('index');
    } 
  }
});
