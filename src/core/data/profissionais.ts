import Profissional from "../models/profissional";

export const profissionais: Profissional[] = [
    {
        id: 1,
        nome: 'André Sousa',
        descricao: 'Barbeiro atencioso, oferece cortes impecáveis e cuidado minucioso, garantindo um atendimento personalizado que valoriza cada detalhe do seu estilo e conforto.',
        imagemURL: 'profissionais/profissional-1.jpg',
        avaliacao: 5,
        quantidadeAvaliacoes: 100
    },
    {
        id: 2,
        nome: 'Joana Sordin',
        descricao: 'Profissional dedicado, o barbeiro atencioso combina técnica e simpatia para proporcionar uma experiência única, respeitando suas preferências e sempre atento ao seu bem-estar.',
        imagemURL: 'profissionais/profissional-3.jpg',
        avaliacao: 5,
        quantidadeAvaliacoes: 100
    }
    ,
    {
        id: 3,
        nome: 'Mario Sordin',
        descricao: 'Barbeiro com atendimento diferenciado, focado na satisfação do cliente. Cuidado nos mínimos detalhes, proporcionando cortes precisos e um ambiente acolhedor',
        imagemURL: 'profissionais/profissional-2.jpg',
        avaliacao: 5,
        quantidadeAvaliacoes: 100
    }
    
]