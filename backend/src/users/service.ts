import { sqliteClient } from '../sqliteClient';
import { User, NullablePartial } from '../types';
import { v4 as uuid } from 'uuid';
const tableName = 'user';

export const getAllUsers = async (): Promise<User[]> => {
  return sqliteClient.readAll<User>(tableName);
};

export const getUser = async (
  id: string
): Promise<User | null> => {
  return sqliteClient.read<User>(tableName, id);
};

export const createUser = async (
  user: Omit<User, '_id'>
): Promise<User> => {
  const _id = uuid();
  const payload = { ...user, _id };
  await sqliteClient.create<User>(tableName, payload);
  return payload;
};

export const deleteUser = async (
  userId: string
): Promise<null> => {
  await sqliteClient.destroy(tableName, userId);
  return null;
};

export const updateUser = async (
  userUpdate: NullablePartial<User> & Pick<User, '_id'>
  ): Promise<NullablePartial<User> & Pick<User, '_id'>> => {
      await sqliteClient.update(tableName, userUpdate);
      return userUpdate;
  };

export const userService = {
  getUser,
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
};
