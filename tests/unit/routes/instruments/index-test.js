import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | instruments/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:instruments/index');
    assert.ok(route);
  });
});
