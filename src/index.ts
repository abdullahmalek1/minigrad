import { Operation, ValueArgs } from './models'

export class Value {
    data: number
    prev: Set<Value>
    op: Operation
    _label: string

    constructor(valueArgs: ValueArgs) {
        const { data, children, op, label } = valueArgs
        this.data = data
        this.prev = children ? new Set(children) : new Set()
        this.op = op ?? Operation.NONE
        this._label = label ?? ''
    }

    add(other: Value): Value {
        let self = this
        let output = new Value({ data: self.data + other.data, children: [self, other], op: Operation.ADD})
        return output
    }

    mul(other: Value): Value {
        let output = new Value({ data: this.data * other.data, children: [this, other], op: Operation.MULTIPLY})
        return output
    }

    label(name: string): Value {
        this._label = name
        return this
    }
}
