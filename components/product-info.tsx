"use client";

import { Product } from "@/types";
import React, { MouseEventHandler } from "react";
import Currency from "./ui/currency";

import useCart from "@/hooks/use-cart";
import ButtonAddToCart from "./ui/buttonAddToCart";

interface ProductInfoProps {
  data: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ data }) => {
  const cart = useCart();

  const addToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Tamanho:</h3>
          <div>{data.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Cor:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-500"
            style={{ backgroundColor: data.color.value }}
          />
        </div>
      </div>
      <ButtonAddToCart data={data} />
    </div>
  );
};

export default ProductInfo;
