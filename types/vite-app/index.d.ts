import '@glint/environment-ember-loose';
import '@glint/environment-ember-template-imports';
import 'ember-source/types';
import 'ember-source/types/preview';

import type EmberPageTitleRegistry from 'ember-page-title/template-registry';
import type EmbroiderCssModulesRegistry from 'embroider-css-modules/template-registry';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry
    extends EmberPageTitleRegistry,
      EmbroiderCssModulesRegistry {
    /**
     * If any loose-mode templates need access to components,
     * helpers, etc, and those loose-mode templates are type-checked,
     * they'll need to be added here.
     */
  }
}
