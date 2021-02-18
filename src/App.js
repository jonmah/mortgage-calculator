import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './theme/global'
import { Footer, Header, Layout, Main } from './components'

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      <Header />
      <Layout>
        <Main>dfdfd</Main>
        <Footer />
      </Layout>
    </ThemeProvider>
  )
}

export default App
