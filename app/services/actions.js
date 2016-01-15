import Ember from 'ember';
import Redux from 'npm:redux';
import ActionCreators from '../actions/index';

const {bindActionCreators} = Redux;

export default Ember.Service.extend({
  redux: Ember.inject.service('standups'),

  init() {
    this._super(...arguments);

    let actions = bindActionCreators(ActionCreators, this.get('redux.store').dispatch);
    this.set('actions', actions);
  },
});
