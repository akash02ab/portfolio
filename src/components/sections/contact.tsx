import Button from "../button";
import { availStyle, contactWrapper } from "../styles/contact.style";
import Title from "../title";

export default function Contact() {
  const email = "akash02.ab@gmail.com";
  
  return (
    <section id="contact" className="max-w-5xl">
      <Title index="04">Get In Touch</Title>
      <div className={contactWrapper}>
        <p className={availStyle}>
          I am actively exploring new opportunities, and my inbox is open for any discussions or messages. I&apos;m eager to connect with you on various topics, so please feel free to reach out. I&apos;ll make sure to respond promptly and look forward to the chance of connecting with you!
        </p>
        <Button>
          <a href={`mailto:${email}`}>
            Say Hello
          </a>
        </Button>
      </div>
    </section>
  )
}