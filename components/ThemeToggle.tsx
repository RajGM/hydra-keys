import { useEffect, useState } from 'react'
import Image from 'next/image'

const ThemeToggle = () => {
  const [dark, setDark] = useState(false)

  const setTheme = (isDark: boolean) => {
    if (isDark) {
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
      document.documentElement.setAttribute('data-theme', 'light')
    }

    setDark(isDark)
  }

  useEffect(() => {
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    setTheme(isDark)
  }, [])

  const toggleTheme = () => {
    setTheme(!dark)
  }

  return (
    <div className="inline-grid items-center">
      <div
        className="flex flex-row justify-between col-start-1 row-start-1 px-2 cursor-pointer"
        onClick={toggleTheme}
      >
        <Image
          src="/Sun.png"
          layout="fixed"
          width="20px"
          height="20px"
          className={`opacity-70 ${dark ? 'invisible' : ''}`}
        />
        <Image
          src="/Moon.png"
          layout="fixed"
          width="20px"
          height="20px"
          className={!dark ? 'invisible' : ''}
        />
      </div>
      <input
        type="checkbox"
        className="toggle toggle-lg bg-clip-padding col-start-1 row-start-1 border-[#5F5AB4] bg-white checked:shadow-[var(--handleoffset)_0_0_4px_#9996CD_inset,_0_0_0_4px_#9996CD_inset] dark:border-[#31304A] dark:shadow-[calc(var(--handleoffset)_*_-1)_0_0_4px_#18163E_inset,_0_0_0_4px_#18163E_inset]"
        checked={!dark}
        onChange={toggleTheme}
      />
    </div>
  )
}

export default ThemeToggle
