import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  location: DS.attr(),
  distance: DS.attr(),
  difficulty: DS.attr(),
  dateAdded: DS.attr(),
  reviews: DS.hasMany('review', {async: true})
});
