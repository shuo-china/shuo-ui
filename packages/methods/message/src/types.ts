export type MessageType = 'info' | 'success' | 'warning' | 'error' | 'loading'

export type Options =
  | string
  | {
      type?: MessageType
      duration?: number
      content: string
    }

type MessageFn = (options: Options) => () => void

export type Message = {
  [key in MessageType]: MessageFn
} & MessageFn
