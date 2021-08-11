import React from 'react'

import { InputContainer } from './styled'

export default function Input({
  type,
  label,
  error,
  onChange,
  value,
}) {
  return (
    <InputContainer error={error}>
      <input
        type={type}
        onChange={onChange}
        value={value}
        required
      />
      <span>{label}</span>
    </InputContainer>
  )
}
