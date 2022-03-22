import { For0ForFragment } from 'lib/urql/fragments';

export default `
  {
    page(id: 388, idType: DATABASE_ID) {
      ${For0ForFragment}
    }
  }
`;
