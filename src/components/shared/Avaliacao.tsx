import { IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react"

export interface AvaliacaoProps{
    nota: number
    quantidade: number
}

export default function Avaliacao(props: AvaliacaoProps){
    const { nota, quantidade } = props

    const estrelas = Array.from({ length: 5 }, (_, index) => {
        const valor = index + 1

        if(nota >= valor){
            return <IconStarFilled key={index} size={18} />
        }else if(nota > nota - 1){
            return <IconStarHalfFilled key={index} size={18} />
        }
    })
    return(
        <div className="flex gap-2">
            <div className="text-yellow-500 flex gap-1"> {estrelas} </div>
            <span className="text-zinc-400">({quantidade})</span>
        </div>
    )
}