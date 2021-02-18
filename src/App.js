import logo from './logo.svg'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './theme/global'
import { Footer, Header, Layout, Main } from './components'

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      <Layout>
        <Header />
        <Main>Stuff</Main>
        <Footer />
      </Layout>
    </ThemeProvider>
  )
}

export default App
