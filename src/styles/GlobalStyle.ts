import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	:root {
		--background-modifier-border: grey;
	}

	html, body {
		height: 100%;
		margin: 0;
		padding: 0;
	}

	#root {
		height: 100%;
	}
`;

export default GlobalStyle;
