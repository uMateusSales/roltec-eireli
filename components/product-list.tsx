import { Product } from "@/types";
import React, { Suspense } from "react";
import NoResults from "./ui/no-results";

import ProductContainer from "./ui/product-container";
import { Skeleton } from "./ui/skeleton";

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults />}
<Suspense fallback={<Skeleton className="w-[100px] h-[20px] rounded-full" />
}>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((i) => (
       
          <ProductContainer key={i.id} data={i} />
   
        ))}
      </div>
      </Suspense>
    </div>
  );
};

export default ProductList;
