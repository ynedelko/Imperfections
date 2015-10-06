import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  category: DS.attr(),
  date: DS.attr(),
  image: DS.attr(),
  location: DS.attr(),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  title: DS.attr(),
  thoughts: DS.hasMany('thought', {async: true})
});
