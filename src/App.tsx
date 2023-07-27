import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from 'react-router-dom'

import Home from './routes/Home'
import Cart from './routes/Cart'
import ShirtDetail from './routes/ShirtDetail'


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
      <RouterProvider router={router} />
    </>
  )
}

export default App
