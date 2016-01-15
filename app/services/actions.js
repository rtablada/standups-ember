import Ember from 'ember';
import Redux from 'npm:redux';
import ActionCreators from '../actions/index';

const {bindActionCreators} = Redux;
const {get} = Ember;

export default Ember.Service.extend({
  redux: Ember.inject.service('standups'),
  actions: {},

  init() {
    this._super(...arguments);
    this.set('actions', ActionCreators);
  },

  unknownProperty(name) {
    const store = this.get('redux.store');
    const action = get(this, `actions.${name}`);

    return (...rest) => {
      store.dispatch(action(...rest));
    };
  },
});
