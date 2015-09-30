import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('imperfection');
  },

  actions: {
    updateImperfection(imperfection, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          imperfection.set(key, params[key]);
        }
      });
      imperfection.save();
      this.transitionTo('index');
    },

    destroyImperfection(imperfection) {
      imperfection.destroyRecord();
      this.transitionTo('index');
    }
  }
});
