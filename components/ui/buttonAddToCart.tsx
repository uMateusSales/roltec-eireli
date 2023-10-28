"use client";

import React, { MouseEventHandler } from "react";

import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

interface ButtonAddToCartProps {
  data: Product;
}

const ButtonAddToCart: React.FC<ButtonAddToCartProps> = ({ data }) => {
  const cart = useCart();

  const addToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div className="mt-10 flex items-center gap-x-3">
      <Button onClick={addToCart} className="flex items-center gap-x-2">
        Adicionar ao carrinho
        <ShoppingCart />
      </Button>
    </div>
  );
};

export default ButtonAddToCart;
