import { useQuery, gql } from '@apollo/client';
import { EntityFieldPolicy } from '../types.generated';

interface GetEntitiesData {
  entities: EntityFieldPolicy[];
}

const GET_ENTITIES = gql`
  query GetEntities {
    entities {
      _id
      displayName
      _class
      _type
    }
  }
`;
export const useEntities = () => {
  const response = useQuery<GetEntitiesData>(GET_ENTITIES);
  return response;
};
