import React from 'react'
type CSSComponentProps = {
    styles : React.CSSProperties
}

export const CSSComponent = (props: CSSComponentProps) => {
  return (
    <div style={props.styles} >Text here</div>
  )
}
