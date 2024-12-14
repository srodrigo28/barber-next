export interface SecaoBackgroundProps{
    children: React.ReactNode
    imagem: string
}

export default function SecaoBackground(props : SecaoBackgroundProps){
    return(
        <div className="relative container">
            <img src={props.imagem} className="flex-1 object-fill -z-30" alt="background da seção" />
            <div className="absolute top-0 bg-gradient-to-r from-black/70 via-black/80 to-black/70">
                <div className="container py-10 w-[1280px] px-10"> {props.children} </div>
            </div>
        </div>
    )
}