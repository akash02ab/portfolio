"use client"
import Nav from "@/components/nav";
import About from "@/components/sections/about";
import Jobs from "@/components/sections/jobs";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import HyperLink from "@/components/hyperlink";

export default function Home() {
  const containerStyle = `
    dark:bg-navy
    2xl:px-12
    lg:px-10
    xxs:px-6
    min-h-screen
  `;

  const sectionWrapper = `
    xxs:px-0
    xs:px-6
    sm:px-10
    md:px-24
    my-16
    flex
    flex-col
    items-center
    gap-36
  `;

  const footerStyle = `
    text-light-slate
    text-sm
    text-center
    py-8
  `;
  
  return (
    <main className={containerStyle}>
      <Nav />
      <div className={sectionWrapper}>
        <Hero />
        <About />
        <Jobs />
        <Projects />
        <Contact />
      </div>
      <footer className={footerStyle}>
        <p>Build with Next.js, Tailwind &amp; Typescript</p>
        <HyperLink
          href="https://github.com/akash02ab/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          View repository @GitHub
        </HyperLink>
      </footer>
    </main>
  );
}
