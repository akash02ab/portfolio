export default function Overlay() {
  const style = `
    fixed
    top-0
    left-0
    w-screen
    h-screen
    backdrop-blur-sm
    z-[3]
  `;

  return (
    <div className={style}></div>
  )
}