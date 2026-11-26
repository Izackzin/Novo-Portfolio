# Portfólio · Isaac Ramos

Site pessoal de **Isaac Ramos**, estudante de Engenharia de Software, desenvolvedor full stack, designer gráfico e editor de vídeo.

**Acesse:** https://izackzin.github.io/Portfolio-Isaac-Ramos/

---

## Sobre o projeto

Portfólio de página única, feito só com HTML, CSS e JavaScript, sem frameworks e sem etapa de build. O visual segue o currículo: fundo de papel, bordas pretas grossas, sombras duras e laranja-queimado de destaque.

### Recursos

- Seções: Sobre, Skills, Experiência, Certificados, Hobbies e Contato
- Português e inglês, com troca pelo botão **EN/PT**
- Tema claro e escuro (segue o sistema e pode ser trocado pelo botão ◐)
- Visualizador dos certificados em janela (botão **Ver certificado**)
- Área para foto de perfil, com fallback "IR" quando a imagem não carrega
- Animações ao rolar a página, contadores, faixa em movimento e barra de progresso
- Respeita a preferência de movimento reduzido do sistema
- Layout responsivo para celular, tablet e desktop

## Área restrita (login e painel)

O painel permite **adicionar, editar, ocultar e excluir projetos e certificados** direto pelo navegador, sem servidor próprio. Ele funciona assim:

- O site lê os dados dos arquivos `data/projetos.json` e `data/certificados.json`.
- No painel (`admin.html`), o login é feito com um **token de acesso do GitHub**. O painel usa a API do GitHub para gravar os arquivos JSON e as imagens dos certificados no repositório. Ao clicar em **Publicar alterações**, o GitHub Pages atualiza o site em 1 a 2 minutos, para todos os visitantes.
- Só quem tem permissão de escrita no repositório consegue publicar. O token não fica no código do site: cada pessoa digita o seu no login, e ele é guardado só no navegador (até fechar a aba, ou até sair, se marcar "Manter conectado").

### Configuração

1. Em `dados.js`, confira as duas primeiras variáveis: `OWNER` (seu usuário do GitHub) e `REPO` (nome do repositório do site).
2. Crie um token em **GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens**. Escolha só o repositório do site e, em **Repository permissions**, marque **Contents: Read and write**.
3. Abra `login.html` no site publicado, cole o token e entre.

### Certificados novos

Na aba **Certificados**, preencha título, instituição, horas e descrição e escolha o arquivo (JPG, PNG ou PDF, até 5 MB). As imagens são reduzidas automaticamente. Depois clique em **Publicar alterações**.

> Segurança: não compartilhe o token e use prazo de validade curto. Excluir um certificado no painel o remove do site, mas o arquivo continua na pasta `certificados` do repositório.

## Estrutura

```
.
├── index.html          # o site inteiro (HTML, CSS e JS)
├── login.html          # página de login
├── admin.html          # painel de projetos (área restrita)
├── painel.css          # estilo do login e do painel
├── dados.js            # configuração (OWNER, REPO) e funções compartilhadas
├── data/
│   ├── projetos.json   # projetos exibidos no site
│   └── certificados.json  # certificados exibidos no site
├── foto.jpg            # foto de perfil
├── certificados/
│   ├── mk.jpg          # Game 2D · MK+ Academy
│   ├── cs50.jpg        # CS50 · Harvard no Brasil
│   ├── bradesco.jpg    # Python Básico · Fundação Bradesco
│   ├── santander.jpg   # Python · Santander
│   ├── jornada.jpg     # Jornada Python · Hashtag
│   ├── devart.jpg      # DevArt: Um Novo Dia
│   └── rep.jpg         # Representante de Turma · UniCEUB
└── README.md
```

## Como publicar (GitHub Pages)

1. Envie todos os arquivos acima para a raiz do repositório.
2. Vá em **Settings → Pages**.
3. Em **Source**, escolha **Deploy from a branch**, selecione a branch `main` e a pasta `/ (root)`.
4. Salve e aguarde cerca de um minuto. O site fica no endereço mostrado na página.

> O GitHub diferencia maiúsculas de minúsculas. Mantenha os nomes `foto.jpg` e `certificados/` exatamente como estão.

## Como editar

### Cores

As cores ficam no início do `index.html`, no bloco `:root`:

```css
--bg:#F1EFE8;      /* fundo */
--ink:#111111;     /* texto e bordas */
--card:#FBFAF6;    /* cartões */
--accent:#B93A0B;  /* laranja de destaque */
```

O tema escuro tem seus próprios valores logo abaixo, nas regras `[data-theme="dark"]`.

### Textos e idiomas

O texto base está em português. A versão em inglês fica no atributo `data-en` do mesmo elemento:

```html
<h3 data-en="Software Engineering">Engenharia de Software</h3>
```

Ao mudar um texto, atualize os dois idiomas.

### Foto

Substitua o arquivo `foto.jpg`, de preferência uma imagem vertical ou quadrada com o rosto centralizado, e leve, de uns 100 a 200 KB. O enquadramento pode ser ajustado em `object-position` na regra `.photo img`.

### Novo certificado

1. Salve a imagem em `certificados/`, por exemplo `certificados/novo.jpg`.
2. Copie um bloco `<div class="box cert rv">` da seção de certificados e edite título, instituição, descrição e carga horária.
3. No botão do card, use `data-cert="novo"`.
4. No início do `<script>`, adicione a entrada no objeto `CERTS`:

```js
var CERTS={ ..., "novo":"certificados/novo.jpg" };
```

### Números em destaque

Os contadores usam `data-n` (valor) e `data-s` (sufixo, como `+`):

```html
<b data-n="6" data-s="+">0</b>
```

## Observações

- A fonte **Poppins** é carregada do Google Fonts, então o site precisa de internet para exibi-la como projetada. Sem ela, usa a fonte padrão do sistema.
- Os certificados são imagens comprimidas para manter a página leve. Alguns contêm dados pessoais, como número de registro. Cubra esses campos antes de publicar, se preferir.

## Contato

- E-mail: isaacramosrk@gmail.com
- LinkedIn: https://www.linkedin.com/in/isaac-ramos-4616b9368/
- GitHub: https://github.com/Izackzin
- Instagram: https://www.instagram.com/isaac.rmz1/

---

© 2026 Isaac Ramos. Todos os direitos reservados.
