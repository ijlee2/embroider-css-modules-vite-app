import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import Hello from 'vite-app/components/hello';
import styles from 'vite-app/components/hello.module.css';
import { setupRenderingTest } from 'vite-app/tests/helpers';

module('Integration | Component | hello', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><Hello /></template>);

    assert.dom('div').hasClass(styles.message).hasStyle({
      fontSize: '128px',
    });
  });
});
