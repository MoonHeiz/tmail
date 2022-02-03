import { useRef } from 'react';
import { useOutsideToggle } from '../../hooks/useOutsideToggle';
import { useAppSelector } from '../../hooks/useRedux';
import { AccessibleControl } from '../AccessibleControl/AccessibleControl';
import * as S from './StyledMiniAccount';

export const MiniAccount = () => {
  const controlRef = useRef<HTMLButtonElement>(null);
  const [isDropdownOpened, toggleDropdown] = useOutsideToggle(controlRef);
  const account = useAppSelector(({ account }) => account);

  const openDropdownHandler = () => {
    toggleDropdown();
  };

  return (
    <AccessibleControl forwardRef={controlRef} onClick={openDropdownHandler}>
      <S.AccountFakeImage src={`https://avatars.dicebear.com/api/initials/${account!.address}.svg`} alt="your avatar" />
      {isDropdownOpened && <h1>TODO</h1>}
    </AccessibleControl>
  );
};
