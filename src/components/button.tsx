import { MouseEventHandler, ReactNode } from "react";
import { buttonStyle } from "./styles/button.style";

interface Props {
  children?: ReactNode
  onClick?: MouseEventHandler
  px?: String
  py?: String
};

export default function Button({ children, onClick, px="3", py="1.5" }: Props) {
  const customStyle = buttonStyle + `
    px-${px} 
    py-${py}
  `;
 
  return (
    <button onClick={onClick} className={customStyle}>{children}</button>
  )
}