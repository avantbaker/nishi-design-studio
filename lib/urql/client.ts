import {
	createClient,
	ssrExchange,
	dedupExchange,
	cacheExchange,
	fetchExchange,
} from 'urql';

const isServerSide = typeof window === undefined;
const ssrCache = ssrExchange({ isClient: !isServerSide });

const clientConfig = {
	url: 'https://dev-nishi-design-studio.pantheonsite.io/graphql',
	exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
	fetchOptions: () => {
		return {
			headers: {},
		};
	},
};

const client = createClient(clientConfig);

export { client, clientConfig, ssrCache };
