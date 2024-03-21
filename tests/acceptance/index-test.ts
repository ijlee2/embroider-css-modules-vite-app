import { visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'vite-app/tests/helpers';

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);

  test('We can visit index', async function (assert) {
    await visit('/');

    assert.dom().hasText('Hello Vite!');
  });
});
