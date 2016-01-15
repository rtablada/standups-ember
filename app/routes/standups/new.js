import Ember from 'ember';

export default Ember.Route.extend({
  redux: Ember.inject.service('standups'),
  actions: Ember.inject.service('actions'),

  model() {
    this.get('actions.startStandup')();

    return this.get('redux');
  },
});
