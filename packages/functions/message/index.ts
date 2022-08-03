import Message from './src'
import { withInstallFunction } from '@shuo-ui/utils'

const SMessage = withInstallFunction(Message, '$message')

export { SMessage }
