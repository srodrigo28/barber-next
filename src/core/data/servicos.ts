import Servico from "../models/Servico";


export const servicos: Servico[] = [
    {
        id: 1,
        nome: 'Corte 1',
        descricao: 'Descricao do corte 1',
        preco: 25,
        qtdSlots: 3,
        imagemURL: 'servicos/corte-de-barba.jpg'
    },
    {
        id: 2,
        nome: 'Corte 2',
        descricao: 'Descricao do corte 2',
        preco: 35,
        qtdSlots: 3,
        imagemURL: 'servicos/corte-de-barba.jpg'
    }
]