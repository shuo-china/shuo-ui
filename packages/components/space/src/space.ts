import { h, computed } from 'vue'
import { isValidElementNode, isFragment, getPrefixCls, isString, isNumber, isArray } from '@shuo-ui/utils'
import type { VNode, VNodeArrayChildren, CSSProperties } from 'vue'

const spaceSize = {
  small: 8,
  middle: 16,
  large: 24
}

export default {
  name: 'SSpace',
  props: {
    size: {
      type: [String, Number, Array],
      default: 'small'
    },
    wrap: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      validator(value) {
        return ['inline-flex', 'flex'].includes(value)
      },
      default: 'inline-flex'
    },
    direction: {
      type: String,
      validator: value => {
        return ['horizontal', 'vertical'].includes(value)
      },
      default: 'horizontal'
    },
    align: {
      type: String,
      validator: value => {
        return ['start', 'end', 'center', 'baseline', 'stretch'].includes(value)
      }
    }
  },
  setup(props, { slots }) {
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

      return () =>
        h(
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
