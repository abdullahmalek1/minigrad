import { Value } from "../src";

test('add', () => {
    const a = new Value({ data: 2.0, label: 'a'})
    const b = new Value({ data: -3.0, label: 'b'})
    const c = a.add(b)

    expect(c.data).toEqual(-1)
})

test('mul', () => {
    const a = new Value({ data: 2.0, label: 'a'})
    const b = new Value({ data: -3.0, label: 'b'})
    const c = a.mul(b)

    expect(c.data).toEqual(-6)
})

test('mul and add', () => {
    const a = new Value({ data: 2.0, label: 'a'})
    const b = new Value({ data: -3.0, label: 'b'})
    const c = new Value({ data: 10.0, label: 'c'})

    const d = a.mul(b)
    const e = d.add(c)
    

    expect(e.data).toEqual(4)
})