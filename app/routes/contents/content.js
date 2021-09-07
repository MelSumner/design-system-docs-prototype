import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ContentsContentRoute extends Route {
  @service store;
  model(params) {
    let contentDocs = this.store.peekAll('content', params.id);
    if (!contentDocs) {
      console.log('sorry, no content for this one ' + params.id);
    }
    return this.store.findRecord('content', params.id);
  }

  // make sure that tags are loaded in ember-data before template is rendered
  // to ensure fastboot has all data on time
  async afterModel(model) {
    await model.get('tags');
    return model;
  }
}
