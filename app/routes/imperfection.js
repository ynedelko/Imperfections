import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('imperfection', params.imperfection_id);
  },
  actions: {
    updateImperfection(imperfection, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          imperfection.set(key, params[key]);
        }
      });
      imperfection.save();
      this.transitionTo('imperfection');
    },

    destroyImperfection(imperfection) {
      imperfection.destroyRecord();
      this.transitionTo('imperfection');
    }
  }
});
