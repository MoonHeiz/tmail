import { AccessibleControl } from '../AccessibleControl/AccessibleControl';
import * as S from './StyledSwitchLanguage';

export const SwitchLanguage = () => {
  const switchLanguageHandler = () => {
    console.log('TODO switch language');
  };

  return (
    <AccessibleControl onClick={switchLanguageHandler}>
      <S.SwitchLanguage></S.SwitchLanguage>
    </AccessibleControl>
  );
};
