import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.authenticatedRoute('new');
  this.route('hike', {path: 'hike/:hike_id'});
  this.route('admin');
  this.route('sign-up');
  this.route('sign-in');
});

export default Router;
