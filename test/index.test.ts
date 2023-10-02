import { Value } from "../src";

test('add', () => {
    const a = new Value({ data: 2.0 })
    const b = new Value({ data: 3.0 })
    const c = a.add(b)

    expect(c.data).toEqual(5)
})

test('sub', () => {
    const b = new Value({ data: 3.0 })
    const a = new Value({ data: 2.0 })
    const c = a.sub(b)

    expect(c.data).toEqual(-1)
})

test('mul', () => {
    const a = new Value({ data: 2.0 })
    const b = new Value({ data: 3.0 })
    const c = a.mul(b)

    expect(c.data).toEqual(6)
})

test('pow', () => {
    const a = new Value({ data: 2.0 })
    const b = new Value({ data: 3.0 })
    const c = a.pow(b)

    expect(c.data).toEqual(8)
})

test('add and subtract', () => {
    const a = new Value({ data: 2.0 })
    const b = new Value({ data: 3.0 })
    const c = new Value({ data: 4.0 })
    const d = a.add(b).sub(c)

    expect(d.data).toEqual(1)
})

test('add, subtract and multiply', () => {
    const a = new Value({ data: 2.0 })
    const b = new Value({ data: 3.0 })
    const c = new Value({ data: 4.0 })
    const d = new Value({ data: 5.0})
    const e = a.add(b).sub(c).mul(d)

    expect(e.data).toEqual(5)
})

test('add, subtract, multiply and power', () => {
    const a = new Value({ data: 2.0 })
    const b = new Value({ data: 3.0 })
    const c = new Value({ data: 4.0 })
    const d = new Value({ data: 5.0})
    const e = new Value({ data: 6.0})
    const f = a.add(b).sub(c).mul(d).pow(e)

    expect(f.data).toEqual(15625)
})

test('add a Value to a number', () => {
    const a = new Value({ data: 2.0 })
    const b = 1
    const c = a.add(b)

    expect(c.data).toEqual(3)
})

test('add a number to Value', () => {
    const a = new Value({ data: 2.0 })
    const b = 1
    const c = a.add(b)

    expect(c.data).toEqual(3)
})

test('subtract a number from Value', () => {
    const a = new Value({ data: 2.0 })
    const b = 1
    const c = a.sub(b)

    expect(c.data).toEqual(1)
})

test('multiply Value by a number', () => {
    const a = new Value({ data: 2.0 })
    const b = 5
    const c = a.mul(b)

    expect(c.data).toEqual(10)
})

test('grad should be initialised to zero', () => {
    const a = new Value({ data: 2.0})

    expect(a.grad).toEqual(0)
})