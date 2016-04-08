import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  location: DS.attr(),
  distance: DS.attr(),
  difficulty: DS.attr(),
  reviews: DS.hasMany('review')
});
