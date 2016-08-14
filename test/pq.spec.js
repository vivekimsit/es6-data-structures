import {strictEqual as equal} from 'assert';
import {throws} from 'assert';
import {PQ} from '../src';


suite('Max PQ', () => {
	let q;

	beforeEach(function() {
    q = PQ.maxPQ();
	});

  test('without iterator', () => {
    equal(q.size(), 0);
		q.insert(3);
		q.insert(2);
		q.insert(5);
    equal(q.size(), 3);
  });

  test('should get the maximum', () => {
    equal(q.size(), 0);
		q.insert(3);
		q.insert(2);
		q.insert(5);
    equal(q.get(), 5);
    equal(q.size(), 3);
    equal(q.del(), 5);
    equal(q.size(), 2);
  });

  test('should be empty when no data', () => {
    equal(q.isEmpty(), true);
		q.insert(3);
    equal(q.isEmpty(), false);
  });

  test('del should throw when no data', () => {
    throws(q.del, Error);
  });
});


suite('Min PQ', () => {
	let q;

	beforeEach(function() {
    q = PQ.minPQ();
	});

	test('without iterator', () => {
		equal(q.size(), 0);
		q.insert(3);
		q.insert(2);
		q.insert(5);
		equal(q.size(), 3);
	});

  test('should get the minimum', () => {
    equal(q.size(), 0);
		q.insert(2);
		q.insert(1);
		q.insert(5);
		q.insert(0);
		q.insert(-1);
    equal(q.get(), -1);
    equal(q.del(), -1);
    equal(q.del(), 0);
  });

	test('should be empty when no data', () => {
		equal(q.isEmpty(), true);
		q.insert(3);
		equal(q.isEmpty(), false);
	});

  test('del should throw when no data', () => {
    throws(q.del, Error);
  });
});
