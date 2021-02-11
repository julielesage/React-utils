import styled from 'styled-components';
import { absolute } from '../css/mixins/cssHelpers';

export const Button = styled.button`
  border : 1px solid ${(p) => p.theme.colors.secondary};
  border-radius : 4px;
  color : palegoldenrod;
  padding : 12px;
  background-color : #2D2D2D;

  &:hover {
    opacity : 0.7;
    cursor : pointer;
  }

  &:active {
    opacity : 0.5;
  }
`;

// extension :
export const SecondaryButton = styled(Button)`
color : pink;
${absolute}
`;