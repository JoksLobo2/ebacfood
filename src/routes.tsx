import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Restaurante from './pages/Restaurante'
import Header from './components/header'
import RestauranteHeader from './components/HeaderTratoria'
import Cart from './components/Cart'
import Card from './components/Card'
import Payment from './components/Payment'
import Confirmation from './components/Confirmation'
import { parseToBRL } from '../src/utils'
import { useSelector } from 'react-redux'
import { RootReducer } from './store'

const Rotas = () => {
  const items = useSelector((state: RootReducer) => state.cart.items)

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

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
            <Payment valorTotal={parseToBRL(getTotalPrice())} />
            <Confirmation />
          </>
        }
      />
    </Routes>
  )
}
export default Rotas
