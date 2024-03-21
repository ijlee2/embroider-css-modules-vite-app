import { pageTitle } from 'ember-page-title';
import Route from 'ember-route-template';

import Hello from '../components/hello';
import styles from './application.module.css';

export default Route(
  <template>
    {{pageTitle "ViteApp"}}

    <div class={{styles.container}}>
      <Hello />
    </div>
  </template>,
);
