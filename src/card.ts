import { TVCard } from './tv-card';
import { CARD_VERSION } from './const';

if (!customElements.get('tv-card-new')) {
  customElements.define('tv-card-new', TVCard);
  /* eslint no-console: 0 */
  console.info(
    `%c  TV-CARD-NEW   \n%c  Version ${CARD_VERSION} `,
    'color: orange; font-weight: bold; background: black',
    'color: white; font-weight: bold; background: dimgray',
  );
}

// customElements.define('tv-card-new-editor', TVCardEditor);
