import Ember from 'ember';

export default Ember.Component.extend({
  updateImperfectionForm: false,
  actions: {
    updateImperfection(imperfection, params) {
      this.sendAction('updateImperfection', imperfection, params)
    },

    delete(imperfection) {
      if (confirm('Are you sure you want to delete?')) {
        this.sendAction("destroyImperfection", imperfection);
      }
    }
  }
});
