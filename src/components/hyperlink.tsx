import { ReactNode } from "react"
import { hyperLinkStyle } from "./styles/hyperlink.style"

interface Props {
  children?: ReactNode
  href: string
  target: string
  rel: string
}

export default function HyperLink({ children, href, target, rel }: Props) {
  return (
    <a href={href} target={target} rel={rel} className={hyperLinkStyle}>{children}</a>
  )
}