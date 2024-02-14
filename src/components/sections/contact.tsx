import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Title from "../title";
import Button from "../button";
import { availStyle, contactWrapper } from "../styles/contact.style";

export default function Contact() {
  const [sectionStyle, setSectionStyle] = useState('max-w-5xl invisible');
  const { isIntersecting, ref } = useIntersectionObserver({ threshold: 0.01 });

  useEffect(() => {
    if (isIntersecting && !sectionStyle.includes('animate-appear')) {
      setSectionStyle('max-w-5xl animate-appear');
    }
  }, [isIntersecting, sectionStyle]);
  
  return (
    <section id="contact" ref={ref} className={sectionStyle}>
      <Title index="04">Get In Touch</Title>
      <div className={contactWrapper}>
        <p className={availStyle}>
          I am actively exploring new opportunities, feel free to reach me out at Upwork for any discussions or messages. I&apos;m eager to connect with you on various topics, so please feel free to reach out. I&apos;ll make sure to respond promptly and look forward to the chance of connecting with you!
        </p>
        <p className={availStyle}><span className="dark:text-pink text-blue">Note:</span> If you&apos;re from Upwork then please reach me out via Upwork Messasges as per Upwork&apos;s Terms and Service.</p>
        <Button>
          <a
            href="https://www.upwork.com/freelancers/~01a88d2143d5968304"
            target="_blank"
            rel="noreferrer">
            Say Hello
          </a>
        </Button>
      </div>
    </section>
  )
}