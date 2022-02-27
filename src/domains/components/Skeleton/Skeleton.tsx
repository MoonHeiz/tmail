import * as S from './StyledSkeleton';

interface ISkeletonProps {
  type: skeletonTypes;
  w?: string;
  h?: string;
}

export type skeletonTypes = 'row' | 'circle';

export const Skeleton: React.VFC<ISkeletonProps> = ({ type, w = '100%', h = '100%' }) => {
  return (
    <S.SkeletonWrapper w={w} h={h}>
      {type === 'row' && <S.SkeletonRow />}
      {type === 'circle' && <S.SkeletonCircle />}
      <S.ShimmerWrapper>
        <S.Shimmer />
      </S.ShimmerWrapper>
    </S.SkeletonWrapper>
  );
};
