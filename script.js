const infoSection = document.querySelector('.info');

const dataPanel1 = [
    { label: 'Projeto', value: 'SITE-BASE' },
    { label: 'Link', value: 'https://github.com/elielalvespinheiro/SITE-BASE' },
    { label: 'Tecnologias', value: 'Html' },
    { label: 'Descrição', value: 'Este é um projeto de um site básico.' }
];

const dataPanel2 = [
    { label: 'Projeto', value: 'Projeto_PDV' },
    { label: 'Link', value: 'https://github.com/elielalvespinheiro/Projeto_PDV' },
    { label: 'Tecnologias', value: 'Java' },
    { label: 'Descrição', value: 'Um pequeno projeto PDV que eu fiz enquanto estudava a linguagem Java'
     },
    { label: 'Categoria', value: 'Free-Lance' },
];

const dataPanel3 = [
    { label: 'Projeto', value: 'projeto_tela_de_login' },
    { label: 'Link', value: 'https://github.com/elielalvespinheiro/projeto_tela_de_login' },
    { label: 'Tecnologias', value: 'hmtl e css' },
    { label: 'Descrição', value: 'Um modesto projeto de uma tela de login, fiz ele enquanto estudava as ferramentas html e css'
     },
    { label: 'Categoria', value: 'Gerador de PDF' },
];

const dataPanel4 = [
    { label: 'Projeto', value: 'Acesso para meu repopitório onde contribuo para outros projetos' },
    { label: 'Link', value: 'https://github.com/elielalvespinheiro?tab=repositories' },
    { label: 'Tecnologias', value: 'Java' },
    { label: 'Descrição', value: 'Uma rota para todos os meus projetos e para os que contribuo, além de ser meu perfil no gitHub'
     },
    { label: 'Categoria', value: 'Repositório' },
];

const dataPanel5 = [
    { label: 'Projeto', value: 'Uma API de cadastros de clientes' },
    { label: 'Link', value: 'https://github.com/elielalvespinheiro/cadastro-usuario/tree/main/src' },
    { label: 'Tecnologias', value: 'Java e React' },
    { label: 'Descrição', value: 'Uma API onde criei um pequeno CRUD de usuários'
     },
    { label: 'Categoria', value: 'Cadastro de cliente' },
];

/*
const dataPanel6 = [
    { label: 'Descrição', value: 'Este é um projeto de banco de dados' },
    { label: 'Categoria', value: 'Banco de Dados' },
];
*/

function truncateLinkText(linkText, maxLength) {
    if (linkText.length > maxLength) {
      return linkText.substring(0, maxLength) + '...';
    }
    return linkText;
  }

function generateInfoPanel(dataArray, panelIndex) {
    const panelSection = document.createElement('section');
    panelSection.className = `info-panel panel-${panelIndex}`;
    infoSection.appendChild(panelSection);

    dataArray.forEach((item) => {
        const pInfo = document.createElement('p');
        if (item.label === 'Link') {
          const link = document.createElement('a');
          link.href = item.value;
          link.target = '_blank'; 
          const truncatedLinkText = truncateLinkText(item.value, 30);
          link.textContent = truncatedLinkText;
          pInfo.appendChild(link);
        } else {
          pInfo.innerHTML = `<strong>${item.label}:</strong> ${item.value}`;
        }
        panelSection.appendChild(pInfo);
      });
}

generateInfoPanel(dataPanel1, 1);
generateInfoPanel(dataPanel2, 2);
generateInfoPanel(dataPanel3, 3);
generateInfoPanel(dataPanel4, 4);
generateInfoPanel(dataPanel5, 5);
/*
generateInfoPanel(dataPanel6, 6);
*/