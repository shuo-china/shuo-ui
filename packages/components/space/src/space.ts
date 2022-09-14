import { h, computed } from 'vue'
import {
  isValidElementNode,
  isFragment,
  getPrefixCls,
  isString,
  isNumber,
  isArray,
  isEmpty,
  definePropType,
  Arrayable
} from '@shuo-ui/utils'
import type { VNode, VNodeArrayChildren, CSSProperties } from 'vue'

export const SpaceType = ['flex', 'inline-flex'] as const

export const SpaceDirection = ['horizontal', 'vertical'] as const

export const SpaceAlign = ['start', 'end', 'center', 'baseline', 'stretch'] as const

type SpaceSize = Arrayable<keyof typeof spaceSize | number>

const spaceSize = {
  small: 8,
  middle: 16,
  large: 24
}

export default {
  name: 'SSpace',
  props: {
    size: {
      type: definePropType<SpaceSize>([String, Number, Array]),
      default: 'small',
      validator: value => {
        if (isString(value)) {
          return Object.keys(spaceSize).includes(value)
        } else if (isArray(value)) {
          return !isEmpty(value) && value.every(v => isNumber(v) || Object.keys(spaceSize).includes(v))
        } else if (isNumber(value)) {
          return true
        } else {
          return false
        }
      }
    },
    wrap: {
      type: Boolean,
      default: false
    },
    type: {
      type: definePropType<typeof SpaceType[number]>(String),
      default: 'inline-flex',
      validator: value => SpaceType.includes(value)
    },
    direction: {
      type: definePropType<typeof SpaceDirection[number]>(String),
      default: 'horizontal',
      validator: value => SpaceDirection.includes(value)
    },
    align: {
      type: definePropType<typeof SpaceAlign[number]>(String),
      default: '',
      validator: value => [...SpaceAlign, ''].includes(value)
    }
  },
  setup(props, { slots }) {
    return () => {
      const children = slots.default?.()
      if ((children || []).length === 0) {
        return null
      }

      const prefixCls = getPrefixCls('space')

      const getSize = (size: string | number) => {
        return (isString(size) ? spaceSize[size] : size || 0) + 'px'
      }

      const _align = computed(() => {
        if (!props.align) {
          return props.direction === 'horizontal' ? 'center' : 'stretch'
        }
        return props.align
      })

      const styles = computed(() => {
        const style: CSSProperties = {}
        if (isString(props.size) || isNumber(props.size)) {
          style.gap = getSize(props.size)
        } else if (isArray(props.size)) {
          if (props.size.length === 1) {
            style.columnGap = getSize(props.size[0])
          } else if (props.size.length > 1) {
            style.columnGap = getSize(props.size[0])
            style.rowGap = getSize(props.size[1])
          }
        }

        return style
      })

      const classNames = computed(() => [
        prefixCls,
        `${prefixCls}-${props.direction}`,
        `${prefixCls}-${_align.value}`,
        {
          [`${prefixCls}-flex`]: props.type === 'flex',
          [`${prefixCls}-wrap`]: !!props.wrap
        }
      ])

      if (isArray(children)) {
        const extractedChildren: VNode[] = []

        const createItemVNode = (children: VNodeArrayChildren) => h('div', { class: prefixCls + '-item' }, children)

        children.forEach(child => {
          if (isFragment(child)) {
            if (isArray(child.children)) {
              child.children.forEach(nested => {
                extractedChildren.push(createItemVNode([nested]))
              })
            }
          } else if (isValidElementNode(child)) {
            extractedChildren.push(createItemVNode([child]))
          }
        })

        return h(
          'div',
          {
            class: classNames.value,
            style: styles.value
          },
          extractedChildren
        )
      }

      return children
    }
  }
}
