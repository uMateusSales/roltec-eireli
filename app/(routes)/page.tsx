import React, { Suspense } from "react";

import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getBillboard from "@/actions/get-billboards";
import ProductList from "@/components/product-list";
import getProducts from "@/actions/get-products";
import LoadingSkeleton from "@/components/ui/loading-skeleton";

export const revalidate = 9000;

const HomePage = async () => {
  const billboard = await getBillboard("d98d2f9c-c3ad-49a8-b3a9-78cfd3d7d1a8");
  const produtos = await getProducts({
    storeId: process.env.PUBLIC_STORE_ID,
  });

  return (
    <Container>
      <div className="space-y-10 pb-10 ">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Produtos disponiveis" items={produtos} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
