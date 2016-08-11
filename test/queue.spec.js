import {strictEqual as equal} from 'assert';
import {Queue} from '../src';

suite('Queue', () => {
  test('without iterator', () => {
    const q = new Queue();
    equal(q.size(), 0);
    q.enqueue(1);
    q.enqueue(2);
    equal(q.size(), 2);
    q.dequeue();
    q.dequeue();
    equal(q.size(), 0);
  });

  test('with iterator', () => {
    const q = new Queue([1, 2, 3]);
    equal(q.size(), 3);
    q.dequeue();
    q.dequeue();
    q.dequeue();
    equal(q.size(), 0);
  });

  test('peek', () => {
    const q = new Queue([1, 2, 3]);
    equal(q.peek(), 1);
    q.dequeue();
    equal(q.peek(), 2);
  });

  test('iterator', () => {
    const q = new Queue([1, 2, 3]);
    let i = 1;
    for(const item of q) {
      equal(item, i);
      i++;
    }
  });
});

