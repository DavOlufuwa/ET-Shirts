import useCart from "@/hooks/useCart"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"




const CartPreview = () => {

  const { totalItems, cart , totalPriceAndCurrency } = useCart()
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          openCart
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Cart</SheetTitle>
          </SheetHeader>
          <div>
            Cart Items
          </div>
          <SheetFooter>
            <SheetDescription>Total Items: {totalItems}</SheetDescription>
            <SheetDescription>Total Price: {totalPriceAndCurrency}</SheetDescription>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default CartPreview