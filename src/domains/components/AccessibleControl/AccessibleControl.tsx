import * as S from './StyledAccessibleControl';

interface IAccessibleControlProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  w?: string;
  h?: string;
  forwardRef?: React.RefObject<HTMLButtonElement>;
}

export const AccessibleControl: React.FC<IAccessibleControlProps> = ({ children, onClick, forwardRef, w, h }) => {
  return (
    <S.AccessibleControl ref={forwardRef} onClick={onClick} role="button" $width={w} $height={h}>
      {children}
    </S.AccessibleControl>
  );
};
