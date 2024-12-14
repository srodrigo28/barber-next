import { profissionais } from "@/core/data/profissionais"
import ItemProfissional from "./ItemProfissional"

export default function NossosProfissionais(){
    return(
        <div className="grid grid-cols-1 lg:grid-cols- xl:grid-cols-3  gap-5">
            {profissionais.map( (profissional) => (
                <ItemProfissional key={profissional.id} profissional={profissional} />
            ))}
        </div>
    )
}