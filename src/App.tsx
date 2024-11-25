import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Footer from './components/Footer'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div>
        <Rotas />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
