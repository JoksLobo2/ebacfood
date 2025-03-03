import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Card, CardImg, CardTitle, CardDescription, CardButton } from './styles'
import { Modal, ModalContent, ModalImg } from '../../components/Menu/styles'

import close from '../../assets/images/close 1.png'
import { Prato } from '../../pages/Restaurante'
import { add, open } from '../../store/reducers/cart'

export const formataPreco = (preco: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const MenuL = ({ food }: { food: Prato }) => {
  const dispatch = useDispatch()

  const [modalEstaAberta, setModalEstaAberta] = useState(false)
  const [selectedFood, setSelectedFood] = useState<Prato | null>(null)

  const handleOpenModal = (food: Prato) => {
    setSelectedFood(food)
    setModalEstaAberta(true)
  }

  const addToCart = () => {
    if (selectedFood) {
      dispatch(add(selectedFood))
      setModalEstaAberta(false)
    } else {
      console.error('selectedFood is undefined or null')
    }
    dispatch(open())
  }

  const getDescription = (description: string) => {
    if (description.length > 233) {
      return description.slice(0, 150) + '...'
    }
    return description
  }

  return (
    <>
      <Card key={food.id}>
        <CardImg src={food.foto} alt={food.nome} />
        <CardTitle>{food.nome}</CardTitle>
        <CardDescription>{getDescription(food.descricao)}</CardDescription>
        <CardButton onClick={() => handleOpenModal(food)}>
          Adicionar ao carrinho
        </CardButton>
      </Card>
      <Modal className={modalEstaAberta ? 'visible' : ''}>
        <ModalContent className="container">
          <div>
            {selectedFood && (
              <>
                <ModalImg src={selectedFood.foto} alt={selectedFood.nome} />
                <div>
                  <div>
                    <h2>{selectedFood.nome}</h2>
                    <img
                      src={close}
                      alt="Fechar"
                      onClick={() => setModalEstaAberta(false)}
                    />
                  </div>
                  <p>{selectedFood.descricao}</p>
                  <p>{selectedFood.porcao}</p>
                  <button type="button" onClick={addToCart}>
                    Adicionar ao carrinho - {formataPreco(selectedFood.preco)}
                  </button>
                </div>
              </>
            )}
          </div>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => setModalEstaAberta(false)}
        ></div>
      </Modal>
    </>
  )
}

export default MenuL
