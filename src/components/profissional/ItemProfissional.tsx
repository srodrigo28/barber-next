import Profissional from "@/core/models/profissional";

import { IconBrandInstagram, IconBrandLinkedin, 
    IconBrandX, IconBrandYoutube } from "@tabler/icons-react";

export interface ItemProfissionalProps{
    profissional: Profissional;
}

export default function ItemProfissional(props: ItemProfissionalProps){
    const { profissional } = props
    return(
        <div className="flex flex-col gap-5 rounded-xl bg-zinc-800 overflow-hidden">
            <div className="relative flex h-72 w-full">
                <img className="flex-1 object-cover " src={profissional.imagemURL} alt={profissional.nome} />
            </div>
            <div className="gap-5 p-3 flex flex-col">
                <span className="text-white text-3xl">{profissional.nome}</span>
                <span className="text-zinc-400">{profissional.descricao}</span>
                <div className="flex p-2 justify-around">
                    <IconBrandYoutube stroke={1} />
                    <IconBrandInstagram stroke={1} />
                    <IconBrandX stroke={1} />
                    <IconBrandLinkedin stroke={1} />
                </div>
            </div>
        </div>
    )
}