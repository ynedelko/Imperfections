import Ember from 'ember';

export default Ember.Component.extend({
  addNewImperfection: false,
  actions: {
    showNewImperfectionForm() {
      this.set('addNewImperfection', true);
    },

    saveImperfection() {
      var params = {
        author: this.get('author'),
        category: this.get('category'),
        date: this.get('date'),
        image: this.get('image'),
        location: this.get('location'),
        title: this.get('title')
      };
      this.set('addNewImperfection', false),
      this.sendAction('saveImperfection', params);
    }
  }
});
