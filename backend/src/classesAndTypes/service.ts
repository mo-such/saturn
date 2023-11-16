import { sqliteClient } from '../sqliteClient';
import { Type, Class } from '../types';

export const getClasses = async (): Promise<Class[]> => {
  return sqliteClient.readAll<Class>('class');
};

// TODO: Make this so that it uses a query-side filter, rather than fetching everything and then filtering it after
export const getTypes = async (parentClassName: string): Promise<Type[]> => {
  const types = await sqliteClient.readAll<Type>('type');
  return types.filter((t) => t.parentClass === parentClassName);
};

export const classAndTypeService = {
  getClasses,
  getTypes,
};
