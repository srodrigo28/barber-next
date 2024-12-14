import NossosClientes from "@/components/cliente/NossosClientes";
import NossosProfissionais from "@/components/profissional/NossosProfissionais";
import NossosServicos from "@/components/servico/NossosServicos";
import Cabecalho from "@/components/shared/Cabecalho";
import Rodape from "@/components/shared/Rodape";

export default function Landing() {
  return (
    <div className="flex flex-col">
      <div className="h-[500px] relative">
        <img src="banners/principal.webp" height={700} className="bg-cover w-full" alt="" />
        <div className="fixed top-0 w-screen">
          <Cabecalho />
        </div>
      </div>
      
      <div className="container md:py-10 md:pt-72">
        <NossosServicos />
        <NossosProfissionais />
        <NossosClientes />
      </div>
    <Rodape />
    </div>
  );
}
