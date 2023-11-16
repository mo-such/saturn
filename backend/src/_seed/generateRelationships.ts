import { v4 } from 'uuid';
import { Entity, Relationship } from '../types';
export const generateRelationships = (entities: Entity[]): Relationship[] => {
  const users = entities.filter((e) => e._type === 'User');
  const allEntities = entities.filter((e) => e._type !== 'User');
  const relationships: Relationship[] = [];
  allEntities.forEach((entity) => {
    const maxNumberOfUsers = 5;
    const numberOfUsersToRelate = Math.floor(Math.random() * maxNumberOfUsers);

    const userIndex = Math.floor(
      Math.random() * users.length - numberOfUsersToRelate + 1
    );

    for (let i = 0; i < numberOfUsersToRelate; i++) {
      const user = users[userIndex + i];
      if (!user) {
        break;
      }
      relationships.push({
        displayName: 'OWNS',
        _id: v4(),
        toEntityID: entity._id,
        fromEntityID: user._id,
      });
    }
  });
  return relationships;
};
