import * as S from './StyledBack';

interface IBackProps {
  to: string;
}

export const Back: React.VFC<IBackProps> = ({ to }) => {
  return (
    <S.BackContainer>
      <S.LinkBack to={to}>
        <S.LeftArrow />
        Back
      </S.LinkBack>
    </S.BackContainer>
  );
};
