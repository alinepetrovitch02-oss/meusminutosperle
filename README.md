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

O item **Consulta Oficial de Horas** abre `https://painel-oficial-horas.vercel.app` em uma nova aba. O painel externo permanece independente e não é recriado neste projeto.

## Ajustes desta versão

- A opção Consulta Oficial de Horas abre uma tela dentro do Meus Minutos, com alternativa para abrir o painel oficial em uma nova aba se a incorporação não funcionar.
- O acesso à consulta usa um ícone de relógio/documento com legenda curta.
- O bloco visual “Valores totais” foi removido do Painel, sem alterar os demais cálculos e indicadores.
