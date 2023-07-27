import { ReactElement, createContext, useEffect, useState } from "react"

// First create the Shirt type
export type ShirtType = {
  id: number
  name: string
  image: string
  description: string
  price: number
  discount: number
}
// using useEffect to get the state data to be an array of shirtTypes
const initialState: ShirtType[] = []


// statically setting the state data 
// const initialState: ShirtType[] = [
//   {
//     "id": 1,
//     "name": "Red Shirt",
//     "image": "https://cdn.filestackcontent.com/36MnmqiQJCSEzM0JDBAF",
//     "description": "A red shirt - it's pretty red!",
//     "price": 29.99,
//     "discount": 16
//   },
//   {
//     "id": 2,
//     "name": "Polo White T-Shirt",
//     "image": "https://cdn.filestackcontent.com/lMmsGRNNS7CulkKGmRYm",
//     "description": "A white shirt - it's pretty white!",
//     "price": 79.99,
//     "discount": 14
//   },
//   {
//     "id": 3,
//     "name": "Plain White T-Shirt",
//     "image": "https://cdn.filestackcontent.com/sAaXb1XQwL0waNsIRM4A",
//     "description": "A white shirt - it's pretty white!",
//     "price": 49.99,
//     "discount": 33
//   }
// ]

export type useShirtsContextType = {
  shirts: ShirtType[]
}

// initial context state
const initialContextState: useShirtsContextType = {
  shirts: []
}

// creating the shirt context
const ShirtContext = createContext<useShirtsContextType>(initialContextState)

// Creating a children type
// The Children are the things in between an opening and closing JSX tag
type ChildrenType = {
  children?: ReactElement | ReactElement[]
}

// Creating a provider 
export const ShirtsProvider = ({ children }: ChildrenType): ReactElement => {
  
  // Setting the state that will be exported
  const [shirts, setShirts] = useState<ShirtType[]>(initialState)
  
  // using useEffect to get state
  useEffect(() => {
    // creating an async function 
    const fetchShirts = async (): Promise<ShirtType[]> => { // This means that the async function will return a promise that will end up looking like an array of the shirtType
      const data = 
      await fetch("../../data/shirts.json")
      .then(res => {
        return res.json()
      }).catch(
        err => {
          if(err instanceof Error) console.log(err.message)
        }
      )
        return data
    }

    // after getting the data from the async function
    fetchShirts().then(shirts => setShirts(shirts)) 

  }, [])


  return(
    <ShirtContext.Provider value = {{ shirts}}>
      { children }
    </ShirtContext.Provider>
  )
}

export default ShirtContext

// Running a json server locally 
// npx json-server -w data/shirts.json -p 8500