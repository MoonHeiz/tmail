import styled, { keyframes } from 'styled-components';

interface ISkeletonWrapperProps {
  h?: string;
  w?: string;
}

const shimmerAnimation = keyframes`
  0% {
    transform: translateX(-150%);
  }  
  50% {
    transform: translateX(-60%);
  }  
  100% {
    transform: translateX(150%);
  }
`;

export const SkeletonWrapper = styled.div<ISkeletonWrapperProps>`
  position: relative;
  width: ${({ w }) => w || '100%'};
  height: ${({ h }) => h || '100%'};
  overflow: hidden;
  border-radius: 5px;
`;

export const ShimmerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${shimmerAnimation} 2s infinite;
`;

export const Shimmer = styled.div`
  width: 65%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
  transform: skewX(-20deg);
`;

export const SkeletonRow = styled.div`
  width: 100%;
  height: 100%;
  background-color: #3b3b3b;
`;

export const SkeletonCircle = styled(SkeletonRow)`
  border-radius: 100%;
`;
