import React, { ReactNode } from 'react';
import style from "./styles.css"

type Props = {
   elementOne: ReactNode,
   elementTwo: ReactNode
}

const CustomGridItemSmall = ({ elementOne, elementTwo }:Props) => {
  return (
   <div className={style["grid__itemSmall"]}>
    <div className={style["itemSmall__item"]} >
     {elementOne}
    </div>
    <div className={style["itemSmall__item"]} >
     {elementTwo}
    </div>
   </div>
  )
}

export default CustomGridItemSmall
