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
    },

    saveThought(params) {
      var newThought = this.store.createRecord('thought', params);
      var imperfection = params.imperfection;
      debugger;
      imperfection.get('thoughts').addObject(newThought);
      newThought.save().then(function() {
        return imperfection.save();
      });
      this.transitionTo('imperfection', params.impefection);
    }
  }
});
