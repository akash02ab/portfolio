import { useEffect, useRef, useState } from "react";
import useClickAway from "@/hooks/useClickAway";
import useScrollDirection from "@/hooks/useScrollDirection";
import Logo from "../../public/logo.svg";
import {
  buttonWrapper,
  linkStyle,
  listStyle,
  logoStyle,
  navLinkSideBar,
  navLinkStyle,
  navLinkWrapper,
  navListWrapper,
  navScrollStyle,
  navStyle,
} from "./styles/nav.style";
import Menu from "./menu";
import Overlay from "./overlay";
import ThemeSwitcher from "./themeswitcher";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavOnScroll, setShowNavOnScroll] = useState(false);
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const scrollDirection = useScrollDirection({ initialDirection: 'down' });
  const wrapperRef = useRef(null);
  
  const menuClickHandler = () => setIsMenuOpen((prev) => !prev);

  useClickAway(wrapperRef, () => setIsMenuOpen(false));

  const onWindowResize = (event: Event) => {
    const target = event.currentTarget as Window
    const windowSize = target.innerWidth;
    if (windowSize > 768) setIsMenuOpen(false);
  }

  const handleScroll = () => {
    const isScrollOnTop = window.scrollY < 48;
    setScrolledToTop(isScrollOnTop)
  }

  useEffect(() => {
    window.addEventListener("resize", onWindowResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", onWindowResize);
      window.removeEventListener("scroll", handleScroll);

    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const showNav = scrollDirection === 'up' && !scrolledToTop;

    if (showNav !== showNavOnScroll) {
      setShowNavOnScroll(showNav);
    }
  }, [scrollDirection, scrolledToTop, showNavOnScroll]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen])
  
  const navLinksStyle = isMenuOpen ? navLinkSideBar : navLinkWrapper;
  const activeNavStyle = showNavOnScroll ? navScrollStyle : navStyle;
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
    <div className={activeNavStyle}>
      <a href="/">
        <Logo
          className={logoStyle}
          width="60"
          height="40"
        />
      </a>
      <div ref={wrapperRef} className={navListWrapper}>
        <div className={navLinksStyle}>
          <ol className={navLinkStyle}>
            {navlinks.map(({name, url}, index) => {
              return (
                <li key={index} className={listStyle}>
                  <a
                    href={url}
                    onClick={() => setIsMenuOpen(false)}
                    className={linkStyle}
                    style={{ animationDelay: `${index * 100}ms`}}
                  >{name}</a>
                </li>
              )
            })}
          </ol>
          <div className={buttonWrapper} style={{animationDelay: '600ms'}}>
            <ThemeSwitcher />
          </div>
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