export abstract class List<T> {
  private elems:T[] = []

  constructor()
  constructor(length:number, fillValue:T)
  constructor(iterate:Iterable<T>)
  constructor(...args:unknown[]) {
    const iterate = args.length === 1 ? args[0] : new Array(args[0]).fill(args[1])
    for(let elem of iterate as Iterable<T>) {
      this.elems.push(elem)
    }
  }

  abstract set(index:number, elem:T):void
  abstract get(index:number):T
  abstract insert(index:number, elem:T):void
  abstract append(elem:T):void
  abstract remove(elem:T):void
  abstract count():number
}
