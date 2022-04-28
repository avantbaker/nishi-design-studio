import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/globalStyles';
import theme from 'styles/theme';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import SimpleReactLightbox from 'simple-react-lightbox';

function adjustViewportForHugeScreens() {
	let fw = 0;
	let sw = screen.width;
	let sh = screen.height;
	if (window.matchMedia('(orientation: landscape)').matches) {
		let fw = sh;
	} else {
		let fw = sw;
	}
	if (fw < 1440) {
		return {
			id: 'nds-viewport',
			name: 'viewport',
			content: 'width=device-width,initial-scale=1',
		};
	} else {
		return {
			id: 'nds-viewport',
			name: 'viewport',
			content: 'width=1600, viewport-fit=contain',
		};
	}
}
function App({ Component, pageProps }) {
	const { route } = useRouter();
	const [renderViewport, setRenderViewport]: [any, any] = useState(false);

	function activateCursor() {
		const circle = document.getElementById('circularcursor');
		const circleStyle = circle.style;
		document.addEventListener('mousemove', (e) => {
			window.requestAnimationFrame(() => {
				circleStyle.top = `${e.clientY - circle.offsetHeight / 2 + 22}px`;
				circleStyle.left = `${e.clientX - circle.offsetHeight / 2 + 22}px`;
			});
		});
	}
	useEffect(() => {
		activateCursor();
		const options = adjustViewportForHugeScreens();
		setRenderViewport(options as any);
	}, [setRenderViewport]);

	useEffect(() => {
		const htmlEl = document.documentElement.classList;
		htmlEl.remove('is-locked');
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<SimpleReactLightbox>
				<Head>
					{renderViewport && <meta {...renderViewport} />}
					<title>Nishi Design Studio</title>
				</Head>
				<div id="circularcursor"></div>
				<GlobalStyles />
				<AnimatePresence exitBeforeEnter initial={false}>
					<Component {...pageProps} key={route} />
				</AnimatePresence>
			</SimpleReactLightbox>
		</ThemeProvider>
	);
}

export default App;
