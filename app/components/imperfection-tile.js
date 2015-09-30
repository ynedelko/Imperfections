import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(imperfection) {
      if (confirm('Are you sure you want to delete?')) {
        this.sendAction("destroyImperfection", imperfection);
      }
    }
  }
});
