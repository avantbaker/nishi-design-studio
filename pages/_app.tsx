import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

const GlobalStyles = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html,
	body,
	#__next {
		margin: 0;
		padding: 0;
	}

	html {
		background: ${theme.colors.lightTan};
	}

	body {
		font-family: ${theme.typography.fonts.primary};
		background: ${theme.colors.lightTan};
		color: ${theme.colors.black};
		font-weight: 400;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-rendering: optimizeLegibility;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	::selection {
		background: ${theme.colors.orange};
		color: ${theme.colors.lightTan};
	}
`;

function App({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>Nishi Design + Studio — A new chapter</title>
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<meta
					name="description"
					content="Nishi Design + Studio is rewriting its digital home. Get in touch to begin a project — Atlanta, Georgia."
				/>
				<meta property="og:title" content="Nishi Design + Studio" />
				<meta
					property="og:description"
					content="A new chapter is being written. Get in touch to begin a project."
				/>
				<meta name="theme-color" content="#FBF9F2" />
			</Head>
			<GlobalStyles />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default App;
