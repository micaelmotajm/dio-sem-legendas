# DIO Sem Legendas

Extensão para navegadores baseados em Chromium criada para melhorar a experiência de estudo na plataforma DIO.

## Funcionalidades

- Ocultar legendas em players compatíveis
- Ativar ou desativar a ocultação pelo popup da extensão
- Salvar a preferência do usuário no navegador
- Suporte a páginas da DIO e players incorporados do YouTube

## Tecnologias utilizadas

- JavaScript
- HTML
- CSS
- Chrome Extensions API
- Manifest V3
- DOM API
- Chrome Storage API

## Estrutura do projeto

```text
dio-sem-legendas/
├── manifest.json
├── content.js
├── popup.html
├── popup.css
├── popup.js
├── README.md
├── LICENSE
├── .gitignore
└── screenshots/
```

## Instalação local

1. Baixe ou clone este repositório.
2. Abra o Chrome ou outro navegador Chromium.
3. Acesse `chrome://extensions`.
4. Ative o **Modo do desenvolvedor**.
5. Clique em **Carregar sem compactação**.
6. Selecione a pasta do projeto.

## Uso

Abra uma aula compatível da DIO e clique no ícone da extensão.

Use a opção **Ocultar legendas** para ativar ou desativar a função.

## Objetivo do projeto

Este projeto foi criado como exercício prático de desenvolvimento web e de extensões para navegador, aplicando conceitos de:

- manipulação do DOM;
- eventos em JavaScript;
- armazenamento local;
- content scripts;
- Manifest V3.

## Status

Versão 1.0.0 — funcionalidade principal estável.

## Autor

Micael Mota
