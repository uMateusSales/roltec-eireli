"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import useWindowDimensions from "@/hooks/use-window";

interface ProductContainerProps {
  data: Product;
}

const ProductContainer: React.FC<ProductContainerProps> = ({ data }) => {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();
  const { width, height } = useWindowDimensions();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };
  const addToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  const hideButtons = () => {
    if (width !== undefined && width < 600) {
      return false;
    } else return true;
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 shadow-sm hover:border-transparent "
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0]?.url}
          fill
          alt="imagem do produto"
          className="aspect-square object-cover rounded-md shadow-sm"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/OXbJgAJUAORqZ+bhAAAAABJRU5ErkJggg=="
        />
        {hideButtons() && (
          <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
            <div className="flex gap-x-6 justify-center">
              <div className="flex items-center bg-slate-100 rounded-md p-1">
                <IconButton
                  onClick={onPreview}
                  icon={<Expand size={14} className="text-gray-700" />}
                />
              </div>
              <div className="flex items-center bg-slate-100 rounded-md p-1">
                <IconButton
                  onClick={addToCart}
                  icon={<ShoppingCart size={14} className="text-gray-700" />}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="font-semibold text-lg">
        <p>{data.name}</p>
        <p className="text-sm text-gray-500">{data.category.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data.price} />
      </div>
    </div>
  );
};

export default ProductContainer;
