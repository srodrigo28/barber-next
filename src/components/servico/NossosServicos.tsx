import { servicos } from "@/core/data/servicos";
import ItemServico from "./ItemServico";
import TituloSecao from "../shared/TituloSecao";

export default function NossosServicos(){
    return(
        <div className="flex flex-col gap-y-16">
            <TituloSecao 
                tag="serviços" 
                principal="Do classico ao mais sufisticado" 
                segundario="Cabelos, barbas e bigodes, transformação visual" 
            />
                <div className="grid grid-cols-1 lg:grid-cols- xl:grid-cols-3  gap-5">
                {servicos.map(servico => (
                    <ItemServico key={servico.id} servico={servico} />
                ))}
            </div>
        </div>
    )
}