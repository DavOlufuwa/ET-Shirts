import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@radix-ui/react-navigation-menu"
import { useState } from "react"

import { Link } from "react-router-dom"
import CartPreview from "./CartPreview"

const Header = () => {
  const [previewCart , setPreviewCart] = useState<boolean>(false)
  return (
    <header className="bg-green-500 flex justify-between relative  px-4 py-5">
      <div className="logo">
        <h1>BIG LOGO</h1>
      </div>
      <NavigationMenu >
        <NavigationMenuList className="flex justify-between">
          <NavigationMenuItem className="nav-link">
            <Link to={"/"}>Home</Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="nav-link">
            <Link to={"/"}>Contact Us</Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="nav-link">
            <CartPreview/>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}

export default Header