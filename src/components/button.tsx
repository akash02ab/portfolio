import { MouseEventHandler, ReactNode } from "react";
import { buttonStyle } from "./styles/button.style";

interface Props {
  children?: ReactNode
  onClick?: MouseEventHandler
};

export default function Button({children, onClick}: Props) {
  return (
    <button onClick={onClick} className={buttonStyle}>{children}</button>
  )
}