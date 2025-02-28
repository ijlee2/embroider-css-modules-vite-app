import { setApplication } from '@ember/test-helpers';
import { setupEmberOnerrorValidation, start as qunitStart } from 'ember-qunit';
import Application from 'embroider-css-modules-vite-app/app';
import config from 'embroider-css-modules-vite-app/config/environment';
import QUnit from 'qunit';
import { setup } from 'qunit-dom';

export function start() {
  setApplication(Application.create(config.APP));

  setup(QUnit.assert);
  setupEmberOnerrorValidation();
  qunitStart();
}
