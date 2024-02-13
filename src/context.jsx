import { useContext, createContext, useState, useEffect } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme:dark)'
    ).matches
    const storedDarkMode = localStorage.getItem('darkTheme')
    return storedDarkMode === 'null'
      ? prefersDarkMode
      : storedDarkMode === 'true'
  }
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode())
  const [searchQuery, setSearchQuery] = useState('random')
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    localStorage.setItem('darkTheme', newDarkTheme)
  }
  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme)
  }, [isDarkTheme])
  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, setSearchQuery, searchQuery }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
