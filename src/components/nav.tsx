import Link from "next/link";
import { useState } from "react";
import Logo from "../../public/logo.svg";
import {
  linkStyle,
  listStyle,
  navLinkSideBar,
  navLinkStyle,
  navLinkWrapper,
  navListWrapper,
  navStyle,
} from "./styles/nav.style";
import Button from "./button";
import Menu from "./menu";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const menuClickHandler = () => setIsMenuOpen((prev) => !prev);
  const buttonClickHandler = () => {
    isMenuOpen && menuClickHandler();
  }
  
  const navLinksStyle = isMenuOpen ? navLinkSideBar : navLinkWrapper;
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
        <div className={navLinksStyle}>
          <ol className={navLinkStyle}>
            {navlinks.map(({name, url}, index) => {
              return (
                <li key={index} className={listStyle}>
                  <Link
                    href={url}
                    onClick={menuClickHandler}
                    className={linkStyle}
                  >{name}</Link>
                </li>
              )
            })}
          </ol>
          <Button onClick={buttonClickHandler}>Resume</Button>
        </div>
        <Menu
          isOpen={isMenuOpen}
          onClick={menuClickHandler}
        />
      </div>
    </div>
  )
}