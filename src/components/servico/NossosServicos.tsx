import { servicos } from "@/core/data/servicos";
import ItemServico from "./ItemServico";

export default function NossosServicos(){
    return(
        <div className="grid grid-cols-3 gap-5">
            {servicos.map(servico => (
                <ItemServico key={servico.id} servico={servico} />
            ))}
        </div>
    )
}