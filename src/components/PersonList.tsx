
import React from 'react'

type PersonListProps = {
    names : {
        first: string,
        last: string
    }[]     // An array of object type
}

export const PersonList = (props:PersonListProps) => {
  return (
    <div>
        <h2>John</h2>
        <h2>Jack</h2>
        <h2>Peter</h2>

        <ul>
            {props.names.map((name) => (
                <div key={name.first}>
                <h2>{name.first}</h2>
                <h2>{name.last}</h2>
                </div>
            ))}
        </ul>
    </div>
  )
}
