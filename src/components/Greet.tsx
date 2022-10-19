import React from 'react'
type GreetProps = {
    name: string,
    messageCount:number,
    isLoggedin: boolean
}



export const Greet = (props: GreetProps) => {
  return (
    <div>
        {props.isLoggedin ? <div><h2>Hello {props.name}</h2>
        <p>{props.messageCount}</p></div> : "Logged Out"}
        
    </div>
  )
}
