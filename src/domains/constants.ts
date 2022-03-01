import { ISupportedLanguages } from './interfaces/ISupportedLanguages';
import usaFlagIcon from '../assets/usa-flag.svg';
import swedenFlagIcon from '../assets/sweden-flag.svg';
import russiaFlagIcon from '../assets/russia-flag.svg';

export const API = 'https://api.mail.tm';
export const AVATARS_API = 'https://avatars.dicebear.com/api';
export const LOCAL_STORAGE_ACCOUNT_KEY = 'account';
export const APP_NAME = 'Temp-mail';
export const MESSAGES_REFRESH_DELAY = 10000;
export const AUTH_ERROR_DELAY = 1500;
export const COPY_RETOGGLE_DELAY = 350;
export const TTF_MESSAGES_REFRESH_DELAY = 0;
export const MESSAGE_DOWNLOAD_EXT = '.eml';
export const DAYS_DECLENSIONS = ['day', 'days', 'days'];
export const DECLENSION_CASES = [2, 0, 1, 1, 1, 2];

export const supportedLanguages: ISupportedLanguages = {
  en: { nativeName: 'English', image: usaFlagIcon },
  sv: { nativeName: 'Swedish', image: swedenFlagIcon },
  ru: { nativeName: 'Russian', image: russiaFlagIcon },
};
