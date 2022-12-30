import React, { ReactNode } from 'react';
import style from "./styles.css"

type Props = {
   element: ReactNode
}

const CustomGridItemBig = ({ element }: Props) => {
  return (
    <div className={style['grid__itemBig']}>
      {element}
    </div>
   )   
}

export default CustomGridItemBig
