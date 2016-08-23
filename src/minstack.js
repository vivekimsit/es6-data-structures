import Stack from './stack';

const stack = Symbol('normal stack');
const min = Symbol('min stack');

export default class MinStack {

  constructor(iterable) {
    this[stack] = new Stack();
    this[min] = new Stack();
    if (iterable) {
      for (let val of iterable) {
        this.push(val);
      }
    }
  } 

  min() {
    if (this[stack].isEmpty()) {
      throw new Error('Min of empty stack');    
    }
    return this[min].peek();
  }

  pop() {
    if (this[stack].isEmpty()) {
      throw new Error('Popping from empty stack');  
    }
    let val = this[stack].pop();
    if (val === this[min].peek()) {
      this[min].pop();
    }
    return val;
  }

  push(data) {
    if (this[min].isEmpty() && this[stack].isEmpty()) {
      this[min].push(data);
    } else if (data <= this[min].peek()) {
      this[min].push(data);
    }
    this[stack].push(data);
  }

  size() {
    return this[stack].size();
  }

  isEmpty() {
    return this[stack].isEmpty();
  }

  peek() {
    return this[stack].peek();
  }

  toString() {
		return this[min].toString();
  }
}
