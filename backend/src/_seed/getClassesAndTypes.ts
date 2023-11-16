import { Entity, Type } from '../types';

export const getClassesAndTypes = (entities: Entity[]) => {
  const result: {
    classes: string[];
    types: Type[];
  } = {
    classes: [],
    types: [],
  };
  entities.forEach((e) => {
    if (result.classes.indexOf(e._class) === -1) {
      // Add Class of current entity to array if it does not exist
      result.classes.push(e._class);
    }
    if (
      !result.types.find(
        (r) => r.displayName === e._type && r.parentClass === e._class
      )
    ) {
      // Add new Type to array if it does not exist
      result.types.push({ displayName: e._type, parentClass: e._class });
    }
  });
  return result;
};
