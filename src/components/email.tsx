import { emailStyle, emailWrapper } from "./styles/email.style";

export default function Email() {
  const email = "visit my Upwork profile";

  return (
    <div className={emailWrapper}>
      <a href="https://www.upwork.com/freelancers/~01a88d2143d5968304" className={emailStyle}>{email}</a>
    </div>
  )
}