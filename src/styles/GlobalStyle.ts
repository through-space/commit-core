import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	:root {
		--background-modifier-border: grey;
	}

	html, body {
		height: 100%;
		margin: 0;
		padding: 0;
		font-size: 62.5%;
	}

	#root {
		height: 100%;
		font-size: 1.6rem;
	}
`;

export default GlobalStyle;
