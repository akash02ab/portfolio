import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import useClickAway from "@/hooks/useClickAway";
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
import Overlay from "./overlay";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const wrapperRef = useRef(null);
  
  const menuClickHandler = () => setIsMenuOpen((prev) => !prev);
  const buttonClickHandler = () => {
    isMenuOpen && menuClickHandler();
  }

  useClickAway(wrapperRef, menuClickHandler)

  const onWindowResize = (event: Event) => {
    const target = event.currentTarget as Window
    const windowSize = target.innerWidth;
    if (windowSize > 768) setIsMenuOpen(false);
  }

  useEffect(() => {
    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
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
      <div ref={wrapperRef} className={navListWrapper}>
        <div  className={navLinksStyle}>
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
      {isMenuOpen && <Overlay />}
    </div>
  )
}