import Button from "../button";
import HyperLink from "../hyperlink";
import {
  aboutStyle,
  greetingStyle,
  motoStyle,
  nameStyle
} from "../styles/hero.style";

export default function Hero() {
  const greetings = <h6 className={greetingStyle}>Hi, my name is</h6>;
  const name = <h1 className={nameStyle}>Akash Banchhor.</h1>;
  const moto = <h1 className={motoStyle}>I build things for the web.</h1>;
  const about = <p className={aboutStyle}>I&apos;m a frontend developer specializing in building exceptional digital experience. Currently, I&apos;m focused to work on a variety of project as an independent freelancer at {' '}
    <HyperLink
      href="https://www.upwork.com/"
      target="_blank"
      rel="noreferrer"
    >
      Upwork
    </HyperLink>.
  </p>;
  const profileLink = <Button px="5" py="3">
    <a
      href="https://www.upwork.com/freelancers/~01a88d2143d5968304"
      target="_blank"
      rel="noreferrer">
      Check out my profile!
    </a>
  </Button>;
  
  const items = [greetings, name, moto, about, profileLink];

  return (
    <section id="hero" className="max-w-5xl">
      {
        items.map((item, index) => <div key={index}>{item}</div>)
      }
    </section>
  )
}