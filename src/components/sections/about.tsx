import Image from "next/image";
import HyperLink from "../hyperlink";
import Title from "../title";
import { aboutWrapper, articleStyle, figureStyle, highlightedStyle, imageStyle, listStyle, listWrapper, textStyle } from "../styles/about.style";

export default function About() {
  const techStack = ['JavaScript (ES6+)', 'React', 'Next.js', 'TypeScript', 'TailwindCSS', 'MaterialUI', 'Firebase', 'Git'];

  return (
    <section id="about" className="max-w-5xl">
      <Title index="01">About Me</Title>
      <div className={aboutWrapper}>
        <article className={articleStyle}>
          <p className={textStyle}>
            Hello! My name is Akash &amp; I enjoy creating things that live on the internet.
            My interest in web development started back in 2017 when I decided to try creating a photo gallery app using HTML & CSS.
            I&apos;m proud to have successfully conquered a challenging full-stack MERN course through an online Bootcamp at {' '}
            <HyperLink
              href="https://mclarencollege.com/certificate/3427B175/"
              target="_blank"
              rel="noreferrer"
            >McLaren College</HyperLink> in the year 2022.
          </p>
          <p className={textStyle}>
            Fast forward to today, I&apos;ve the privilege to engage in remote work, collaborating with clients worldwide both independently and as part of a team.
            My primary focus is on constructing accessible, inclusive products and digital experience. I operate as an independent freelancer on {' '}
            <HyperLink
              href="https://www.upwork.com/freelancers/~01a88d2143d5968304"
              target="_blank"
              rel="noreferrer"
            >Upwork</HyperLink>, collaborating with a diverse range of clients.
          </p>
          <p className={textStyle}>
            Additionally, I have earned the <span className={highlightedStyle}>Top Rated Plus</span> badge on Upwork and maintain a <span className={highlightedStyle}>100% Success Rate</span>,
            receiving flawless reviews on all the contracts I have successfully completed on the platform.
          </p>
          <p className={textStyle}>Here are a few technologies I’ve been working with recently:</p>
          <ul className={listWrapper}> 
            {techStack.map((tech, index) => <li key={index} className={listStyle}>{tech}</li>)}
          </ul>
        </article>
        <figure className={figureStyle}>
          <Image
            src="/me.jpg"
            alt="profile-pic"
            width={256}
            height={256}
            className={imageStyle}
          />
        </figure>
      </div>
    </section>
  )
}