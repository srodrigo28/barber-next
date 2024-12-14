export interface TituloSecaoProps{
    tag?: string
    principal: string
    segundario: string
}

export default function TituloSecao(props: TituloSecaoProps){
    return(
        <div className="flex flex-col items-center justify-center">
            {props.tag && (
                <div className="bg-zinc-700 px-4 py-1.5 rounded-md font-black uppercase mb-2"> {props.tag} </div>
            )}
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold my-2 text-gradient">{props.principal}</h2>
            <h3 className="text-xl md:text-3xl lg:text-4xl text-center text-zinc-500 md:w-[450px] xl:w-[650px]">{props.segundario}</h3>
        </div>
    )
}