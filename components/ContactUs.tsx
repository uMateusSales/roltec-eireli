"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import Button from "./ui/button";
import { Separator } from "./ui/separator";

const ContactUs = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  const getLink = () => {
    let width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const phoneWhats = "5581986379255";

    const textWhats = ` 
        *Oi tudo bem? estava dando uma olhada no seu catálogo e gostaria gostaria de fazer uma cotação de um produto!*
        `;

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
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            Procurando algo que não encontrou ?
          </CardTitle>
          <CardDescription className="text-lg font-semibold">
            Entre em contato em nosso whatsapp ou email!
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex gap-6">
          <Link target="_blank" href={getLink()}>
            <Button className="mt-6">Enviar mensagem ao vendedor</Button>
          </Link>

          <Link
            target="_blank"
            href="mailto:roltec.pe@hotmail.com?subject=Produto não encontrado no site&body=Estou em busca comprar de alguma correia, rodizio ou rolamento. Poderia me ajudar?"
          >
            <Button className="mt-6">Enviar um email para a empresa</Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default ContactUs;
