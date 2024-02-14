export default function Overlay() {
  const style = `
    fixed
    top-0
    left-0
    w-screen
    h-screen
    bg-gradient-to-r
    dark:from-green-tint
    dark:to-green
    from-coral-red-tint
    to-salmon-red
    backdrop-blur-sm
    z-[8]
  `;

  return (
    <div className={style}></div>
  )
}