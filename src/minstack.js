import Stack from './stack';

const items = Symbol('Stack items');

export default class MinStack {

  constructor(iterable) {
    this.stack = new Stack();
    this.minStack = new Stack();
    if (iterable) {
      for (let val of iterable) {
        this.push(val);
      }
    }
  } 

  min() {
    if (this.stack.isEmpty()) {
      throw new Error('Min of empty stack');    
    }
    return this.minStack.peek();
  }

  pop() {
    if (this.stack.isEmpty()) {
      throw new Error('Popping from empty stack');  
    }
    let val = this.stack.pop();
    if (val === this.minStack.peek()) {
      this.minStack.pop();
    }
    return val;
  }

  push(data) {
    if (this.minStack.isEmpty() && this.stack.isEmpty()) {
      this.minStack.push(data);
    } else if (data <= this.minStack.peek()) {
      this.minStack.push(data);
    }
    this.stack.push(data);
  }

  size() {
    return this.stack.size();
  }

  isEmpty() {
    return this.stack.isEmpty();
  }

  peek() {
    return this.stack.peek();
  }
}
