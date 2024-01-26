"use client"
import Hero from "@/components/sections/hero";
import Nav from "../components/nav";

export default function Home() {
  const containerStyle = `
    dark:bg-navy
    2xl:px-12
    lg:px-10
    xxs:px-6
    h-dvh
  `;

  const sectionWrapper = `
    xxs:px-0
    xs:px-6
    sm:px-10
    md:px-24
  `;
  
  return (
    <main className={containerStyle}>
      <Nav />
      <div className={sectionWrapper}>
        <Hero />
      </div>
    </main>
  );
}
