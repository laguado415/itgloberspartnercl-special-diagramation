import React, { ReactNode } from "react";
import customGridSchema from "../../schemas/custom-grid-shema";
import CustomGridItemBig from './CustomGridItemBig';
import CustomGridItemSmall from "./CustomGridItemSmall";
import style from "./styles.css"

type Props = {
  gridType: number
  children: Array<ReactNode>
}

const SpecialDiagramation = ({ gridType=1, children }: Props) => {
   return (
     <div className={`${style.grid}  ${style[`grid__${gridType}`]}`}>
       <CustomGridItemBig element={children[0]}/>
       <CustomGridItemSmall elementOne={children[1]} elementTwo={children[2]} />
       <CustomGridItemSmall elementOne={children[3]} elementTwo={children[4]} />
     </div>
   )
}

SpecialDiagramation.schema = customGridSchema

export default SpecialDiagramation
