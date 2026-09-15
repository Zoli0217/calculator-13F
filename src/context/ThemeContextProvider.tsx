import { createContext, use, useContext, useState } from "react"

export type ThemeContextType = 1 | 2 | 3

type ThemeContextValue = {
  theme: ThemeContextType,
  setTheme: (theme: ThemeContextType) => void

}

const ThemeContext = createContext<ThemeContextValue | undefined>( undefined )

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeContextType>(1)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("baj van");

  return context
}

export default ThemeContextProvider