export class SparseArray<T> {
  private sparseArray:T[]
  
  constructor(iterate:Iterable<T>) {
    const arr = Array.from(iterate)
    this.sparseArray = []
  }

  get originValue() {
    return []
  }

  get value() {
    return this.sparseArray
  }
}
