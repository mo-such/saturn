export type Entity = {
  _id: string;
  displayName: string;
  _type: string;
  _class: string;
};

export type Relationship = {
  _id: string;
  toEntityID: string;
  fromEntityID: string;
  displayName: string;
};

export type Type = {
  displayName: string;
  parentClass: string;
};

export type Class = {
  displayName: string;
};

export type NullablePartial<T> = { [P in keyof T]?: T[P] | null };
