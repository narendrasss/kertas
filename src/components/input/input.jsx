import React from 'react'
import Types from 'prop-types'

import { Title } from './variants'

const variants = {
  title: Title
}

function Input({ variant, ...props }) {
  const Variant = variants[variant]
  return <Variant {...props} />
}

Input.propTypes = {
  variant: Types.oneOf(['title'])
}

Input.defaultProps = {
  variant: 'title'
}

export default Input
