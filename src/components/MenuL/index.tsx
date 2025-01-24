import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { Card, CardImg, CardTitle, CardDescription, CardButton } from './styles'
import { Modal, ModalContent, ModalImg } from '../../components/Menu/styles'

import close from '../../assets/images/close 1.png'
import { Restaurante, Prato } from '../../pages/Restaurante'
import { add, open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

type Props = {
  title: string
  description: string
  image: string
  id: number
  preco: number // Ajustado para número
  porcao: string
  foods?: Restaurante[]
}

export const formataPreco = (preco: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const MenuL = ({ title, description, image, porcao, preco, foods }: Props) => {
  const dispatch = useDispatch()

  const { id } = useParams<{ id: string }>()

  const [cardapio, setCardapio] = useState<Prato[]>([])
  const [modalEstaAberta, setModalEstaAberta] = useState(false)
  const [selectedFood, setSelectedFood] = useState<Prato | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => setCardapio(data.cardapio))
      .catch((error) => console.error('Erro ao buscar cardápio:', error))
  }, [id])

  const getDescription = (description: string) => {
    if (description.length > 233) {
      return description.slice(0, 150) + '...'
    }
    return description
  }

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

  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
    <>
      <div className="container">
        <Card>
          <CardImg src={image} alt="foto de uma pizza" />
          <CardTitle>{title}</CardTitle>
          <CardDescription>{getDescription(description)}</CardDescription>
          <CardButton
            onClick={() =>
              handleOpenModal({
                nome: title,
                descricao: description,
                foto: image,
                id: Number(id),
                preco: preco,
                porcao: porcao
              })
            }
          >
            Adicionar ao carrinho
          </CardButton>
        </Card>
      </div>
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
