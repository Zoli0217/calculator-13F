import React from 'react'
import ThemeContextProvider, { useTheme } from './context/ThemeContextProvider'
import ThreeStateSwitch from './components/ThreeStateSwitch'

const App = () => {
  

  return (
    <ThemeContextProvider>
      <ThreeStateSwitch/>
    </ThemeContextProvider>
  )
}

export default App