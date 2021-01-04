import styled from 'styled-components';

export const Button = styled.button`
  border : 1px solid palegoldenrod;
  border-radius : 4px;
  color : palegoldenrod;
  padding : 12px;

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
`;