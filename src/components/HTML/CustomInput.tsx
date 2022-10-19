import React from 'react'

type CustomInputProps = React.ComponentProps<'input'>

export const CustomInput = (props : CustomInputProps) => {
  return (
    <div>
      <input {...props} ></input>
    </div>
  )
}
