import { Comment, Fragment, Text, isVNode } from 'vue'
import type { VNode } from 'vue'

export function isFragment(node: unknown): node is VNode {
  return isVNode(node) && node.type === Fragment
}

export function isText(node: unknown): node is VNode {
  return isVNode(node) && node.type === Text
}

export function isComment(node: unknown): node is VNode {
  return isVNode(node) && node.type === Comment
}

export function isValidElementNode(node: unknown): node is VNode {
  return isVNode(node) && !isFragment(node) && !isComment(node)
}
