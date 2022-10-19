
import React, {RefObject, useEffect, useRef} from 'react'


export const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!)
    // const inputRef = useRef(null!)

    useEffect(() => {
        inputRef.current.focus()
    },[])
  return (
    <div>
        <input type="text" ref={inputRef} ></input>
    </div>
  )
}
// import React from 'react'

// export const DomRef = () => {
//   return (
//     <div>DomRef</div>
//   )
// }

