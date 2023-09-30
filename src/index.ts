import { ValueType, ValueArgs, MathOperation } from './models'

export class Value {
    data: number
    prev: Set<Value>
    op?: MathOperation
    private _label: string

    constructor(valueArgs: ValueArgs) {
        const { data, children, op, label } = valueArgs
        this.data = data
        this.prev = children ? new Set(children) : new Set()
        this.op = op
        this._label = label ?? ''
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

    setLabel(name: string): Value {
        this._label = name
        return this
    }

    getLabel(): string {
        return this._label
    }
}
