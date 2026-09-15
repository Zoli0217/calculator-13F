import React from 'react'
import ThemeContextProvider, { useTheme, type ThemeContextType } from '../context/ThemeContextProvider'

const ThreeStateSwitch = () => {
  const {theme, setTheme} = useTheme()

  const nextTheme: ThemeContextType = theme === 3 ? 1 : (theme + 1) as ThemeContextType
  return (
    <div className={`theme${nextTheme}`}>
      <h1>asdsd</h1>
      <div onClick={() => setTheme(nextTheme)} className={`btn case${nextTheme}`}><div className='dot'></div></div>
    </div>
  )
}

export default ThreeStateSwitch