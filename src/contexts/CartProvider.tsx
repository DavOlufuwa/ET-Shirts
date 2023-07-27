import { useMemo, useReducer, createContext, ReactElement } from "react"


export type CartItemType = {
  id: number
  name: string
  image: string
  description: string
  price: number
  discount: number
  quantity: number
}

type CartStateType = {
  cart: CartItemType[]
}

const initialCartState : CartStateType = { cart : []}

// creating a cart action type because we will use reducers
const REDUCER_ACTION_TYPE = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CHANGE_QUANTITY: "CHANGE_QUANTITY",
  SUBMIT: "SUBMIT",
} 

export type ReducerActionType = typeof REDUCER_ACTION_TYPE 

export type ReducerAction = {
  type: ReducerActionType,
  payload?: CartItemType
}

// Creating the main reducer for the cart and its actions
const reducer = (state: CartStateType, action: ReducerAction): CartStateType | undefined => {
  switch(action.type as any){
    case REDUCER_ACTION_TYPE.ADD_TO_CART: {
       
      const filteredCart: CartItemType[] = state.cart.filter(shirt => shirt.id !== action?.payload?.id)
      
      const existingShirt = state.cart.find(shirt => shirt.id === action.payload?.id)

      if(existingShirt){
        return {
          ...state,
          cart: [...filteredCart,
            { ...existingShirt, quantity: existingShirt.quantity + 1}]
          }
        }

      return {
        ...state,
        cart: [...filteredCart, {...action?.payload!, quantity: 1}]
      }
    }
    case REDUCER_ACTION_TYPE.REMOVE_FROM_CART: {

      const filteredCart: CartItemType[] = state.cart.filter(shirt => shirt.id !== action?.payload?.id)

      return {
        ...state,
        cart: [...filteredCart]
      }
    }

    case REDUCER_ACTION_TYPE.CHANGE_QUANTITY: {
      
      const {id, quantity} = action?.payload!

      const filteredCart: CartItemType[] = state.cart.filter(shirt => shirt.id !== id)

      const existingShirt: CartItemType | undefined = state.cart.find(shirt => shirt.id === action.payload?.id)

      const shirtToUpdate: CartItemType = {
        ...existingShirt!,
        quantity: quantity
      }
      
      if(existingShirt){
        return {
          ...state,
          cart: [...filteredCart , shirtToUpdate]
          }
        }
      }

    case REDUCER_ACTION_TYPE.SUBMIT: {
      return {...state, cart: []}
    }
    default:
      throw new Error('That action is unidentified')
    }
  }

// creating the context for the Cart

const useCartContext = (initialCartState: CartStateType) => {
  
  const [state, dispatch] = useReducer(reducer, initialCartState)
  
  // memoizing the reducer actions
  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_TYPE
  }, [])

  // getting the total quantity  
  const totalItems = state.cart.reduce((previousValue: number, cartItem: CartItemType): number =>{
    return previousValue + cartItem.quantity
  } , 0)

  // getting the total price
  const totalPriceAndCurrency = new Intl.NumberFormat('en-NG', {style: 'currency', currency: 'NGN'}).format(
    state.cart.reduce((previousValue: number, cartItem: CartItemType): number =>{
     return previousValue + cartItem.quantity * cartItem.price
   } , 0)
  ) 

  // Sorting the cart 
  const cart = state.cart.sort((a:CartItemType, b:CartItemType)=> {
    return a.id - b.id
  })

  return {
    dispatch, REDUCER_ACTIONS, totalItems, totalPriceAndCurrency, cart
  }
}

export type useCartContextType = ReturnType<typeof useCartContext>

// Initialising the context
const initialCartContextState: useCartContextType = {
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  totalItems: 0,
  totalPriceAndCurrency: "",
  cart: []
}

// Exporting the Context
export const CartContext = createContext<useCartContextType>(initialCartContextState)

// Exporting the Provider
type ChildrenType = { children?: ReactElement | ReactElement[]}

export const CartProvider = ({ children}: ChildrenType):
ReactElement => {
  return(
    <CartContext.Provider value={useCartContext(initialCartState)}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext