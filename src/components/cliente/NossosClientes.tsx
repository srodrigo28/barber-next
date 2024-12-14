import TituloSecao from "../shared/TituloSecao"
import { clientes } from "@/core/data/clientes"

export default function NossosClientes(){
    return(
        <div className="flex gap-y-16 flex-col gap-16 justify-center items-center">
            <TituloSecao 
                tag="Clientes" 
                principal="Quem manda aqui" 
                segundario="Nossos clientes, são o combustivel para nosso dia a dia" 
            />
            <div className="grid grid-cols-1 lg:grid-cols- xl:grid-cols-3  gap-5">
                {clientes.map( (item) => (
                    <span key={item.id}>{item.nome}</span>
                ))}
            </div>
        </div>
    )
}