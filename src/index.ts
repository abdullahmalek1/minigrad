import { SomeValue, ValueArgs, MathOperation } from './models'

export class Value {
    data: number
    grad: number
    private _prev: Set<Value>
    private _op?: MathOperation
    label: string

    constructor({ data, children, op, label }: ValueArgs) {
        this.data = data
        this.grad = 0
        this._prev = children ? new Set(children) : new Set()
        this._op = op
        this.label = label ?? ''
    }

    add(other: SomeValue): Value {
        other = other instanceof Value ? other : new Value({ data: other as number })
        let output = new Value({ data: this.data + other.data, children: [this, other], op: '+'})
        return output
    }

    sub(other: SomeValue): Value {
        other = other instanceof Value ? other : new Value({ data: other as number })
        let output = new Value({ data: this.data - other.data, children: [this, other], op: '-'})
        return output
    }

    mul(other: SomeValue): Value {
        other = other instanceof Value ? other : new Value({ data: other as number })
        let output = new Value({ data: this.data * other.data, children: [this, other], op: '*'})
        return output
    }

    pow(other: SomeValue): Value {
        other = other instanceof Value ? other : new Value({ data: other as number })
        let output = new Value({ data: this.data ** other.data, children: [this, other], op: '**'})
        return output
    }
}
