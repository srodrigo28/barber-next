import Servico from "@/core/models/Servico";

export interface ItemServicoProps{
    servico: Servico;
}

export default function ItemServico(props: ItemServicoProps){
    const { servico } = props
    return(
        <div className="flex rounded-xl bg-zinc-800 overflow-hidden">
            <img src={servico.imagemURL} width={150} height={150} alt={servico.nome}/>
           <div>
             {servico.nome}
           </div>
        </div>
    )
}