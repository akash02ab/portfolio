import Link from "next/link";
import Github from "../../public/github.svg";
import Codepen from "../../public/codepen.svg";
import FrontendMentor from "../../public/frontendmentor.svg";
import Leetcode from "../../public/leetcode.svg";
import { socialStyle, socialWrapper } from "./styles/social.style";

export default function Social() {
  return (
    <div className={socialWrapper}>
      <Link href="https://github.com/akash02ab" target="_blank">
        <Github
          width="20"
          height="26"
          className={socialStyle}
        />
      </Link>
      <Link href="https://codepen.io/akash02ab" target="_blank">
        <Codepen
          width="20"
          height="26"
          className={socialStyle}
        />
      </Link>
      <Link href="https://www.frontendmentor.io/profile/akash02ab" target="_blank">
        <FrontendMentor
          width="20"
          height="26"
          className={socialStyle}
        />
      </Link>
      <Link href="https://leetcode.com/akash02ab/" target="_blank">
        <Leetcode
          width="20"
          height="26"
          className={socialStyle}
        />
      </Link>
    </div>
  )
}