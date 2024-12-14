import Profissional from "@/core/models/profissional";
import Servico from "@/core/models/Servico";
import TituloSecao from "../shared/TituloSecao";

export interface ItemServicoProps{
    servico: Servico;
}

export default function ItemServico(props: ItemServicoProps){
    const { servico } = props
    return(
        <div className="flex flex-col gap-y-16">
            <div className="flex rounded-xl bg-zinc-800 overflow-hidden">
                <img className="" width={150} height={150} src={servico.imagemURL} alt={servico.nome} />
                <div className="flex flex-col gap-5 p-3">
                    <span className="text-white">{servico.nome}</span>
                    <span className="text-sm text-zinc-400">{servico.descricao}</span>
                    <span className="">R$ {servico.preco.toFixed(2)}</span>
                </div>
            </div>
        </div>
    )
}