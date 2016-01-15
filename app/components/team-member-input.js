import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  classNames: 'flexi-row',

  didReceiveAttrs() {
    this._super(...arguments);

    this.getAttr('registerChild')(this.getInput.bind(this));
  },

  getInput() {
    return this.getProperties([
      'teamMember',
      'done',
      'work',
      'help',
    ]);
  },
});
