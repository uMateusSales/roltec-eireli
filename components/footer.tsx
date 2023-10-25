"use client";

import useWindowDimensions from "@/hooks/use-window";
import { Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const getLink = () => {
    const phoneWhats = "5581992322222";

    const textWhats = `Oi, tudo bem? vi seu site da Roltec e achei muito legal!`;

    const whatsMobile =
      `whatsapp://send?phone=${phoneWhats}&text=` +
      encodeURIComponent(textWhats);

    const whatsPc = `https://web.whatsapp.com/send?phone=${phoneWhats}&text=${encodeURIComponent(
      textWhats
    )}&app_abs`;

    return whatsMobile;
  };

  return (
    <footer className=" bg-white border-t">
      <div className="flex-col space-y-1 sm:space-y-0 sm:flex sm:flex-row justify-around mx-auto py-10">
        <div className="py-1">
          <p className="text-center  text-sm text-black mt-[2px]">
            &copy; Todos os direitos reservados, 2023
          </p>
        </div>
        <div className="text-center text-sm text-black py-1">
          <span>Desenvolvido por:</span>

          <Link
            target="_blank"
            className="text-center ml-1 p-1 border border-solid rounded shadow-md  hover:bg-blue-600 duration-300"
            href={getLink()}
          >
            Mateus Sales{" "}
            <Mail
              className="inline p-0.5 border border-black rounded-full mb-[2px] ml-[2px]"
              size={20}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
