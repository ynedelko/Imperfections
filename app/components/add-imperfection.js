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
        date: Date.now(),
        image: this.get('image'),
        location: this.get('location'),
        latitude: this.get('latitude'),
        longitude: this.get('longitude'),
        title: this.get('title')
      };
      this.set('addNewImperfection', false),
      this.sendAction('saveImperfection', params);
    }
  }
});
