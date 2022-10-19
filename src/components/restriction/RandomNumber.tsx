
import React from 'react'

type RandomNumberType = {
    value: number 
}

type PositiveNumber = RandomNumberType & {
    isPositive: boolean,
    isNegative?: never,
    isZero?: never
}

type NegatveNumber = RandomNumberType & {
    isNegative: boolean,
    isPositive?: never,
    isZero? : never
}

type Zero = RandomNumberType & {
    isZero: boolean,
    isPositive?: never,
    isNegative? : never
}

type RandomNumberProps = PositiveNumber | NegatveNumber | Zero

 

export const RandomNumber = ({value, isPositive,isNegative,isZero}:RandomNumberProps) => {
  return (
    <div >
        {value} {isPositive && 'positive'} {isNegative && 'negative'}{' '}
        {isZero && 'zero'}
    </div>
  )
}
