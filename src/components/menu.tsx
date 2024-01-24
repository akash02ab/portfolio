import { MouseEventHandler } from "react";
import {
  bottomCloseStyle,
  bottomOpenStyle,
  menuStyle,
  menuWrapper,
  middleCloseStyle,
  middleOpenStyle,
  topCloseStyle,
  topOpenStyle
} from "./styles/menu.style";

interface Props {
  isOpen: boolean
  onClick?: MouseEventHandler
};

export default function Menu({ isOpen, onClick }: Props) {
  const topStyle = menuStyle + (isOpen ? topOpenStyle : topCloseStyle);
  const middleStyle = menuStyle + (isOpen ? middleOpenStyle : middleCloseStyle);
  const bottomStyle = menuStyle + (isOpen ? bottomOpenStyle : bottomCloseStyle);

  return (
    <div className={menuWrapper} onClick={onClick}>
      <span className={topStyle}/>
      <span className={middleStyle}/>
      <span className={bottomStyle}/>
    </div>
  )
}