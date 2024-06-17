const root = "https://live-nishi-design-studio.pantheonsite.io/";
const path = "wp-content/uploads/2022/03/";
const image = "spaces-slide-image.png";
const DEFAULT_IMG = `${root}${path}${image}`;
const DIMENSION_DEFAULTS = {
  w: 1700,
  h: 1700,
  q: 80,
};
export const normalizePosts = (
  posts = [],
  { w, h, q } = DIMENSION_DEFAULTS
) => {
  if (!posts || !(posts.length > 0)) return;
  return posts.map(({ space, ...rest }) => {
    const CV = space || rest;
    const spaceInfo = CV?.spaceInformation;
    let imgUrl = getImageUrl(spaceInfo, w, h, q);
    const result = {
      title: CV?.title || "New Space",
      location: spaceInfo?.spaceLocation || "Atlanta, GA",
      year: spaceInfo?.spaceYear || spaceInfo?.year || "2024",
      category: CV?.categories?.nodes?.[0]?.name || "Uncategorized",
      slug: CV?.slug || "spaces",
      imgSrc: imgUrl,
      src: imgUrl,
      href: CV?.slug || DEFAULT_IMG,
    };
    return result;
  });
};

function getImageUrl(spaceInfo, w = 1700, h = 1700, q = 80) {
  const BACKUP_IMG = spaceInfo?.spaceFeaturedImage?.sourceUrl;
  let IMGIX_URL = spaceInfo?.spaceFeaturedImageNew?.url;
  if (IMGIX_URL) {
    IMGIX_URL = `${IMGIX_URL}?w=${w}&h=${h}&fit=clip&q=${q}&auto=format&wm=webp`;
  }
  return IMGIX_URL || BACKUP_IMG;
}
