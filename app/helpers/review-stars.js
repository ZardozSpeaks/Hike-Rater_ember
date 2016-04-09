import Ember from 'ember';

export function reviewStars(rating) {
  if(rating) {
    var parsed = parseInt(rating);
    var star = "{{fa-icon fa-star}}";
    for (i=0; i<parsed; i++) {
      star
    }
  }
}

export default Ember.Helper.helper(reviewStars);
