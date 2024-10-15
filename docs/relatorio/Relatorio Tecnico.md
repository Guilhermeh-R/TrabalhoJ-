# Informações do Projeto
`TÍTULO DO PROJETO`  

TRABALHOJÁ

`CURSO` 

ENGENHARIA DE SOFTWARE PUC-MINAS

## Participantes

- Lorran Pedro Avelar Xavier
- Bernardo Rodrigues
- Guilherme Rodrigues
- Luan Guimarães

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
- [Referências](#referências)


# Introdução

## Problema

O problema que o projeto "TrabalhoJá" visa resolver é a dificuldade em conectar pessoas que buscam serviços específicos com profissionais qualificados em diversas áreas. O site proporciona uma plataforma onde clientes podem facilmente encontrar e contratar profissionais para uma variedade de serviços, como reparos domésticos, serviços de saúde, eventos, entre outros. Este projeto é especialmente relevante em um contexto onde a demanda por serviços rápidos e confiáveis é alta, e as pessoas buscam soluções práticas e eficientes para suas necessidades do dia a dia. O "TrabalhoJá" atua como um elo entre a demanda do consumidor e a oferta de serviços, simplificando o processo de busca e contratação de profissionais.

## Objetivos

- Objetivo Geral: 
   - O objetivo geral do seu projeto é criar uma plataforma online que facilite a conexão entre profissionais de diferentes áreas e clientes que buscam seus serviços. Este objetivo resume a ideia central do seu trabalho acadêmico de forma afirmativa, apresentando a solução proposta pelo projeto.

- Objetivos Específicos: 

   - Desenvolver um sistema de busca intuitivo para que os clientes encontrem facilmente profissionais qualificados.
   - Implementar um sistema de avaliações e feedbacks para garantir a confiabilidade e a qualidade dos serviços oferecidos.
   - Criar perfis detalhados para os profissionais, permitindo que apresentem suas habilidades, experiências e tarifas.
   - Estabelecer um sistema de comunicação eficaz entre clientes e profissionais para facilitar o agendamento e a negociação de serviços.

## Justificativa

O projeto "TrabalhoJá" nasceu da necessidade de criar uma plataforma digital que efetivamente conecta clientes a uma ampla gama de profissionais de serviços, atendendo a uma demanda crescente por soluções rápidas e confiáveis no mercado atual. Inspirado pela aceleração da digitalização dos serviços devido à pandemia, o projeto visa facilitar o acesso dos consumidores a serviços personalizados, enquanto oferece aos profissionais uma oportunidade de expandir seu alcance no mercado. Com um enfoque na usabilidade, acessibilidade e construção de confiança, o "TrabalhoJá" não apenas preenche uma lacuna importante no setor de serviços, mas também representa um avanço significativo na integração de tecnologias digitais para melhorar a interação entre clientes e prestadores de serviços, alinhando-se com a tendência de um futuro cada vez mais digitalizado.

## Público-Alvo

O público-alvo do projeto "TrabalhoJá" engloba dois grupos principais: clientes que buscam serviços e profissionais que oferecem esses serviços. Para os clientes, o perfil inclui indivíduos de diversas faixas etárias e profissões, com um conhecimento moderado de tecnologia e a necessidade de serviços variados. Estes usuários buscam uma plataforma fácil de usar e confiável para encontrar prestadores de serviços qualificados. Já para os profissionais, o público-alvo consiste em indivíduos de diferentes setores, como saúde, eventos, reformas, entre outros, que têm conhecimento variável de tecnologia e buscam expandir sua clientela. Eles desejam uma plataforma que ofereça visibilidade para seus serviços e a possibilidade de construir uma reputação online. Ambos os grupos valorizam a segurança, a praticidade e a eficiência na intermediação dos serviços.


# Especificações do Projeto
1. Estrutura do Site e Navegação:

   - Análise da estrutura HTML das páginas, incluindo a homepage, páginas de busca de profissionais, cadastro, e detalhes de profissionais.
   - Utilização de HTML5 e CSS para layout e design responsivo.
   - Implementação de uma barra de navegação intuitiva e formulários de pesquisa.

2. Interatividade e Funcionalidades do Frontend:

   - Uso de JavaScript e frameworks como Bootstrap para interatividade.
   - Criação de formulários para cadastro de usuários e profissionais.
   - Implementação de um sistema de busca e filtragem para encontrar profissionais.

3. Backend e Gestão de Dados:

   - Conexão com um servidor JSON para armazenar e gerenciar dados de usuários e profissionais.
   - Utilização de chamadas AJAX para interagir com o servidor JSON.
   - Gerenciamento de dados de perfil e avaliações.

4. Sistema de Avaliações:

   - Implementação de um sistema de avaliações para profissionais.
   - Uso de estrelas e feedbacks para avaliar a qualidade dos serviços.

5. Segurança e Autenticação:

   - Processos de cadastro e login para diferentes tipos de usuários.
   - Garantia de segurança nas operações de cadastro e login.

6. Compatibilidade e Responsividade:

   - Testes de responsividade para garantir a compatibilidade com diferentes dispositivos e tamanhos de tela.

7. Ferramentas e Bibliotecas:

   - Uso de bibliotecas JavaScript e CSS, como Bootstrap, para estilização e componentes de interface.
   - Utilização de ferramentas de desenvolvimento web modernas para a criação e teste do site.

## Personas e Mapas de Empatia

### Persona 1 - O Cliente de Serviços
- **Nome:** Ana, 42 anos, gerente de RH.
- **Características:** Moradora de uma metrópole, familiarizada com tecnologia, procura eficiência e qualidade.
- **Mapa de Empatia:**
  - **Pensa:** "Preciso de serviços confiáveis e rápidos para equilibrar meu trabalho e vida pessoal."
  - **Sente:** Estresse com a gestão do tempo; deseja confiabilidade.
  - **Vê:** Publicidade online, recomendações em redes sociais.
  - **Diz e Faz:** Busca recomendações, lê avaliações online.
  - **Desafios:** Encontrar prestadores de serviços de confiança rapidamente.

### Persona 2 - O Profissional Autônomo
- **Nome:** Carlos, 35 anos, eletricista autônomo.
- **Características:** Morador de um subúrbio, busca maior visibilidade para seus serviços.
- **Mapa de Empatia:**
  - **Pensa:** "Quero expandir minha clientela e construir uma boa reputação online."
  - **Sente:** Motivação para crescer profissionalmente.
  - **Vê:** A necessidade de ter uma presença digital forte.
  - **Diz e Faz:** Investe em publicidade online, busca plataformas para divulgação.
  - **Desafios:** Aumentar a base de clientes e gerenciar eficientemente a agenda de trabalhos.



## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

| EU COMO... `PERSONA`       | QUERO/PRECISO... `FUNCIONALIDADE`               | PARA... `MOTIVO/VALOR`                                             |
|---------------------------|-------------------------------------------------|--------------------------------------------------------------------|
| Como Ana, cliente         | quero encontrar prestadores de serviço          | para resolver minhas necessidades de maneira rápida e confiável.   |
| Como Carlos, profissional | preciso ter visibilidade do meu trabalho        | para alcançar mais clientes e expandir meu negócio.                |
| Como Ana, cliente         | desejo ler avaliações e feedbacks de serviços   | para fazer escolhas informadas ao contratar profissionais.         |
| Como Carlos, profissional | quero gerenciar minha agenda e serviços         | para otimizar meu tempo e atender mais clientes.                   |
| Como Ana, cliente         | preciso de um processo de contratação simplificado | para agilizar a obtenção de serviços sem complicações.          |
| Como Carlos, profissional | desejo receber avaliações dos meus clientes     | para construir uma reputação sólida e confiável online.            |




## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

| ID  | Descrição do Requisito Funcional                                         |
|-----|--------------------------------------------------------------------------|
| RF1 | Sistema de busca para encontrar prestadores de serviço.                  |
| RF2 | Formulário de cadastro para novos usuários e profissionais.              |
| RF3 | Sistema de avaliações e feedbacks de serviços.                           |
| RF4 | Perfil detalhado para profissionais, incluindo habilidades e experiências.|
| RF5 | Mecanismo de comunicação entre clientes e profissionais.                 |



### Requisitos não Funcionais

| ID  | Descrição do Requisito Não Funcional                                     |
|-----|--------------------------------------------------------------------------|
| RNF1| Compatibilidade com diferentes navegadores e dispositivos móveis.        |
| RNF2| Desempenho otimizado para carregamento rápido das páginas.               |
| RNF3| Interface intuitiva e acessível para usuários com diferentes níveis de habilidade tecnológica.|
| RNF4| Segurança robusta no processamento de dados pessoais e transações.       |
| RNF5| Suporte multilíngue para atender a uma base de usuários diversificada.   |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

| ID | Restrição                                                            |
|----|----------------------------------------------------------------------|
| 01 | O projeto deverá ser entregue até o final do semestre.               |
| 02 | Limitação orçamentária para o desenvolvimento de recursos adicionais.|
| 03 | Dependência de APIs de terceiros para o funcionamento de certas funcionalidades.|
| 04 | A solução deve ser compatível com os navegadores mais utilizados, sem necessidade de plugins adicionais.|
| 05 | Restrições legais relacionadas à privacidade e proteção de dados dos usuários.|

## Principais telas
-INDEX
![index](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2023-2-ti1-2401100-trabalhoja/assets/151187922/43af9b75-b1ed-4226-a46b-69d662a4809c)
-CADASTRO
![cadastro](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2023-2-ti1-2401100-trabalhoja/assets/151187922/85a5a9d0-60d0-4fdc-be0f-a764e8e10d17)
-LOGIN
![login](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2023-2-ti1-2401100-trabalhoja/assets/151187922/cb17a2f6-db95-44ec-a851-738842802b88)
-PERFIL
![perfil](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2023-2-ti1-2401100-trabalhoja/assets/151187922/abd771c5-df66-4951-ab51-1de8a64b95bd)
-SER UM PROFISSIOAL
![ser um profisional](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2023-2-ti1-2401100-trabalhoja/assets/151187922/21f67154-e717-4fe1-825a-67f34306528e)
-PROFISSIONAL
![profissional](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2023-2-ti1-2401100-trabalhoja/assets/151187922/5a8d6263-d15e-4b53-a17a-fd1fc3a3aeb4)
-BUSCA DE PROFISSIONAIS
![profissionais](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2023-2-ti1-2401100-trabalhoja/assets/151187922/5659c093-ab9a-4ddc-a705-fc35736e0771)



# Metodologia

A metodologia adotada para o desenvolvimento do projeto "TrabalhoJá" foi dividida em três partes principais: visual, funcional e documentação. Cada uma dessas áreas teve um enfoque específico e uma distribuição desigual de responsabilidades entre os membros da equipe.

### Visual
- Foco no design e na interface do usuário do site.
- Desenvolvimento do layout, escolha de cores, tipografia e elementos gráficos.
- Responsabilidade de 1 membro da equipe.

### Funcional
- Implementação das funcionalidades do site, como sistema de busca, cadastro de usuários e avaliações.
- Desenvolvimento de código em HTML, CSS e JavaScript.
- Responsabilidade de 1 membro da equipe.

### Documentação
- Elaboração de toda a documentação técnica e de usuário do projeto.
- Inclui a redação de manuais, especificações de requisitos e relatórios.
- Responsabilidade do restante da equipe, exceto os membros focados no desenvolvimento visual e funcional.

### Observações
- Foi observada uma divisão desigual de trabalho, com a maior carga de desenvolvimento concentrada em apenas dois membros da equipe.
- Eu (Lorran) estou tendo que refazere boa parte da documentação


## Divisão de Papéis

## Divisão de Papéis - Projeto "TrabalhoJá"

| Membro do Grupo         | Papel/Responsabilidade                |
|-------------------------|---------------------------------------|
| Luan Guimarães          | Documentação                          |
| Guilherme Rodrigues     | Documentação                          |
| Bernardo Rodrigues      | Visual                                |
| Lorran Xavier           | Funcionalidades                       |



## Ferramentas
| Ambiente             | Plataforma       | Link de Acesso                                                                                               |
|----------------------|------------------|--------------------------------------------------------------------------------------------------------------|
| Repositório de código| GitHub           | [GitHub - TrabalhoJá](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2023-2-ti1-2401100-trabalhoja)       |
| Hospedagem do site   | Vercel           | [TrabalhoJá - Vercel](https://trabalhoja.vercel.app)                                                         |
| Protótipo Interativo | Figma            | [Figma - Protótipo TrabalhoJá](https://www.figma.com/file/eFqJGuQHgqBIFpgc1nr5vP/Trabalho-TIAW-(Copy))       |
| IDE                  | Visual Studio Code | Usado para o desenvolvimento e edição de código.                                                            |
| Comunicação          | WhatsApp e Discord | Usados como métodos de comunicação para coordenação e discussão de aspectos do projeto entre os membros.    |

## Controle de Versão

O controle de versão do projeto "TrabalhoJá" foi realizado utilizando o GitHub. Devido à limitação de conhecimentos avançados em Git por parte da maioria dos integrantes da equipe, o uso do GitHub foi mantido no nível mais básico possível. As principais características do controle de versão do projeto incluem:

- **Comits Manuais:** Todos os comits foram feitos manualmente, permitindo um controle simplificado sobre as alterações feitas no código.
- **Uma Única Branch:** O projeto foi desenvolvido em uma única branch, simplificando o processo de versionamento e evitando a complexidade de gerenciamento de múltiplas branches.
- **Tratamento de Issues:** As issues e problemas encontrados foram tratados durante as reuniões de projeto, em vez de serem gerenciados diretamente no GitHub.

Essa abordagem foi escolhida para se adaptar ao nível de conhecimento da equipe em ferramentas de controle de versão, visando manter o desenvolvimento organizado e acessível a todos os membros.

## Tecnologias Utilizadas

O projeto "TrabalhoJá" emprega uma variedade de tecnologias, linguagens e ferramentas para a implementação de sua solução. Abaixo está a lista das principais tecnologias utilizadas e uma descrição de como elas interagem para fornecer uma resposta ao usuário:

### Tecnologias e Ferramentas
- **Linguagens de Programação:** 
  - HTML5
  - CSS3
  - JavaScript
- **Frameworks e Bibliotecas:**
  - Bootstrap (para design responsivo e componentes de interface)
- **IDE de Desenvolvimento:**
  - Visual Studio Code
- **Serviços Web e Hospedagem:**
  - GitHub (para repositório de código e controle de versão)
  - Vercel (para hospedagem do site)
- **Ferramentas de Prototipagem e Design:**
  - Figma (para criação do protótipo interativo)

### Interação do Usuário com o Sistema
1. **Usuário acessa o site:** O usuário entra no site hospedado na Vercel através de um navegador.
2. **Interage com a interface:** O usuário interage com a interface desenvolvida em HTML, CSS e JavaScript.
3. **Requisição de serviços:** Ao procurar por um serviço ou profissional, a solicitação é processada pelo código JavaScript.
4. **Resposta ao usuário:** As informações são exibidas na tela do usuário, utilizando componentes Bootstrap para uma visualização responsiva e agradável.

## Plano de Testes

A avaliação da aplicação "TrabalhoJá" foi conduzida internamente pelos próprios integrantes do grupo. Os cenários de testes foram cuidadosamente elaborados para garantir que todos os requisitos funcionais e operacionais da plataforma fossem satisfatoriamente atendidos. Abaixo estão listados os principais cenários de testes realizados:

### Cenários de Testes
1. **Criação de Conta de Usuário:**
   - Teste para verificar a funcionalidade de criação de conta de usuário.
   - Validação do processo de registro e confirmação de dados.

2. **Criação de Conta Profissional:**
   - Teste para avaliar o processo de criação de conta para profissionais.
   - Inclusão de informações profissionais e verificação de perfil.

3. **Edição de Informações de Usuário:**
   - Teste para garantir que usuários possam editar suas informações pessoais e profissionais.
   - Alteração de dados como endereço, telefone, e descrição do serviço.

4. **Funcionalidades Administrativas:**
   - Avaliação das funcionalidades administrativas da plataforma.
   - Gestão de contas, moderação de conteúdo e controle de acesso.

5. **Busca e Filtragem de Serviços:**
   - Teste da funcionalidade de busca e filtragem de serviços.
   - Verificação da precisão e eficiência dos resultados da busca.

6. **Testes de Usabilidade:**
   - Avaliação da usabilidade geral da plataforma.
   - Foco na experiência do usuário, facilidade de navegação e clareza das informações.

Cada cenário de teste foi projetado para demonstrar a satisfação dos requisitos identificados, garantindo que a aplicação oferecesse uma experiência de usuário eficiente e livre de erros. A equipe realizou testes iterativos para identificar e corrigir quaisquer problemas encontrados, assegurando a qualidade e a confiabilidade da plataforma.

## Registros de Testes

## Registros de Teste - Projeto "TrabalhoJá"

Os testes realizados no projeto "TrabalhoJá" revelaram aspectos importantes tanto sobre as fortalezas quanto sobre as áreas que necessitam de melhorias na plataforma. A seguir, são discutidos os principais resultados dos testes, as falhas detectadas, e as estratégias para futuras iterações.

### Resultados dos Testes
- **Pontos Fortes:**
  - A interface do usuário foi considerada intuitiva e agradável.
  - O processo de busca e filtragem de serviços mostrou-se eficaz e preciso.
  - A funcionalidade de criação e edição de contas operou de maneira fluida e sem erros.

- **Pontos Fracos:**
  - Alguns testes revelaram problemas de compatibilidade em navegadores menos comuns.
  - A performance do site em dispositivos móveis pode ser melhorada, principalmente em telas menores.
  - Foi identificada a necessidade de aprimorar as medidas de segurança, especialmente no tratamento de dados pessoais.

### Estratégias para Próximas Iterações
- **Atacando os Pontos Fracos:**
  - Planejamos realizar testes de compatibilidade mais abrangentes, incluindo uma variedade maior de navegadores e dispositivos.
  - A otimização para dispositivos móveis será uma prioridade, visando melhorar a experiência do usuário em telas menores.
  - Serão implementadas melhorias de segurança, com a adoção de práticas recomendadas para proteção de dados.

### Falhas Detectadas e Melhorias Propostas
- **Falhas:**
  - Dificuldades no carregamento do site em navegadores menos comuns.
  - Problemas pontuais na seguranca das informações dos usuarios.
  
- **Melhorias:**
  - Revisão do código para otimização do desempenho em navegadores menos comuns.
  - Correção doe falhas identificadas na seguranca das informações dos usuarios.

Os resultados obtidos nos testes são fundamentais para o desenvolvimento contínuo e aprimoramento do projeto "TrabalhoJá". As falhas identificadas fornecem insights valiosos que orientarão as próximas etapas do projeto, assegurando que a plataforma se torne mais robusta, segura e amigável para os usuários.



# Referências

O desenvolvimento do projeto "TrabalhoJá" foi fundamentado em uma série de referências e fontes de conhecimento, que foram cruciais para o sucesso e a eficácia da solução proposta. Abaixo estão listadas as principais referências utilizadas:

### Conhecimentos dos Integrantes
- O conhecimento prévio e as habilidades técnicas dos integrantes da equipe foram essenciais no desenvolvimento das funcionalidades, design e arquitetura da plataforma.

### Suporte Acadêmico
- Professores das disciplinas **TIAW** e **DIW** forneceram orientações valiosas e insights que contribuíram significativamente para a qualidade técnica e funcional do projeto.

### Assistência do ChatGPT
- Durante algumas etapas do projeto, a equipe utilizou o ChatGPT para esclarecer dúvidas, obter sugestões sobre melhores práticas e formatar documentos técnicos, o que auxiliou na organização e na eficiência do trabalho.

Essas referências desempenharam um papel vital no desenvolvimento do "TrabalhoJá", permitindo que a equipe aplicasse de forma eficaz os conhecimentos adquiridos e recebesse suporte qualificado para superar desafios técnicos e conceituais.
