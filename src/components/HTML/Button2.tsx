import React from 'react'

type ButtonProps = {
    variant: 'primary' | 'secondary'
} & React.ComponentProps<'button'>

export const Button2 = ({variant, children, ...rest} : ButtonProps) => {
  return (
    <div>
        <button className={`class-with-${variant}`} {...rest} >
          {children}
        </button>
    </div>
  )
}
