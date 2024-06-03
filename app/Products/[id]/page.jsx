import React from "react";
import Image from "next/image";
import ComandeForm from "@/components/ComandeForm";
import Link from "next/link";

export default function page({ params }) {
  const Textimg = () => {
    switch (params.id) {
      case "beautiful-purple-iris-royalty-free-image-1709587245.jpeg":
        return "Les iris sont disponibles dans toutes les nuances imaginables, du rose le plus pâle au violet foncé et même presque noir. Ce sont des plantes vivaces faciles d'entretien ; plantez les rhizomes à l’automne et vous aurez des fleurs pendant des années.";
        break;
      case "close-up-of-pink-flowering-plants-royalty-free-image-1709587708.jpeg":
        return "Le nombre de variétés de dahlias est stupéfiant. Il est possible de cultiver toutes sortes de plantes, depuis les petites boules en forme de pompon jusqu'aux fleurs de la taille d'une assiette, dans toutes les couleurs de l'arc-en-ciel. Les dahlias sont vivaces dans le Sud, mais les bulbes doivent être déterrés à l'automne dans les climats nordiques et replantés au printemps.";
        break;
      case "mandevilla-flower-in-bloom-royalty-free-image-1585165592.jpeg":
        return "Cette plante grimpante a besoin d'un treillis pour mettre en valeur ses magnifiques fleurs en forme de trompette. Celles-ci se déclinent dans des tons roses et rouges. Vous pouvez même la rentrer pour l'hiverner jusqu'au printemps prochain, mais donnez-lui beaucoup de lumière vive";
        break;
      case "pink-clematis-blooming-in-garden-royalty-free-image-1709586277.jpeg":
        return "De charmantes petites têtes hochant la tête apparaissent lorsque la neige est encore au sol dans les climats nordiques. Ces fleurs adorables, qui sont des bulbes plantés à l'automne, résistent également aux chevreuils et aux lapins.";
        break;
      case "spring-snowdrops-galanthus-nivalis-royalty-free-image-1709587839.jpeg":
        return "L'aconit d'hiver est l'une des fleurs les plus précoces, offrant un nectar précieux aux pollinisateurs très tôt dans la saison. Les bulbes sont également résistants aux chevreuils et aux lapins. Plantez les bulbes à l'automne pour obtenir des couleurs éclatantes à la fin de l'hiver.";
        break;
      case "winterlinge-rautal-jena-germany-winter-aconite-royalty-free-image-1685718647.jpeg":
        return "La clématite est une belle plante grimpante pour les clôtures, les tonnelles et les lampadaires. Mais soyez patient : il faut souvent plusieurs années aux plantes vivaces comme la clématite pour s'établir.";
        break;
    }
  };
  return (
    <main className="fixed top-0 flex lg:flex-row flex-col  items-cente bg-white h-svh w-full font-serif overflow-hidden text-black select-none">
      <div className="lg:w-[70%] lg:h-svh h-[56%] p-1 shadow-2xl flex items-center justify-center group">
        <Image
          width={2000}
          height={2000}
          className=" shadow-lg size-[70%]  rounded-lg group-hover:scale-105 transition-all ease-in-out cursor-pointer"
          src={"/" + params.id}
        />
      </div>

      <div className="w-full lg:h-full h-[40%]  sm:overflow-hidden overflow-y-scroll p-10">
        <h1 className="text-3xl underline">Description:</h1>
        <p className="text-lg">{Textimg()}</p>
        <h1 className="text-3xl underline">Prix:</h1>
        <p className="text-4xl">10 Dt</p>
        <ComandeForm />
        <Link href="/" className="underline m-2 animate-pulse">
          Go Back Home
        </Link>
      </div>
    </main>
  );
}
