import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
	background-color: #121212;
	color: #DDDDDD;
	font-style : italic;
}

.App {
	font-family : sans-serif;
	text-align : center;
}

button {
	background : none;
}
`;

export default GlobalStyle;
