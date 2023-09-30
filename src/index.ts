import { IValue, IValueArgs, Operation } from './models'

export class Value implements IValue {
    data: number
    prev: Set<IValue>
    op: Operation
    private _label: string

    constructor(valueArgs: IValueArgs) {
        const { data, children, op, label } = valueArgs
        this.data = data
        this.prev = children ? new Set(children) : new Set()
        this.op = op ?? Operation.NONE
        this._label = label ?? ''
    }

    add(other: IValue): IValue {
        let output = new Value({ data: this.data + other.data, children: [this, other], op: Operation.ADD})
        return output
    }

    sub(other: IValue): IValue {
        let output = new Value({ data: this.data - other.data, children: [this, other], op: Operation.SUBTRACT})
        return output
    }

    mul(other: IValue): IValue {
        let output = new Value({ data: this.data * other.data, children: [this, other], op: Operation.MULTIPLY})
        return output
    }

    pow(other: IValue): IValue {
        let output = new Value({ data: this.data ** other.data, children: [this, other], op: Operation.POW})
        return output
    }

    setLabel(name: string): IValue {
        this._label = name
        return this
    }

    getLabel(): string {
        return this._label
    }
}

// let a = new Value({ data: 2.0, label: 'a'})
// let b = new Value({ data: -3, label: 'b'})
// let c = new Value({ data: 10.0, label: 'c'})

// let e = a.mul(b).setLabel('e')
// let d = e.add(c).setLabel('d')
// let f = new Value({ data: -2.0, label: 'f'})
// let L = d.mul(f).setLabel('L')

// console.log(L)
