import styled from 'styled-components';

export const H1 = styled.h1`
  color : palevioletred;
  font-size : 64px;

  span {
    color : paleturquoise;
  };

  &:hover {
    opacity : 0.5;
  }
`;

export const H2 = styled.h2`
  color : ${({ color }) => color ? color : "red"}
`;