import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { setModal } from '../../store/action';
import * as S from './StyledModal';

export const Modal = () => {
  const modalContent = useAppSelector(({ modalContent }) => modalContent);
  const dispatch = useAppDispatch();

  const outsideHandler = () => {
    dispatch(setModal(null));
  };

  const modalHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <>
      {modalContent && (
        <S.Outside onClick={outsideHandler}>
          <S.ContentContainer onClick={modalHandler}>{modalContent}</S.ContentContainer>
        </S.Outside>
      )}
    </>
  );
};
