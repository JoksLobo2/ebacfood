import { useState } from 'react'
import { FoodList, Modal, ModalContent, ModalImg } from './styles'

import { Food } from '../../pages/Restaurante'

import pizza from '../../assets/images/pizza.png'
import close from '../../assets/images/close 1.png'
import MenuL from '../MenuList'

type Props = {
  title: string
  foods: Food[]
}

const Menu = ({ foods }: Props) => {
  const [modalEstaAberta, setModalEstaAberta] = useState(false)

  return (
    <>
      <div className="container">
        <FoodList>
          {foods.map((food) => (
            <MenuL
              key={food.id}
              title={food.titulo}
              description={food.descricao}
              image={food.capa}
            />
          ))}
        </FoodList>
      </div>
      <Modal className={modalEstaAberta ? 'visible' : ''}>
        <ModalContent className="container">
          <div>
            <ModalImg src={pizza} alt="" />
            <div>
              <div>
                <h2>Pizza Marguerita</h2>
                <img
                  src={close}
                  alt=""
                  onClick={() => setModalEstaAberta(false)}
                />
              </div>
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. Ela é
                feita com uma base de massa fina e crocante, coberta com molho
                de tomate fresco, queijo mussarela de alta qualidade, manjericão
                fresco e azeite de oliva extra-virgem. A combinação de sabores é
                perfeita, com o molho de tomate suculento e ligeiramente ácido,
                o queijo derretido e cremoso e as folhas de manjericão frescas,
                que adicionam um toque de sabor herbáceo. É uma pizza simples,
                mas deliciosa, que agrada a todos os paladares e é uma ótima
                opção para qualquer ocasião.
              </p>
              <p>Serve: de 2 a 3 pessoas</p>
              <button type="button" onClick={() => setModalEstaAberta(true)}>
                Adcionar ao carrinho - R$60,90
              </button>
            </div>
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

export default Menu
