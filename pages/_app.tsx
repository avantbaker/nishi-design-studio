import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/globalStyles';
import theme from 'styles/theme';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import { withUrqlClient } from 'next-urql';
import { dedupExchange, cacheExchange, fetchExchange } from 'urql';

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

// export default withUrqlClient((ssrExchange, ctx) => ({
// 	url: 'https://dev-nishi-design-studio.pantheonsite.io/graphql',
// 	exchanges: [dedupExchange, cacheExchange, ssrExchange, fetchExchange],
// 	fetchOptions: () => {
// 		return {
// 			headers: {},
// 		};
// 	},
// }))(App);

export default App;
