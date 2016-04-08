import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveHike() {
      var params = {
        name: this.get('name'),
        location: this.get('location'),
        distance: this.get('distance'),
        difficulty: this.get('difficulty'),
        dateAdded: this.get('dateAdded')
      };
      this.sendAction('saveHike', params);
      this.set('name', '');
      this.set('location', '');
      this.set('distance', '');
      this.set('difficulty', '');
    }
  }
});
