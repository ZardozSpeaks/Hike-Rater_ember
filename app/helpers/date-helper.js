import Ember from 'ember';
import moment from 'moment';

export function dateHelper() {
  return moment().format('LL');
}

export default Ember.Helper.helper(dateHelper);
