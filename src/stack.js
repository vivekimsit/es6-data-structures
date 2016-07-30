import {isDefAndNotNull, isIterable} from './utils';

function *reverseArrayGenerator(arr) {
  let i = arr.length;
  while(--i >= 0) {
    yield arr[i];
  }
}

const data = Symbol('data');

export default class {
  constructor(iterable) {
    this[data] = [];
    if (isIterable(iterable)) {
      for (let item of iterable) {
        this.push(item);
      }
    }
  }

  peek() {
    return this[data].slice(-1)[0];
  }

  push(item) {
    this[data].push(item);
  }

  pop() {
    return this[data].pop();
  }

  isEmpty() {
    return this[data].length === 0;
  }

  size() {
    return this[data].length;
  }

  toString() {
    let res = [];
    for (let item of this) {
      res.push(item);
    }
    return JSON.stringify(res.join(' '));
  }

  [Symbol.iterator]() {
    return reverseArrayGenerator(this[data]);
  }
}
