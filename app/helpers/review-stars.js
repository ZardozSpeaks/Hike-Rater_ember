import Ember from 'ember';

export function reviewStars(rating) {
  var stars = "";
  var i = 0;
  if(rating) {
    var parsed = parseInt(rating);
    var star = "{{fa-icon fa-star}}";
    for (i=0; i<parsed; i++) {
      stars.concat(star);
    }
  }
  console.log(rating);
  return Ember.String.htmlSafe(stars);
}

export default Ember.Helper.helper(reviewStars);
