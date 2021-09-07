import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DocsIndexRoute extends Route {
  @service store;
  async model() {
    await this.store.findAll('tag');
    return this.store.findAll('doc');
  }
}
