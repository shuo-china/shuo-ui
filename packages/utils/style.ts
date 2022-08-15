import { isNumber, isString } from '@shuo-ui/utils'
import customStyles from '@shuo-ui/styles/custom.module.scss'

export function addUnit(value?: string | number, defaultUnit = 'px') {
  if (!value) return ''
  if (isString(value)) {
    return value
  } else if (isNumber(value)) {
    return `${value}${defaultUnit}`
  }
}

export function getPrefixCls(componentName: string) {
  return customStyles.cssPrefix + componentName
}
