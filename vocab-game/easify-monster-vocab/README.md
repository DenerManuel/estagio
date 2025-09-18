# Easify Vocab Game

## Descrição

O **Easify Vocab Game** é um jogo web interativo para aprendizado de vocabulário em inglês, organizado por categorias temáticas (animais, corpo, cores, etc). O usuário navega por diferentes telas, escolhe categorias e interage com cartões ilustrados, reforçando o aprendizado de palavras de forma lúdica. O projeto utiliza [Pixi.js](https://pixijs.com/) para renderização gráfica e animações, e [Vite](https://vitejs.dev/) para build e desenvolvimento.

---

## Guia Rápido para Supervisores

### 1. **Fluxo da Aplicação**

- **Tela Inicial (HomeScreen):**
  Exibe o título do jogo e três botões principais:

  - **Start:** Inicia o jogo padrão.
  - **Choose:** Permite escolher uma categoria específica.
  - **Review:** Permite revisar as categorias

- **Tela de Categorias (CategoriesScreen):**
  Mostra cartões de categorias disponíveis. O usuário pode selecionar uma para jogar ou revisar.

- **Tela Pré-Jogo (PreGameScreen):**
  Exibe os itens da categoria escolhida, permitindo ao usuário visualizar e se preparar.

- **Tela de Jogo (GameScreen):**
  O usuário interage com cartões, selecionando ou arrastando conforme a rodada. O jogo possui rodadas com diferentes mecânicas.

- **Tela de Revisão (ReviewScreen):**
  Permite revisar itens de uma categoria, mostrando imagem, nome e navegação entre eles.

- **Tela de Conclusão (CompletedScreen):**
  Mostra a pontuação final, estrelas de desempenho e opção de jogar novamente.

---

### 2. **Estrutura dos Arquivos**

```
src/
│
├── app/                # Inicialização principal da aplicação (App.js)
├── assets/             # Imagens das categorias e itens
├── components/         # Componentes reutilizáveis (botões, containers, textos)
├── core/               # Lógica central do jogo e gerenciamento de telas
├── data/               # Dados mockados das categorias e itens
├── errors/             # Tratamento de erros
├── screens/            # Telas do jogo (home, categorias, jogo, revisão, etc)
├── styles/             # Estilos, posições e responsividade dos componentes
├── utils/              # Funções utilitárias (array, posição, responsividade)
├── validators/         # Validações de dados e inicialização
├── index.html          # HTML principal
├── main.js             # Ponto de entrada do app
└── jsconfig.json       # Configuração de paths para imports
```

#### **Principais arquivos e diretórios:**

- [`src/app/App.js`](src/app/App.js): Classe principal da aplicação, gerencia instância Pixi.js, tamanho da tela e contexto.
- [`src/core/Game.js`](src/core/Game.js): Inicializa o jogo, prepara Pixi, carrega dados e telas.
- [`src/screens/`](src/screens/): Cada subpasta representa uma tela do fluxo do jogo.
- [`src/data/categories/`](src/data/categories/): Dados de todas as categorias e itens.
- [`src/styles/`](src/styles/): Estilos, posições e lógica de responsividade.
- [`src/components/`](src/components/): Botões, containers e textos customizados para uso em várias telas.

---

### 3. **Como Rodar o Projeto**

1. **Instale as dependências:**

   ```sh
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   ```sh
   npm run dev
   ```
   O navegador abrirá automaticamente em `http://localhost:5173` (ou porta similar).

---

### 4. **Diferenciais Técnicos**

- **Responsividade:**
  O layout se adapta a diferentes tamanhos de tela (desktop, tablet, mobile) usando lógica JS e CSS.
- **Arquitetura Modular:**
  Componentes e telas são separados, facilitando manutenção e expansão.
- **Gerenciamento de Telas:**
  O fluxo entre telas é controlado por um ScreenManager central.
- **Mock de Dados:**
  As categorias e itens são facilmente editáveis em arquivos JS.

---

### 5. **Onde Editar/Adicionar Categorias**

Para adicionar ou editar categorias, altere os arquivos em [`src/data/categories/`](src/data/categories/). Cada arquivo representa uma categoria, com título, lista de itens e imagens.

---

### 6. **Contato e Dúvidas**

Para dúvidas técnicas ou sugestões, consulte os comentários nos arquivos ou entre em contato com o desenvolvedor principal (Dener Emanuel dos Santos).

---

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.
