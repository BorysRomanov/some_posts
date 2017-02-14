import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterBySubject(param) {
      if (param !== '') {
        return this.get('store').query('post', { subject: param });
      } else {
        return this.get('store').findAll('post');
      }
    }
  }
});
