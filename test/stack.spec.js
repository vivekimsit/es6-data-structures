import {strictEqual as equal} from 'assert';
import {Stack} from '../src';

suite('Stack', () => {
  test('without iterator', () => {
    const s = new Stack();
    s.push(1);
    equal(s.size(), 1);
    equal(s.pop(), 1);
    equal(s.size(), 0);
  });

  test('with iterator', () => {
    let s = new Stack([1, 2, 3]);
    equal(s.size(), 3);
    s = new Stack('hello');
    equal(s.size(), 5);
    s = new Stack([{name: 'Foo'}, {name: 'Bar'}]);
    equal(s.size(), 2);
  });

  test('peek', () => {
    let s = new Stack([1, 2, 3]);
    equal(s.peek(), 3);
    s.pop();
    equal(s.peek(), 2);
  });

  test('iterator', () => {
    const s = new Stack([1, 2, 3]);
    let i = 3;
    for(let item of s) {
      equal(item, i);
      i--;
    }
  });
});

