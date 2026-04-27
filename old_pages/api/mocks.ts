export const mockBlogData = [
	{
		title: 'Pillows galore',
		date: '12/24/2021',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit…',
		tags: ['Decor', 'Process', 'NDS'],
		src: '/elements/blog/blog-1.png',
	},
	{
		title: 'Naming a theme',
		date: '12/24/2021',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit…',
		tags: ['Decor', 'Process', 'NDS'],
		src: '/elements/blog/blog-2.png',
	},
	{
		title: 'Location, location.',
		date: '12/24/2021',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit…',
		tags: ['Decor', 'Process', 'NDS'],
		src: '/elements/blog/blog-3.png',
	},
	{
		title: 'Picking greenry',
		date: '12/24/2021',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit…',
		tags: ['Decor', 'Process', 'NDS'],
		src: '/elements/blog/blog-4.png',
	},
];

export function normalizeBlogData(articles = []) {
	return (
		articles &&
		articles.length > 0 &&
		articles?.map(({ title, date, blog, slug, tags }) => {
			const currentDate = new Date(date);
			const formattedDate = `${currentDate.getMonth()}.${currentDate.getDate()}.${currentDate.getFullYear()}`;
			return {
				title: title,
				date: formattedDate || '',
				description: blog?.blogcontent,
				tags: tags?.nodes || [],
				src: blog?.blogimage?.sourceUrl || '/elements/blog/blog-1.png',
				slug,
			};
		})
	);
}

export const mockSpacesData = [
	{
		location: 'New York, NY',
		year: '2021',
		title: 'runaway getaway',
		href: '/',
		src: '/elements/residential/runaway.png',
	},
	{
		location: 'Atlanta, GA',
		year: '2021',
		title: 'generations haven',
		href: '/',
		src: '/elements/residential/red-couch.png',
	},
	{
		location: 'Austin, TX',
		year: '2021',
		title: 'underground escape',
		href: '/',
		src: '/elements/residential/billiards.png',
	},
	{
		location: 'Mexico City, Mexico',
		year: '2021',
		title: 'international crashpad',
		href: '/',
		src: '/elements/residential/pool.png',
	},
	{
		location: 'New York, NY',
		year: '2021',
		title: 'urban retreat',
		href: '/',
		src: '/elements/residential/urban-retreat.png',
	},
];

export const mockDarkSliderData = [
	{
		src: '/images/dark-slider-placeholder.png',
	},
	{
		src: '/images/dark-slider-placeholder.png',
	},
	{
		src: '/images/dark-slider-placeholder.png',
	},
	{
		src: '/images/dark-slider-placeholder.png',
	},
	{
		src: '/images/dark-slider-placeholder.png',
	},
];
