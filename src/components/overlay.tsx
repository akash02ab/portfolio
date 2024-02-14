export default function Overlay() {
  const style = `
    fixed
    top-0
    left-0
    w-screen
    h-screen
    bg-gradient-to-r
    from-green-tint
    to-green
    backdrop-blur-sm
    z-[8]
  `;

  return (
    <div className={style}></div>
  )
}