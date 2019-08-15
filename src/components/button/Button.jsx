import React from 'react'
import Types from 'prop-types'

import { Default, Outline, Text } from './style'

const variants = {
  default: Default,
  outline: Outline,
  text: Text
}

function Button({ variant, ...props }) {
  const Variant = variants[variant]
  return <Variant {...props} />
}

Button.propTypes = {
  variant: Types.oneOf(['default', 'outline', 'text'])
}

Button.defaultProps = {
  variant: 'default'
}

export default Button
