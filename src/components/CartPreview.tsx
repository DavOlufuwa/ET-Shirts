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
        </SheetContent>

      </Sheet>
    </div>
  )
}

export default CartPreview