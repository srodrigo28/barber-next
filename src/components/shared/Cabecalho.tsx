import Link from "next/link";
import Logo from "./Logo";

export default function Cabecalho(){
    return(
        <header className="h-28 bg-black/70 flex items-center">
            <div className="container flex items-center justify-between">
                <Logo />
                <div>
                    <Link href="/" className="bg-green-600 p-2 px-6 rounded-md py-3">
                        Entrar
                    </Link>
                </div>
            </div>
        </header>
    )
}