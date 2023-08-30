import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-5">
      <h1 className="text-3xl">Carregando...</h1>
      <div className="flex w-full flex-1 flex-col items-center  ">
        <div className="mt-10 w-1/2 animate-pulse flex-col items-center justify-center space-x-1 rounded-xl border p-6 ">
          <div className="flex flex-col gap-3">
        
              <div className="h-8 rounded-sm bg-gray-400 border border-neutral-800 "></div>
           
          
      
              <div className="h-8 rounded-sm bg-gray-400 border  border-neutral-800 "></div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
