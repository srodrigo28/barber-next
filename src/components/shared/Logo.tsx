import Link from "next/link";

export default function Logo(){
    return(
        <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="logo" width={85} height={85} />
            <div className="flex flex-col">
                <span className="tracking-widest text-xl font-bold text-zinc-400">Corte</span>
                <span className="text-xl font-bold text-zinc-400">Estilo</span>
            </div>
        </Link>
    )
}