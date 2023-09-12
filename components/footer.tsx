import { LinkedinIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
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
        
        
        <Link target="_blank" className="text-center ml-1 p-1 border border-solid rounded shadow-md  hover:bg-blue-600 duration-300" href='https://www.linkedin.com/in/mateus-lins-061a5424a/'>Mateus Sales <LinkedinIcon  className="inline p-[1.5px] border border-black rounded-full mb-[2px] ml-[2px]" size={20} /></Link>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
