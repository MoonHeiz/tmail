import styled from 'styled-components';

interface IAccessibleControlProps {
  $width?: string;
  $height?: string;
}

export const AccessibleControl = styled.button<IAccessibleControlProps>`
  background-color: transparent;
  padding: 0;
  margin: 0;
  width: ${({ $width }) => $width || ''};
  height: ${({ $height }) => $height || ''};
`;

AccessibleControl.defaultProps = { $width: '27px', $height: '27px' };
