import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/globalStyles';
import theme from 'styles/theme';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';

function App({ Component, pageProps }) {
	const { route } = useRouter();
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<AnimatePresence exitBeforeEnter initial={false}>
				<Component {...pageProps} key={route} />
			</AnimatePresence>
		</ThemeProvider>
	);
}

export default App;
