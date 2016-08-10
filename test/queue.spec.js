import {strictEqual as equal} from 'assert';
import {Queue} from '../src';

suite('Queue', () => {
  test('without iterator', () => {
    const q = new Queue();
    q.enqueue(1);
    equal(q.size(), 1);
    q.enqueue(2);
    equal(q.size(), 2);
  });

  test('with iterator', () => {
    const q = new Queue([1, 2, 3]);
    equal(q.size(), 3);
  });

  test('peek', () => {
    const q = new Queue([1, 2, 3]);
    equal(q.peek(), 1);
  });

  test('iterator', () => {
  });
});

