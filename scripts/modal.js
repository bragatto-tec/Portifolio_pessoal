const dataProjects = [
    {
        title: 'Projeto Loja MackShop',
        date: 'Agosto/Setembro 2025',
        description: `

O MackShop é uma aplicação de console desenvolvida em Java puro que simula um sistema completo de ponto de venda (PDV) e gerenciamento de inventário para uma loja. O sistema permite ao usuário realizar operações essenciais de varejo, como inicializar a base de dados de produtos, exibir o catálogo de itens disponíveis com seus respectivos estoques, e adicionar produtos a um carrinho de compras.

A aplicação gerencia todo o fluxo de venda, permitindo visualizar um resumo do carrinho e finalizar a compra. Ao finalizar, o sistema automaticamente atualiza o estoque, salva a transação em um histórico persistente (em memória) e imprime uma Nota Fiscal formatada no console. Além das funções de venda, o projeto inclui um módulo administrativo protegido para repor o estoque de produtos e gerar relatórios de itens que estão acabando.<br><br>

Esse projeto foi desenvolvido com as seguintes ferramentas:<br>

Java (Puro)<br>
`,
        repository: 'https://github.com/bragatto-tec/JAVA/tree/main/Projeto_loja',
    },
    {
        title: 'Página de Login Moderna',
        date: 'Setembro 2025',
        description: `Modern Login Page é uma aplicação web de interface elegante e responsiva desenvolvida para representar uma tela de autenticação moderna. O design prioriza a experiência do usuário, combinando um layout minimalista com efeitos visuais dinâmicos, como gradientes animados, brilhos suaves e sobreposição de grades.

O formulário contém campos para usuário e senha, opção de lembrar login, link de recuperação de senha e redirecionamento para registro de novo usuário, mantendo uma navegação simples e intuitiva.<br><br>

Esse projeto foi desenvolvido com as seguintes ferramentas: <br>
• HTML5<br>
• CSS3 (animações e responsividade)<br>
• Boxicons<br>
• Google Fonts (Poppins)<br>
        `,
        repository: 'https://github.com/bragatto-tec/HTML5-CSS-JSS/tree/main/Tela%20de%20Login',
    },
    {
        title: 'App Previsão do Tempo',
        date: 'Agosto de 2025',
        description: `Previsão do Tempo é uma aplicação web que exibe informações climáticas em tempo real de qualquer cidade do mundo. O usuário pode pesquisar o nome da cidade desejada e visualizar instantaneamente dados atualizados sobre a temperatura, descrição do clima, nível de umidade e ícone correspondente à condição atual.

A aplicação utiliza a OpenWeather API para buscar os dados meteorológicos e exibe as informações de forma simples, direta e responsiva. O design foi pensado para garantir boa usabilidade tanto em dispositivos móveis quanto em desktops, apresentando uma interface moderna e limpa.<br><br>

Esse projeto foi desenvolvido com as seguintes ferramentas: <br>
• HTML5<br>
• CSS3 (responsivo)<br>
• JavaScript (Vanilla)<br>
• OpenWeather API<br>
• Google Fonts<br>`,
        repository: 'https://github.com/bragatto-tec/HTML5-CSS-JSS/tree/main/App%20Previsão%20Tempo',

    },
    {
        title: 'Projeto portfólio',
        date: 'Agosto de 2025',
        description: 'O Portfólio Pessoal Dinâmico é uma aplicação web responsiva e moderna, desenvolvida para exibir projetos de forma profissional e gerenciável. O design foca em uma navegação limpa e um tema escuro elegante, com animações sutis de entrada para os cartões de projeto.<br><br> A principal característica desta aplicação é sua arquitetura desacoplada: o front-end é construído com Next.js 15, mas todo o conteúdo (textos, imagens e detalhes dos projetos) é gerenciado dinamicamente através do Contentful, um Headless CMS.<br><br> Esse projeto foi desenvolvido com as seguintes ferramentas: <br>• Next.js 15<br> • React 19 <br> • Contentful <br> • CSS Modules<br>',
        repository: 'https://github.com/bragatto-tec/proj_portifolio.git',

    },
    {
        title: 'Iphone-17',
        date: 'Julho de 25',
        description: "A Landing Page Conceitual do iPhone 17 Pro é uma aplicação web responsiva e moderna, desenvolvida para apresentar um produto de forma profissional e visualmente impactante. O design foca em uma navegação fluida em página única e um tema escuro elegante, simulando a estética de um site de lançamento oficial.<br><br>A principal característica desta aplicação é sua arquitetura de front-end componentizada. A interface é construída de forma modular com componentes React, e todo o conteúdo (textos, imagens e especificações do produto) é integrado diretamente no código. O estilo é gerenciado por classes de utilitários, garantindo um desenvolvimento ágil e um design consistente.<br><br>Esse projeto foi desenvolvido com as seguintes ferramentas:<br> • React 19 <br> • Vite <br> • Tailwind CSS",
        repository: 'https://github.com/bragatto-tec/Projeto-Iphone-17.git',

    },
    {
        title: 'Projeto Animação',
        date: 'Junho de 2025',
        description: "O Carrossel Animado de Refrigerantes é uma aplicação web interativa e moderna, desenvolvida para exibir produtos de forma profissional e visualmente atraente. O design foca em uma navegação de slides controlada e um tema colorido dinâmico que se adapta a cada produto, com animações suaves de entrada.<br><br> A principal característica desta aplicação é sua interatividade construída com JavaScript puro(Vanilla JS).A interface é construída com HTML5, e todo o conteúdo(títulos, imagens e cores de fundo) é integrado diretamente no código.O estilo é gerenciado com CSS3 puro, garantindo animações fluidas e um design criativo.<br><br> Esse projeto foi desenvolvido com as seguintes ferramentas: <br>• HTML5 <br> • CSS3 <br> • JavaScript(Vanilla JS)",
        repository: 'https://github.com/bragatto-tec/animation_front.git',

    },
]

// Open Modal

const openModal = () => {
    const closeModal = document.querySelector('.modal .ri-close-line')
    const modal = document.querySelector('.modal')
    const box = document.querySelectorAll('.cards-projects .box')
    const modalTitle = modal.querySelector('.title h2')
    const modalDescription = modal.querySelector('.info p')
    const modalDate = modal.querySelector('span')
    const modalLinkRepository = modal.querySelector('.links a.link-repository')
    const iframe = modal.querySelector('.video iframe')

    box.forEach((item, index) => {

        const addData = () => {
            const project = dataProjects[index]
            if (!project) return console.warn('[openModal] missing project data for index', index)

            modalTitle.innerHTML = project.title || ''
            modalDescription.innerHTML = project.description || ''
            modalDate.innerHTML = project.date || ''
            if (project.repository) modalLinkRepository.setAttribute('href', project.repository)
            else modalLinkRepository.removeAttribute('href')

            if (project.videoSrc) iframe.setAttribute('src', project.videoSrc + '?autoplay=1&amp;loop=0')
            else iframe.setAttribute('src', '')

            // open modal and overlay
            modal.classList.remove('hidden')
            document.body.style.overflow = 'hidden'
            document.body.classList.add('transparent')
        }

        item.addEventListener('click', addData)

    })

    const closingModal = () => {
        modal.classList.add('hidden')
        document.body.style.overflow = 'visible';
        document.body.classList.remove('transparent')
        iframe.setAttribute('src', '')

    }

    closeModal.addEventListener('click', closingModal)

    document.addEventListener('keydown', (event) => event.key === "Escape" ? closingModal() : '');

}

openModal()