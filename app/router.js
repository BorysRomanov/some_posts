import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('all-posts', function() {
    this.route('show', { path: '/:post_id' });
  });
});

export default Router;
