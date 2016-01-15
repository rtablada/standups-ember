import Ember from 'ember';

export default Ember.Route.extend({
  redux: Ember.inject.service('standups'),
  actionHandlers: Ember.inject.service('actions'),

  model() {
    this.get('actionHandlers.startStandup')();

    return this.get('redux');
  },

  actions: {
    registerInputGrabber() {
      return this.get('actionHandlers.standupRegisterInputGather')(...arguments);
    },

    submit(ev) {
      ev.preventDefault();

      this.get('actionHandlers.submitStandup')();
    },
  },
});
