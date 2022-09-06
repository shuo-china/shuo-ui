// eslint-disable-next-line
import { isArray, isObject } from '@vue/shared'

// null or undefined
export { isNil } from 'lodash'

// eslint-disable-next-line
export { isArray, isFunction, isObject, isString, isDate, isPromise, isSymbol } from '@vue/shared'

export const isUndefined = (val: unknown): val is undefined => val === undefined

export const isNumber = (val: unknown): val is number => typeof val === 'number'

export const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean'

export const isEmpty = (val: unknown) =>
  (!val && val !== 0) || (isArray(val) && val.length === 0) || (isObject(val) && !Object.keys(val).length)
