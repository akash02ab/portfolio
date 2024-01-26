import { ReactNode } from "react";
import {
  decorationStyle,
  indexStyle,
  titleStyle,
  titleWrapper
} from "./styles/title.style";

interface Props {
  children: ReactNode
  index: string
};

export default function Title({ children, index }: Props) {
  return (
    <div className={titleWrapper}>
      <span className={indexStyle}>{index}.</span>
      <h2 className={titleStyle}>{children}</h2>
      <span className={decorationStyle}></span>
    </div>
  )
}