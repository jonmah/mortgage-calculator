import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './theme/global'
import { Footer, Header, Layout, Main } from './components'
import MortgageCalculator from './MortgageCalculator'

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      <Header />
      <Layout>
        <Main>
          <MortgageCalculator />
        </Main>
        <Footer />
      </Layout>
    </ThemeProvider>
  )
}

export default App
