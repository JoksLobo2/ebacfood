import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Restaurante from './pages/Restaurante'
import Header from './components/header'
import RestauranteHeader from './components/HeaderTratoria'
import Cart from './components/Cart'
import Card from './components/Card'

const Rotas = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />
      <Route
        path="/restaurante/:id"
        element={
          <>
            <RestauranteHeader />
            <Cart />
            <Restaurante />
            <Card />
          </>
        }
      />
      <Route path="/checkout" element={<Card />} />
    </Routes>
  )
}
export default Rotas
