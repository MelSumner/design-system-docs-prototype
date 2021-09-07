import EmberRouter from '@ember/routing/router';
import config from 'design-system-docs-prototype/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('docs', function () {
    this.route('docs/index', { path: '/docs' });
    this.route('doc', { path: '/:id' });
  });
});
