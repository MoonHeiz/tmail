import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { setModal } from '../../store/action';
import * as S from './StyledModal';

export const Modal = () => {
  const modal = useAppSelector(({ modal }) => modal);
  const dispatch = useAppDispatch();

  const outsideHandler = () => {
    dispatch(setModal(null));
  };

  const modalHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <>
      {modal && (
        <S.Outside onClick={outsideHandler}>
          <S.Modal onClick={modalHandler}>
            <S.Head>
              <S.Title>{modal.title}</S.Title>
              {modal.subtitle && <S.Subtitle>{modal.subtitle}</S.Subtitle>}
            </S.Head>
            <S.Content>{modal.content}</S.Content>
          </S.Modal>
        </S.Outside>
      )}
    </>
  );
};
