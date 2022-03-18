export const expertiseRenderedMap = {
	planning: 'Planning',
	design: 'Design Operation',
	orderingBuying: 'Ordering + Buying',
	consultation: 'Consultation',
	research: 'Research + Planning',
	conceptual: 'Conceptual + Schematic Design',
	management: 'Project Management',
	installation: 'Ordering + Installation',
	specialty: 'Specialty Services for Residential + Commercial Design',
	boutique: 'Boutique Hotel Design',
	retail: 'Retail Design',
	furniture: 'Custom Furniture Design',
	textiles: 'Custom Textiles + Wallpaper',
	renovations: 'Renovations and Remodeling',
};

export default `
  spacesDetailSection {
    expertiseRendered
    expertiseBanner {
      sourceUrl
    }
    expertiseContentTitle
    expertiseContent
    expertiseBottomBanner {
      sourceUrl
    }
  }
`;
