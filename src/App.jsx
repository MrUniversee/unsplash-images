import Gallery from './Gallery'
import SearchForm from './SearchForm'
import ThemeToggle from './ThemeToggle'
import { useGlobalContext } from './context'
const App = () => {
  return (
    <>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </>
  )
}
export default App
