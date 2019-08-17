import CodeBlock from './code-block'
import HeadingOne from './heading-one'

export const types = {
  '#': 'heading-one',
  '##': 'heading-two',
  '###': 'heading-three',
  '+': 'ul-item',
  '-': 'ul-item',
  '*': 'ul-item',
  '>': 'blockquote',
  '```': 'code-block'
}

export default {
  code: CodeBlock,
  'heading-one': HeadingOne
}
