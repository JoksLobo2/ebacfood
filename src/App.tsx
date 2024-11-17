import Header from './components/header'
import { GlobalCss } from './styles'

import RestaurantesList from './components/RestaurantesList'

function App() {
  return (
    <>
      <GlobalCss />
      <div>
        <Header />
      </div>
      <div>
        <RestaurantesList title="" />
      </div>
    </>
  )
}

export default App
