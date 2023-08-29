import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h1 className="text-3xl">
        Navegue pelos produtos da categoria escolhida
      </h1>
      <p className="text-xl">
        Aguarde enquanto o conteudo da pagina carrega...
      </p>
    </div>
  );
};

export default Loading;
