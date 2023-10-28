"use client";

import React, { MouseEventHandler } from "react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

interface ButtonAddToCartProps {
  data: Product;
  className?: string;
}

const ButtonAddToCart: React.FC<ButtonAddToCartProps> = ({
  data,
  className,
}) => {
  const cart = useCart();

  const addToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div className="flex items-center gap-x-3">
      <Button
        onClick={addToCart}
        className={cn("flex items-center gap-x-2", className)}
      >
        Adicionar ao carrinho
        <ShoppingCart />
      </Button>
    </div>
  );
};

export default ButtonAddToCart;
