import { emailStyle, emailWrapper } from "./styles/email.style";

export default function Email() {
  const email = "akash02.ab@gmail.com";

  return (
    <div className={emailWrapper}>
      <a href={`mailto:${email}`} className={emailStyle}>{email}</a>
    </div>
  )
}