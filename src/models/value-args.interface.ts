import { IValue, Operation } from './index'

export interface IValueArgs {
    data: number
    children?: [IValue, IValue]
    op?: Operation,
    label?: string
}
