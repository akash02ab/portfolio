export default function Overlay() {
  const style = `
    fixed
    top-16
    md:top-24
    left-0
    w-screen
    h-screen
    backdrop-blur-sm
    z-[2]
  `;

  return (
    <div className={style}></div>
  )
}