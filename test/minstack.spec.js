import {strictEqual as equal} from 'assert';
import {MinStack} from '../src';

suite('MinStack', () => {
	suite('without Iterator', () => {
		let s;

		beforeEach(function() {
			s = new MinStack();
		});

		test('size', () => {
			equal(s.size(), 0);
			s.push(1);
			s.push(2);
			s.push(3);
			equal(s.size(), 3);
		});

		test('unit stack', () => {
			s.push(3);
			equal(s.min(), 3);
		});

		test('min value', () => {
			s.push(3);
			s.push(2);
			s.push(-1);
			s.push(-3);
			s.push(-2);
			equal(s.min(), -3);
			s.pop();
			equal(s.min(), -3);
			s.pop();
			equal(s.min(), -1);
		});
	});

	suite('with Iterator', () => {

		test('size', () => {
			const s = new MinStack([1, 2, 3]);
			equal(s.size(), 3);
		});

		test('unit stack', () => {
			const s = new MinStack([1]);
			equal(s.min(), 1);
		});

		test('min value', () => {
			const s = new MinStack([3, 2, -1, -3, -2]);
			equal(s.min(), -3);
			s.pop();
			equal(s.min(), -3);
			s.pop();
			equal(s.min(), -1);
		});

		test('serialize', () => {
			const s = new MinStack([3, 2, -1, -3, -2]);
			equal(s.toString(), '"-3 -1 2 3"');
		});
	});
});
