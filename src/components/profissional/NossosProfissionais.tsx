import { profissionais } from "@/core/data/profissionais"
import ItemProfissional from "./ItemProfissional"
import TituloSecao from "../shared/TituloSecao"

export default function NossosProfissionais(){
    return(
        <div className="flex gap-y-16 flex-col gap-16 justify-center items-center">
            <TituloSecao 
                tag="time" 
                principal="Os Melhores" 
                segundario="Os melhores para você, todo nosso respeito e cuidados" 
            />
            <div className="grid grid-cols-1 lg:grid-cols- xl:grid-cols-3  gap-5">
                {profissionais.map( (profissional) => (
                    <ItemProfissional key={profissional.id} profissional={profissional} />
                ))}
            </div>
        </div>
    )
}