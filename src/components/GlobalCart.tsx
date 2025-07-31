import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import {useCart} from '@/context/CartContext'
import Cart from '@/components/Cart'

function GlobalCart() {
    const [isOpen, setIsOpen] = useState(false);
    const { state } = useCart();

  return (
    <div>
        <Button
                variant="outline"
                onClick={() => setIsOpen(!isOpen)}
                className="relative cursor-pointer"
              >
                <ShoppingCart className="w-5 h-5" />
                {state.itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
                    {state.itemCount}
                  </span>
                )}
          </Button> 
           <Cart isOpen={isOpen} onClose={() => setIsOpen(false)} /></div>
  )
}

export default GlobalCart