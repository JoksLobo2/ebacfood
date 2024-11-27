import Menu from '../Menu'
import Food from '../../Models/Food'
import { FoodList } from './styles'

type Props = {
  title: string
  foods: Food[]
}

const MenuList = ({ foods }: Props) => (
  <div className="container">
    <FoodList>
      {foods.map((food) => (
        <Menu
          key={food.id}
          title={food.title}
          description={food.description}
          image={food.image}
        />
      ))}
    </FoodList>
  </div>
)

export default MenuList
