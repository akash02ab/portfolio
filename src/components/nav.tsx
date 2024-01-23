import Link from "next/link";
import Logo from "../../public/logo.svg";
import {
  linkStyle,
  listStyle,
  navLinkStyle,
  navListWrapper,
  navStyle,
  resumeButtonStyle
} from "./styles/nav.style";

export default function Nav() {
  const navlinks = [
    {
      name: 'About',
      url: '/#about'
    }, 
    {
      name: 'Experience',
      url: '/#jobs'
    },
    {
      name: 'Work',
      url: '/#projects'
    },
    {
      name: 'Contact',
      url: '/#contact'
    }
  ];

  return (
    <div className={navStyle}>
      <Link href="/">
        <Logo
          className="fill-green cursor-pointer"
          width="60"
          height="40"
        />
      </Link>
      <div className={navListWrapper}>
        <ol className={navLinkStyle}>
          {navlinks.map(({name, url}, index) => {
            return (
              <li key={index} className={listStyle}>
                <Link href={url} className={linkStyle}>{name}</Link>
              </li>
            )
          })}
        </ol>
        <button className={resumeButtonStyle}>Resume</button>
      </div>
    </div>
  )
}