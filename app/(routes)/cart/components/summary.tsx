"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Button from "@/components/ui/button";

import Currency from "@/components/ui/currency";

import useCart from "@/hooks/use-cart";

import Link from "next/link";

const Summary = () => {
  const cart = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const searchParams = useSearchParams();

  const totalPrice = cart.reduce((total, item) => {
    return total + Number(item.price) * item.quantity;
  }, 0);

  const getLink = () => {
    let width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const phoneWhats = "5581986379255";

    const textWhats = `########  PEDIDO REALIZADO NO SITE  ######## 
    
    ################################
    ${cart?.map(
      (i) =>
        `
         Produto: *${i.name}* 
        
         Preço: *R$${i.price},00*     

         Quantidade: *${i.quantity}*   
        
        ################################
        `
    )}
    
    -------------- TOTAL: *R$${totalPrice},00* -------------`;

    const whatsMobile =
      `whatsapp://send?phone=${phoneWhats}&text=` +
      encodeURIComponent(textWhats);

    if (width < 720) {
      return whatsMobile;
    }

    return `https://web.whatsapp.com/send?phone=${phoneWhats}&text=${encodeURIComponent(
      textWhats
    )}&app_abs`;
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-800">Detalhes do pedido</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-800">
            Total do pedido
          </div>
          <Currency value={totalPrice} />
        </div>
      </div>

      <Link target="_blank" href={getLink()}>
        <Button disabled={cart.length === 0} className="w-full mt-6">
          Finalizar pedido pelo Whatsapp
        </Button>
      </Link>
    </div>
  );
};

export default Summary;
