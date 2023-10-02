import { ValueType, ValueArgs, MathOperation } from './models'

export class Value {
    data: number
    private _prev: Set<Value>
    private _op?: MathOperation
    label: string

    constructor(valueArgs: ValueArgs) {
        const { data, children, op, label } = valueArgs
        this.data = data
        this._prev = children ? new Set(children) : new Set()
        this._op = op
        this.label = label ?? ''
    }

    add(other: ValueType): Value {
        other = other instanceof Value ? other : new Value({ data: other as number })
        let output = new Value({ data: this.data + other.data, children: [this, other], op: '+'})
        return output
    }

    sub(other: ValueType): Value {
        other = other instanceof Value ? other : new Value({ data: other as number })
        let output = new Value({ data: this.data - other.data, children: [this, other], op: '-'})
        return output
    }

    mul(other: ValueType): Value {
        other = other instanceof Value ? other : new Value({ data: other as number })
        let output = new Value({ data: this.data * other.data, children: [this, other], op: '*'})
        return output
    }

    pow(other: ValueType): Value {
        other = other instanceof Value ? other : new Value({ data: other as number })
        let output = new Value({ data: this.data ** other.data, children: [this, other], op: '**'})
        return output
    }
}
