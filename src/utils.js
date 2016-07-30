export const isDefAndNotNull = object =>
  object !== undefined && object !== null;

export const isIterable = object =>
  isDefAndNotNull(object) && typeof object[Symbol.iterator] === 'function';
