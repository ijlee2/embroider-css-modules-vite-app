import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import * as QUnit from 'qunit';
import { setup } from 'qunit-dom';
import Application from 'vite-app/app';
import config from 'vite-app/config/environment';

import { setupQunit } from './setup-harness';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

setupQunit();

start();
