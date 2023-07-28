import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from 'react-router-dom'

import Home from './routes/Home'
import Cart from './routes/Cart'
import ShirtDetail from './routes/ShirtDetail'
import { ShirtsProvider } from './contexts/ShirtProvider'
import { CartProvider } from './contexts/CartProvider'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/">
    <Route index element={<Home />} />
    <Route path="cart" element={<Cart />} />
    <Route path="shirtdetail" element={<ShirtDetail /> } />
  </Route>
))


function App() {
  return (
    <>
      <ShirtsProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ShirtsProvider>
    </>
  )
}

export default App
