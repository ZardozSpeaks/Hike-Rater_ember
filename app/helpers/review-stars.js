import Ember from 'ember';

export function reviewStars(params) {
  console.log(params[0]);
  let review = parseInt(params[0]),
      stars="",
      i = 0;
  for (i=0; i<review; i++) {
    stars.concat("{{fa-icon fa-star}}");
  }
  console.log(stars);
  return Ember.String.htmlSafe(stars);
}

export default Ember.Helper.helper(reviewStars);
