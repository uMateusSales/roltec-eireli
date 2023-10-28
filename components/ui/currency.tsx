"use client";

import { useState, useEffect } from "react";

export const priceFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

interface CurrencyProps {
  value: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="font-bold sm:text-base text-lg shadow p-1 bg-gray-200">
      {priceFormatter.format(Number(value))}{" "}
    </div>
  );
};

export default Currency;
