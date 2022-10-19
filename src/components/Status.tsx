
import React from 'react'

type StatusProps = {
    // status: string
    status : 'loading' | 'success' | 'error'
    // earlier any string value could have been passed and it will
    // not give an error, but when using unions, it can only take
    // specified values
}

export const Status = (props: StatusProps) => {
    let message;
    if(props.status === 'loading'){
        message = "Loading ..."
    }else if(props.status === 'success'){
        message = "Data fetched successfully"
    }else if(props.status === 'error'){
        message = "Error fetching data"
    }

  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  )
}
