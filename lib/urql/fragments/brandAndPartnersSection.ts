export const productsMap = {
	tresses: 'Tower + Tresses',
	modern: 'Modern Goods + Home',
	fabrics: 'Flower Fabrics',
};

export const servicesMap = {
	brown: 'Brown LLC Construction',
	tavinson: 'Tavinson Hardware',
	radiant: 'Radiant Plumbing',
	selman: 'Selman Landscaping',
};

export default `
  brandsAndPartners {
    brandsTitleLineOne
    brandsTitleLineTwo
    brandsProducts {
			partner
		}
    brandServices {
			service
		}
  }
`;
