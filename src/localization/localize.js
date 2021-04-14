import Localize from 'v-localize';
import az from './az'
import en from './en'
import ru from './ru'

let localize = Localize.config({
  default: 'az',
  available: ['en', 'az', 'ru'],
  fallback: '?',
  localizations: {
    "en": en,
    "az": az,
    "ru": ru,
  }
});

export default localize