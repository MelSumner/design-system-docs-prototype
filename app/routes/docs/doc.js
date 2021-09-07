import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DocsDocRoute extends Route {
  @service store;
  model(params) {
    let doc = this.store.peekAll('doc', params.id);
    if (!doc) {
      console.log('sorry, no content for this one ' + params.id);
    }
    return this.store.findRecord('doc', params.id);
  }

  // make sure that tags are loaded in ember-data before template is rendered
  // to ensure fastboot has all data on time
  async afterModel(model) {
    await model.get('tags');
    return model;
  }
}
