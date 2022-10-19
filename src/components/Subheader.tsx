import React from 'react'

type SubheaderProps = {
    children:React.ReactNode
}
export const Subheader = (props: SubheaderProps) => {
  return (
    <div>
        <h2>{props.children}</h2>
    </div>
  )
}
