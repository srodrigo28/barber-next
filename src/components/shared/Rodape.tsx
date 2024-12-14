import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconBrandYoutube } from "@tabler/icons-react";
import Logo from "./Logo";

export default function Rodape(){
    return(
        <footer className="container flex flex-col bg-black">
            <div className="flex items-center justify-center md:justify-between">
                <Logo />
                <div className="hidden md:flex md:flex-col md:items-center">
                    <h3 className="md:text-2xl">Sobre</h3>
                    <span>Nossa história</span>
                    <span>Política de Privacidade</span>
                    <span>Termo de uso sistema of dev</span>
                </div>
                <div className="hidden md:flex md:flex-col md:items-center md:mr-5">
                    <h3 className="md:text-2xl">Contato</h3>
                    <span>suporte@gmail.com</span>
                    <span>Estado: Goiânia Goiás</span>
                </div>
            </div>
            <div className="flex justify-center md:justify-between p-2">
                <div className="flex gap-1 items-center justify-center md:flex">
                    <IconBrandYoutube size={38} stroke={1}/>
                    <IconBrandInstagram size={38} stroke={1}/>
                    <IconBrandFacebook size={38} stroke={1}/>
                    <IconBrandLinkedin size={38} stroke={1}/>
                </div>
                <div className="text-lg"><p className="hidden md:flex">Todos direito reservados <span className="bg-green-800 p-2 rounded-xl mx-3 ">treina-dev</span> <span>{new Date().getFullYear()}.</span> </p></div>
            </div>
        </footer>
    )
}