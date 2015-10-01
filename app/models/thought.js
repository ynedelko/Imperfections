import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  body: DS.attr(),
  imperfection: DS.belongsTo('imperfection', {async: true})
});
