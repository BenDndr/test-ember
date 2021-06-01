import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | instruments/saxophone', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:instruments/saxophone');
    assert.ok(route);
  });
});
