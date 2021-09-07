import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | contents/content', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:contents/content');
    assert.ok(route);
  });
});