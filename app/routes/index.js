import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('imperfection');
  },

  actions: {
    destroyImperfection(imperfection) {
      imperfection.destroyRecord();
      this.transitionTo('index');
    }
  }
});
