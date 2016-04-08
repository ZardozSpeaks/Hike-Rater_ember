import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveHike(params) {
      this.store.createRecord('hike', params).save();
      this.transitionTo('index');
    }
  }
});
