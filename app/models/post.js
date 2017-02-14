import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  type: DS.attr(),
  subject: DS.attr(),
  description: DS.attr()
});
