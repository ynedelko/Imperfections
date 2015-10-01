import Ember from 'ember';

export default Ember.Component.extend({
  addNewThought: false,
  actions: {
    showNewThoughtForm() {
      this.set('addNewThought', true);
    },

    saveThought() {
      var params = {
        name: this.get('name'),
        body: this.get('body'),
        imperfection: this.get('imperfection')
      };
      this.set('addNewThought', false),
      this.sendAction('saveThought', params);
    }
  }
});
