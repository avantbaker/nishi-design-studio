import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/globalStyles';
import theme from 'styles/theme';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Head from 'next/head';

function adjustViewportForHugeScreens() {
	var sw = screen.width;
	var sh = screen.height;
	if (window.matchMedia('(orientation: landscape)').matches) {
		var fw = sh;
	} else {
		var fw = sw;
	}
	if (fw < 1440) {
		var mvp = document.getElementById('nds-viewport');
		mvp.setAttribute('content', 'width=device-width,initial-scale=1');
	}
}
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
		adjustViewportForHugeScreens();
	}, []);
	return (
		<ThemeProvider theme={theme}>
			<Head>
				<meta
					id="nds-viewport"
					name="viewport"
					content="width=1600, viewport-fit=contain"
				/>
			</Head>
			<div id="circularcursor"></div>
			<GlobalStyles />
			<AnimatePresence exitBeforeEnter initial={false}>
				<Component {...pageProps} key={route} />
			</AnimatePresence>
		</ThemeProvider>
	);
}

export default App;
