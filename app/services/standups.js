import Ember from 'ember';
import Redux from 'npm:redux';
import thunk from 'npm:redux-thunk';
import appReducer from '../reducers/app';
import initialState from '../states/initial';

const {compose, applyMiddleware, createStore} = Redux;

export default Ember.Service.extend({
  store: null,

  init() {
    this._super(...arguments);

    this.createStore();
  },

  createStore() {
    const finalCreateStore = compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore);

    const store = finalCreateStore(appReducer, initialState);

    this.set('store', store);
  },
});
