import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 mt-2">
      <h1 className="text-3xl self-start ml-3">
        Bem vindo ao site da Roltec rolamentos
      </h1>

      <div className="flex w-full flex-1 flex-col items-center  px-20">
        <p className="text-xl">Carregando...</p>
        <div className="mt-12 w-1/2 animate-pulse flex-row items-center justify-center space-x-1 rounded-xl border p-6 ">
          <div className="grid grid-cols-2 gap-4">
            <div className="h-52 w-auto rounded-md bg-gray-400 "></div>
            <div className="h-52 w-auto rounded-md bg-gray-400 "></div>

            <div className="h-28 w-10/12 rounded-md bg-gray-400 "></div>
            <div className="h-28 w-10/12 rounded-md bg-gray-400 "></div>
            <div className="h-6 w-9/12 rounded-md bg-gray-400 "></div>
            <div className="h-6 w-9/12 rounded-md bg-gray-400 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
