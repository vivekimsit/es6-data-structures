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
    this.swim(this[N]);
  }

  get() {
    if (this.isEmpty()) {
      throw new Error('PQ underflow');
    }
    return this[data][1]; //  use slice or splice or shift?
  }

  del() {
    if (this.isEmpty()) {
      throw new Error('PQ underflow');
    }
    let max = this[data][1];
    this.swap(1, this[N]--);
    this.sink(1);
    // remove last element from the array.
    this[data].splice(-1, 1);
    return max;
  }

  size() {
    return this[N];
  }

  isEmpty() {
    return this.size() === 0;
  }

  // Heap specific helper functions

  // Maintains the heap invariant while
  // removing an item from the heap.
  sink(k) {
    while (2*k <= this[N]) {
      let j = 2 * k;
      if (j < this[N] /*Bound checking*/ &&
          this.comparator(j, j+1)) {
        j++;
      }
      if (!this.comparator(k, j)) {
        break;
      }
      this.swap(k, j);
      k = j;
    }
  }

  // Maintains the heap invariant while
  // inserting an item in the heap.
  swim(k) {
    let parent = Math.floor(k / 2);
    while(k > 1 /* we are dealing with array here*/ &&
        this.comparator(parent, k)) {
      this.swap(k, parent);
      k = parent;
    }
  }

  swap(i, j) {
    let temp = this[data][i];
    this[data][i] = this[data][j];
    this[data][j] = temp;
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
	return new PQ((a, b) => a > b);
}
