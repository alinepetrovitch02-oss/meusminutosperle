# Meus Minutos — publicação na Vercel

Esta versão mantém o aplicativo original em HTML, CSS e JavaScript puro. Não há etapa de build nem dependências de framework.

## Publicar pelo GitHub e Vercel

1. Descompacte este ZIP em uma pasta no computador.
2. Crie um repositório novo no GitHub (por exemplo, `meus-minutos-vercel`).
3. Envie para o repositório todos os arquivos e pastas desta versão, incluindo `index.html`, `sw.js`, `manifest.json` e `vercel.json`.
4. Acesse [Vercel](https://vercel.com/) e entre com sua conta GitHub.
5. Clique em **Add New → Project** e importe o repositório `meus-minutos-vercel`.
6. Em **Framework Preset**, selecione **Other**.
7. Deixe **Build Command** vazio (ou desativado) e **Output Directory** como `.` / raiz do projeto. Não configure uma pasta `dist`.
8. Clique em **Deploy**. A Vercel publicará o `index.html` e os arquivos estáticos.
9. A cada novo `push` para a branch conectada, a Vercel fará uma nova implantação automaticamente.

## Variáveis de ambiente

Nenhuma variável de ambiente é necessária. O aplicativo não utiliza chaves de API, credenciais ou serviços de backend.

## Armazenamento e primeiro acesso

Os dados do aplicativo continuam sendo salvos no `localStorage` do navegador/dispositivo, como na versão original. Eles não são sincronizados automaticamente entre aparelhos ou navegadores. No primeiro acesso em um navegador sem dados anteriores, o aplicativo solicita o nome e, em seguida, pergunta separadamente os minutos gravados desde o início, pagos, em análise, gravados hoje e rejeitados. O saldo restante é calculado como aceito (não pago).

## Consulta Oficial de Horas

O item **Consulta Oficial de Horas** abre uma tela interna que tenta exibir `https://painel-oficial-horas.vercel.app` em um iframe. Se o serviço externo bloquear a incorporação ou não carregar, a tela informa essa possibilidade e oferece o botão **Abrir painel em nova aba**. O painel externo permanece independente e não é modificado.

## Ajustes desta versão

- A opção Consulta Oficial de Horas abre uma tela dentro do Meus Minutos, com alternativa para abrir o painel oficial em uma nova aba se a incorporação não funcionar.
- O acesso à consulta usa um ícone de relógio/documento com legenda curta.
- O bloco visual “Valores totais” foi removido do Painel, sem alterar os demais cálculos e indicadores.


## Atualização de interface e responsividade

- O menu principal agora usa quatro botões quadrados de dimensões iguais, com ícones vetoriais de tamanho uniforme para Painel, Histórico, Configurações e Consulta Oficial de Horas.
- Os nomes continuam disponíveis para leitores de tela por `aria-label` e também como identificação/tooltip (`title`).
- A meta tag viewport existente foi preservada com escala inicial 1 e `viewport-fit=cover`, sem bloquear o zoom manual do usuário.
- Foram adicionados ajustes responsivos para reduzir transbordamentos horizontais em telas pequenas, mantendo o layout e a identidade visual.
- O cache do service worker foi atualizado para `meus-minutos-v19-vercel`, para evitar que o navegador mantenha a interface anterior após a publicação.

### Arquivos modificados nesta atualização

- `index.html`: menu com ícones, acessibilidade, alternativa de abertura do painel oficial e ajustes CSS responsivos.
- `sw.js`: atualização do identificador de cache.
- `README.md`: documentação das alterações e do comportamento da Consulta Oficial de Horas.

Os arquivos `manifest.json`, `vercel.json` e `LEIA-ME.txt` foram preservados sem alterações.


## Ajuste visual da Consulta Oficial de Horas

- Removida a moldura externa (fundo, borda e padding) que fazia o painel parecer encaixado em uma caixa.
- Removido o texto introdutório redundante acima do painel.
- O iframe agora ocupa toda a largura disponível e recebe mais altura em telas móveis.
- Mantidos o título, o botão Voltar, o endereço externo e o link alternativo para nova aba.
- O conteúdo do painel externo não foi alterado.
- Cache do service worker atualizado para `meus-minutos-v20-vercel`.

Arquivos modificados nesta etapa: `index.html`, `sw.js` e `README.md`.


## Refinamento do menu e da Consulta Oficial

- Ícones redesenhados em traço simples e uniforme.
- Botões do menu reduzidos para 48×48 px em telas maiores, 43×43 px em celulares e 40×40 px em telas muito estreitas.
- O menu mantém quatro botões iguais, alinhados e com o destaque amarelo do item ativo.
- Removida a mensagem e o botão alternativo abaixo da Consulta Oficial; se o site externo bloquear iframe, a área pode permanecer vazia.
- Cache do service worker atualizado para `meus-minutos-v21-vercel`.

Arquivos modificados: `index.html`, `sw.js` e `README.md`.


## Ajuste de menu e meta diária

- Os quatro ícones foram redesenhados em um conjunto visual consistente, com traços mais leves.
- Os botões do menu agora ficam distribuídos de uma ponta à outra da largura disponível, mantendo dimensões compactas e iguais.
- O botão “Iniciar nova meta diária” foi movido para baixo do título “Meta diária”, seguindo a organização visual da meta do ciclo.
- Nenhum cálculo, regra de negócio, dado ou identificador funcional foi alterado.
- Cache do service worker atualizado para `meus-minutos-v22-vercel`.

Arquivos modificados: `index.html`, `sw.js` e `README.md`.


## Menu — opção 3 e largura responsiva

- Aplicado o conjunto de ícones da opção 3, com desenho mais marcante e uniforme.
- O item selecionado mantém o fundo amarelo e o ícone escuro por meio das cores de estado já existentes.
- Os quatro botões agora dividem igualmente toda a largura do menu (quatro colunas flexíveis).
- A altura permanece compacta: 42 px em telas maiores, 40 px em celulares e 38 px em telas estreitas.
- Os SVGs mantêm proporção quadrada fixa; a largura dos botões não estica nem deforma os ícones.
- A organização da Meta diária e as demais funcionalidades da versão-base foram preservadas.
- Cache atualizado para `meus-minutos-v23-vercel`.

Arquivos modificados: `index.html`, `sw.js` e `README.md`.


## Atualização dos ícones do menu — v24

- Substituídos os quatro desenhos vetoriais do menu pelos quatro ícones recortados diretamente da imagem fornecida, na ordem: Início, Histórico, Configurações e Consulta/Registros.
- Os arquivos PNG preservam o desenho e a proporção de cada recorte; a exibição usa `object-fit: contain`, sem esticar, achatar ou cortar.
- Os quatro botões continuam dividindo igualmente a largura disponível e mantêm as alturas compactas existentes (42 px, 40 px e 38 px conforme a largura da tela).
- O ícone do botão selecionado fica escuro sobre o fundo amarelo; os demais permanecem claros.
- Atualizado o identificador de cache do service worker para `meus-minutos-v24-vercel`.

Arquivos modificados: `index.html`, `sw.js`, `README.md` e os quatro novos arquivos `icons/inicio.png`, `icons/historico.png`, `icons/configuracoes.png` e `icons/consulta-registros.png`. Nenhum arquivo de lógica de cálculos, armazenamento ou histórico foi alterado.
