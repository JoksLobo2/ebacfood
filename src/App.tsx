import Header from './components/header'
import { GlobalCss, Container } from './styles'

import Restaurantes from './components/restaurantes'

function App() {
  return (
    <Container>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <div>
        <Restaurantes />
      </div>
    </Container>
  )
}

export default App
