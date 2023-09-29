import { Operation } from './index'
import { Value } from '..'

export interface ValueArgs {
    data: number
    children?: [Value, Value]
    op?: Operation,
    label?: string
}
