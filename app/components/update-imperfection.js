import Ember from 'ember';

export default Ember.Component.extend({
  updateImperfection: false,
  actions: {
    updateImperfectionForm() {
      this.set('updateImperfectionForm', true);
    },

    updateImperfection(imperfection) {
      var params = {
        author: this.get('author'),
        category: this.get('category'),
        date: this.get('date'),
        image: this.get('image'),
        location: this.get('location'),
        title: this.get('title')
      };
      this.set('updateImperfectionForm', false),
      this.sendAction('updateImperfection', imperfection, params);
    }
  }
});
