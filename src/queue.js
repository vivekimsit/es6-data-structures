import {isIterable} from './utils';

function *arrayGenerator(arr) {
  let i = 0;
  let l = arr.length;
  while(i < l) {
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
    if (isIterable(iterable)) {
      for (const i of iterable) {
        this.enqueue(i);
      }
    }
  }

  peek() {
    if (this.isEmpty()) throw new Error('Queue underflow');
    return head(this[data]);
  }

  enqueue(item) {
    this[data].push(item);
  }

  dequeue() {
    if (this.isEmpty()) throw new Error('Queue underflow');
    this[data].shift();
  }

  isEmpty() {
    return this[data].length === 0;
  }

  size() {
    return this[data].length;
  }

  [Symbol.iterator]() {
    return arrayGenerator(this[data]);
  }

  toString() {
    return JSON.stringify(this[data]);
  }
}
