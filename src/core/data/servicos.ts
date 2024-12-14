import Servico from "../models/Servico";


export const servicos: Servico[] = [
    {
        id: 1,
        nome: 'Corte 1',
        descricao: 'Um corte curto e estiloso, geralmente  curtas, enquanto a parte superior pode ser levemente mais longa. Oferece um visual moderno e ousado',
        preco: 25,
        qtdSlots: 3,
        imagemURL: 'servicos/corte-de-barba.jpg'
    },
    {
        id: 2,
        nome: 'Corte 2',
        descricao: 'Fica na altura do queixo ou um pouco acima, com uma aparência elegante. Pode ser reto ou assimétrico, dependendo do estilo desejado',
        preco: 35,
        qtdSlots: 3,
        imagemURL: 'servicos/dia-de-noivo.jpg'
    },
    {
        id: 3,
        nome: 'Corte 3',
        descricao: 'Versão alongada do bob, com comprimento que pode variar entre a altura dos ombros e o meio do pescoço. É um dos cortes mais versáteis',
        preco: 35,
        qtdSlots: 3,
        imagemURL: 'servicos/corte-de-cabelo.jpg'
    }
]