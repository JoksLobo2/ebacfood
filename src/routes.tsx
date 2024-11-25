import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Restaurante from './pages/Restaurante'
import Header from './components/header'
import RestauranteHeader from './components/HeaderTratoria'
import BannerTratoria from './components/BannerTratoria'

const Rotas = () => (
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
      path="/restaurante"
      element={
        <>
          <RestauranteHeader />
          <BannerTratoria />
          <Restaurante />
        </>
      }
    />
  </Routes>
)

export default Rotas
