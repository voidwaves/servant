
import hello from './commands/hello'
import { ResolverList } from './types/common'

const commandList: ResolverList = [
    {command: 'hello', handler: hello},
]

export default commandList