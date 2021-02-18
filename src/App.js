import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './theme/global'
import { Footer, Header, Layout, Main } from './components'
import SavingsCalculator from './SavingsCalculator'

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      <Header />
      <Layout>
        <Main>
          <SavingsCalculator />
        </Main>
        <Footer />
      </Layout>
    </ThemeProvider>
  )
}

export default App
