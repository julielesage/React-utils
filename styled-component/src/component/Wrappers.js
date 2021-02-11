import styled from 'styled-components';
import { Button } from './Buttons';

export const Wrapper = styled.div`
	margin-top : 16px;
	${Button} {
		border-color : palevioletred;
		color: palevioletred;

		@media (max-width : 600px) {
			background-color : yellow;
		}
	}


`