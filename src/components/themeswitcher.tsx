import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Switch from "../../public/darkmode.svg";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  const style = `
    w-8
    h-8
    dark:text-green
    text-coral-red
    cursor-pointer
    hover:scale-110
  `;

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <Switch onClick={toggleTheme} className={style} />
  )
};