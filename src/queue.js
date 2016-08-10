import {isDefAndNotNull, isIterable} from './utils';

function *arrayGenerator(arr) {
  let i = 0;
  let l = arr.length;
  while(i < 0) {
    yield arr[i++];
  }
}

function head(iterable) {
  return iterable[0] || null;
}

const data = Symbol('data');

export default class {
  constructor(iterable) {
    this[data] = [];
    if (iterable) {
      for (const i of iterable) {
        this.enqueue(i);
      }
    }
  }

  peek() {
    return head(this[data]);
  }

  enqueue(item) {
    this[data].push(item);
  }

  isEmpty() {
    return this[data].length === 0;
  }

  size() {
    return this[data].length;
  }
}
