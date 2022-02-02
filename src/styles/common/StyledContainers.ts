import styled from 'styled-components';

interface IFlexContainerProps {
  $alignItems?: string;
  $gap?: string;
  $flexDirection?: string;
  $justifyContent?: string;
}

export const AppContainer = styled.div`
  padding: 0 100px;

  @media (max-width: 700px) {
    padding: 0 25px;
  }
`;

export const FlexContainer = styled.div<IFlexContainerProps>`
  display: flex;
  align-items: center;
  align-items: ${({ $alignItems }) => $alignItems || 'center'};
  gap: ${({ $gap }) => $gap || ''};
  flex-direction: ${({ $flexDirection }) => $flexDirection || ''};
  justify-content: ${({ $justifyContent }) => $justifyContent || ''};
`;
