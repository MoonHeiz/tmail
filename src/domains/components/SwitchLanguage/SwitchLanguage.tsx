import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { supportedLanguages } from '../../constants';
import { useOutsideToggle } from '../../hooks/useOutsideToggle';
import { AccessibleControl } from '../AccessibleControl/AccessibleControl';
import * as S from './StyledSwitchLanguage';

export const SwitchLanguage = () => {
  const { i18n } = useTranslation();
  const switcherRef = useRef<HTMLButtonElement>(null);
  const [isDropdowOpen, toggleDropDownOpen] = useOutsideToggle(switcherRef);
  const currentLanguageShortName = i18n.resolvedLanguage;

  const toggleDropdownHandler = () => {
    toggleDropDownOpen();
  };

  const changeLanguageHandler = (langShortName: string) => {
    i18n.changeLanguage(langShortName);
  };

  return (
    <AccessibleControl forwardRef={switcherRef} onClick={toggleDropdownHandler}>
      <S.SwitchLanguage>
        {isDropdowOpen && (
          <S.Dropdown>
            {Object.entries(supportedLanguages).map(([shortName, lang], index) => (
              <S.FlagImage
                key={shortName}
                onClick={() => changeLanguageHandler(shortName)}
                src={lang.image}
                alt={lang.nativeName}
                $current={currentLanguageShortName === shortName}
              />
            ))}
          </S.Dropdown>
        )}
      </S.SwitchLanguage>
    </AccessibleControl>
  );
};
