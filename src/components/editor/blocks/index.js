import HeadingOne from './HeadingOne'
import HeadingTwo from './HeadingTwo'
import HeadingThree from './HeadingThree'
import ListItem from './ListItem'
import OrderedList from './OrderedList'
import CodeBlock from './CodeBlock'

export const types = {
  '#': 'heading-one',
  '##': 'heading-two',
  '###': 'heading-three',
  '+': 'list-item',
  '-': 'list-item',
  '*': 'list-item',
  '>': 'blockquote',
  '```': 'code-block'
}

export const getType = char => {
  const type = types[char]
  if (!type && isOrderedList(char)) {
    return 'list-item'
  }
  return type
}

export const isOrderedList = char => /\d\./i.test(char)

export default {
  'heading-one': HeadingOne,
  'heading-two': HeadingTwo,
  'heading-three': HeadingThree,
  'list-item': ListItem,
  'ordered-list': OrderedList,
  'code-block': CodeBlock
}
