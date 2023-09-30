import { Operation } from './'

export interface IValue {
    data: number
    prev: Set<IValue>
    op: Operation
    
    add: (other: IValue) => IValue
    mul: (other: IValue) => IValue
    sub: (other: IValue) => IValue
    pow: (other: IValue) => IValue
    setLabel: (name: string) => IValue
    getLabel: () => string
}
