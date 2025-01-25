import { describe, it, expect } from 'vitest'
import { SparseArray } from './sparseArray'

describe('', ()=>{
  it('', ()=>{
    const arr = [
      [0, 1, 0, 0, 0],
      [0, 0, 2, 0, 0],
      [0, 0, 0, 0, 0],
      [3, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ]

    const expectVal = [
      [5, 5, 3],
      [0, 1, 1],
      [1, 2, 2],
      [3, 0, 3]
    ]
    
    expect(new SparseArray(arr).value).toEqual(expectVal)

  })

})
