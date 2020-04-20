# Integtação com API do GitHub

Client de integração com a API do github criado com react.

## Informações sobre o projeto

#### Ferramentas e frameworks

 - React
 - Redux
 - Redux Thunk
 - Redux Logger
 - Sass
 - Hooks
 - I18n translations
 - axios
 
 
 ## Instruções para rodar local
 
 - Navegue até a raiz do projeto através do terminal e execute o seguinte comando `yarn install`.
 - Após executar o passo anterior inicie o projeto da raiz através do terminal com o comando `yar start`.
 - O navegador deve abrir automaticamente na página inicial do projeto, caso isso não ocorra acesse o seguinte endereço no seu navegador `http://localhost:3000`
 
 ## Rotas
 
 `/` - Página que contém o campo de pesquisa
 
 `/user-details/:username` - Página que exibe o resultado da pesquisa

## Estrutura de pastas

```
github-api-client
    └── node_modules - modulos instalados
    └── public - bundle
    └── src
        └── api - configuração do axios e abstração da api do github
        └── config - arquivo de configuração 
        └── pages - páginas do projeto
        └── redux - configuração e implementação do redux
        └── routes - rotas do projeto
        └── styles - folhas de estilo
        └── translations - configuração e implementação da internacionalização no projeto
```

## Live

Para navegar no projeto acesse o link abaixo

https://github-api-client.herokuapp.com/


