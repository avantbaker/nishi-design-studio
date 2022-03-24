import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/globalStyles';
import theme from 'styles/theme';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

function App({ Component, pageProps }) {
	const { route } = useRouter();
	function activateCursor() {
		const circle = document.getElementById('circularcursor');
		const circleStyle = circle.style;
		document.addEventListener('mouseenter', (e) => {
			window.requestAnimationFrame(() => {
				circleStyle.top = `${e.clientY - circle.offsetHeight / 2}px`;
				circleStyle.left = `${e.clientX - circle.offsetHeight / 2}px`;
			});
		});
	}
	useEffect(() => {
		activateCursor();
	}, []);
	return (
		<ThemeProvider theme={theme}>
			<div id="circularcursor"></div>
			<GlobalStyles />
			<AnimatePresence exitBeforeEnter initial={false}>
				<Component {...pageProps} key={route} />
			</AnimatePresence>
		</ThemeProvider>
	);
}

export default App;
