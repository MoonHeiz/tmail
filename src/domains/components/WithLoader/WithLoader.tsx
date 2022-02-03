import { ComponentType } from 'react';
import { Skeleton, skeletonTypes } from '../Skeleton/Skeleton';

interface IWithLoaderProps {
  Component: ComponentType<unknown>;
  skeletonType: skeletonTypes;
  loading: boolean;
  w?: string;
  h?: string;
}

export const WithLoader: React.VFC<IWithLoaderProps> = ({ Component, skeletonType, loading, w, h }) => {
  if (loading) {
    return <Skeleton w={w} h={h} type={skeletonType} />;
  } else {
    return <Component />;
  }
};
