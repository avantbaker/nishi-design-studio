export const expertiseRenderedMap = {
	planning: 'Planning',
	design: 'Design Operation',
	orderingBuying: 'Ordering + Buying',
	management: 'Project Management',
	specialty: 'Specialty Services for Residential + Commercial Design',
	boutique: 'Boutique Hotel Design',
	retail: 'Retail Design',
	furniture: 'Custom Furniture Design',
	textiles: 'Custom Textiles + Wallpaper',
	renovations: 'Renovations and Remodeling',
	consultation: 'consultation',
	'space-planning': 'space planning',
	conceptual: 'conceptual + schematic design',
	research: 'research + sourcing',
	'project-planning': 'project management',
	procurement: 'procurement',
	installation: 'installation',
};

export default `
  spacesDetailSection {
    expertiseRendered
		expertiseBannerImgix {
			url
		}
    expertiseContentTitle
    expertiseContent
		expertiseBottomBannerImgix {
			url
		}
  }
`;
