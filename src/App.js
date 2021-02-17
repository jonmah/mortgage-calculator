import logo from './logo.svg'
import './App.css'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './theme/global'
import { Layout } from './components'

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  )
}

export default App
