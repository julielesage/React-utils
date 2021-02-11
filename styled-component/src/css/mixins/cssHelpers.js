import { css } from 'styled-components';

export const absolute = css`
position : absolute;
top : ${({ top }) => `${top}px`};
left : ${({ left }) => `${left}px`};
`