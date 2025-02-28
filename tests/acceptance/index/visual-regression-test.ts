import { visit } from '@ember/test-helpers';
import styles from 'embroider-css-modules-vite-app/templates/application.module.css';
import { setupApplicationTest } from 'embroider-css-modules-vite-app/tests/helpers';
import { module, test } from 'qunit';

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);

  test('We can visit index', async function (assert) {
    await visit('/');

    assert
      .dom('[data-test-hello-container]')
      .hasClass(styles.container)
      .hasStyle({
        'background-image':
          'linear-gradient(300deg, rgb(189, 52, 254) 30%, rgb(65, 209, 255))',
      });
  });
});
