export type Entity = {
  _id: string;
  displayName: string;
  _type: string;
  _class: string;
};

// Adding entity ownership capability
export type Relationship = {
  _id: string;
  toEntityID: string;
  fromEntityID?: string | null;
  fromUserID?: string | null;
  displayName: string;
};

export type Type = {
  displayName: string;
  parentClass: string;
};

export type Class = {
  displayName: string;
};

// New user type
export type User = {
  _id: string;
  userName: string;
}

export type NullablePartial<T> = { [P in keyof T]?: T[P] | null };
