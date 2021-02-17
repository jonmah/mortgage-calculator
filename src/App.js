import logo from './logo.svg'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './theme/global'
import { Footer, Header, Layout } from './components'

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      <Layout>
        <Header />
        middle
        <Footer />
      </Layout>
    </ThemeProvider>
  )
}

export default App
