import { List } from '../adt'

export class ArrayList<T> extends List<T> {
  static readonly MAX_CAP = 2**32 - 1
  private size = 0
  
  append(elem: T): void {
    throw new Error('Method not implemented.')
  }
  
  set(index: number, elem: T): void {
    throw new Error('Method not implemented.')
  }
  get(index: number): T {
    throw new Error('Method not implemented.')
  }
  insert(index: number, elem: T): void {
    throw new Error('Method not implemented.')
  }
  remove(elem: T): void {
    throw new Error('Method not implemented.')
  }
  count(): number {
    throw new Error('Method not implemented.')
  }

}
