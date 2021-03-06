const data = Symbol('PQ data'),
         N = Symbol('PQ length');

class PQ {
  constructor(comparator) {
    this[N]    = 0;
    this[data] = [];
    this.comparator = comparator || PQ.defaultComparator;
  }

  insert(item) {
    this[data][++this[N]] = item;
    swim(this[data], this.comparator, this[N]);
  }

  get() {
    if (this.isEmpty()) {
      throw new Error('PQ underflow');
    }
    return this[data][1];
  }

  del() {
    if (this.isEmpty()) {
      throw new Error('PQ underflow');
    }
    let max = this[data][1];
    swap(this[data], 1, this[N]--);
    sink(this[data], this.comparator, this[N], 1);
    // remove last element from the array.
    this[data].pop();
    return max;
  }

  size() {
    return this[N];
  }

  isEmpty() {
    return this.size() === 0;
  }

  static defaultComparator(a, b) {
    if (typeof a === typeof 0 ||
        typeof a === typeof '') {
      return a < b;    
    } else {
      return JSON.strigify(a) < JSON.strigify(b);  
    }
  }
}

export function maxPQ() {
	return new PQ();
}

export function minPQ() {
	return new PQ((a, b) => {
		return a > b;
	});
}

// Heap specific helper functions

// Maintains the heap invariant while
// removing an item from the heap.
function sink(heap, compareFn, size, k) {
	while (2 * k <= size) {
		let j = 2 * k;
		if (j < size /*Bound checking*/ &&
				compareFn(heap[j], heap[j+1])) {
					j++;
				}
		if (!compareFn(heap[k], heap[j])) {
			break;
		}
		swap(heap, k, j);
		k = j;
	}
}

// Maintains the heap invariant while
// inserting an item in the heap.
function swim(heap, compareFn, k) {
	let parent = Math.floor(k / 2);
	while(k > 1 /* we are dealing with array here*/ &&
			compareFn(heap[parent], heap[k])) {
		swap(heap, k, parent);
		k = parent;
		parent = Math.floor(k / 2);
	}
}

function swap(heap, i, j) {
	let temp = heap[i];
	heap[i] = heap[j];
	heap[j] = temp;
}
