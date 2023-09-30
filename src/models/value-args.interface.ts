import { MathOperation } from './index'
import { Value } from '..'

export interface ValueArgs {
    data: number
    children?: [Value, Value]
    op?: MathOperation,
    label?: string
}
