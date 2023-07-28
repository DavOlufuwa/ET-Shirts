import { ShirtType } from "@/contexts/ShirtProvider"
import { ReducerActionType, ReducerAction } from "@/contexts/CartProvider"
import { ReactElement } from "react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"


type PropsType = {
  shirt: ShirtType,
  dispatch: React.Dispatch<ReducerAction>,
  REDUCER_ACTIONS: ReducerActionType,
}

const ShirtCard = ({ shirt, dispatch, REDUCER_ACTIONS }: PropsType): ReactElement => {
  
  const { id, name, image, description, price, discount } = shirt
  
  const onAddToCart = () => dispatch({ type: REDUCER_ACTIONS.ADD_TO_CART, payload: {...shirt, quantity: 1}}) 
  
  return (
    <Card>
      <CardContent>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{price}</p>
        <Button onClick={onAddToCart}>Add to Cart</Button>
      </CardContent>
    </Card>
  )
}

export default ShirtCard