# AMDIFF: Command line Automerge-Json file comparison utility

AMDIFF is a command line comparision utility for JSON-Automerge files with save file function for differences

- [Commands](docs/cmds.md): list of all available commands


## Install (5 steps)

1. Install `NPM`:

```
sudo apt install npm
```
2. Install `NodeJS`:

```
sudo apt install nodejs
```

3. Install `Automerge`:

```
npm i automerge@1.0.1-preview.7
```

4. Clone the `amrw` repository to use the tool:

```
git clone https://github.com/fabiobosisio/amdiff.git
```

5. Use the editor inside the `/home/user/amdiff` directory

The versions used in the tests were:
-   NPM v8.13.2
-   NodeJS v14.15.4
-   Automerge 1.0.1-preview.7

<!--
## Basics

Os comandos do am.js são os abaixo:

- `init` :     Inicializa um arquivo Automerge
- `set`:       Manipulação do arquivo, habilita diversas funções de manipulação como: criar objetos, criar campos dentro do objeto, idexados ou não.
- `rem`:    Apaga o conteúdo de um determinado objeto (Por enquanto só no primeiro nível)

Execução passo a passo:

- Inicializando um arquivo Automerge:

```
node am.js p2p init
```

- Criando um objeto:

```
node am.js p2p set "Sections" object
{"Sections":{}}
```

- Criando um campo dentro do objeto:

```
node am.js p2p set "Sections" field "Introduction" string "P2P networking is..."
{{ "Sections": { "Introduction":"P2P" } }
```

- Criando mais um campo dentro do objeto:

```
node am.js p2p set "Sections" field "History" string "..."
{ "Sections": { "Introduction":"P2P","History":"..." } }
```

- Criando um array dentro do objeto:

```
node am.js p2p set "Sections" field "Applications" array
{ "Sections": { "Introduction":"P2P","History":"...","Applications":[] } }
```

- Criando um objeto no indice 0 do array que está dentro de um objeto:

```
node am.js p2p set "Sections" field "Applications" array index 0 object
{ "Sections": { ...,"Applications":[{}] } }
```

- Criando um objeto no indice 1 do array que está dentro de um objeto:

```
node am.js p2p set "Sections" field "Applications" array index 1 object
{ "Sections": { ...,"Applications":[{},{}] } }
```

- Criando um campo no  objeto do indice 0 do array que está dentro de um objeto:

```
node am.js p2p set "Sections" field "Applications" array index 0 field "Napster" string "..."
{ "Sections": { ...,"Applications":[{"Napster":"..."},{}] } }
```

- Criando um campo no  objeto do indice 1 do array que está dentro de um objeto:*

```
node am.js p2p set "Sections" field "Applications" array index 1 field "Freechains" string "..."
{ "Sections": { ...,"Applications":[{"Napster":"..."},{"Freechains":"..."}] } }
```

Poderíamos incluir no array elementos do tipo item simples, para isso basta substituir o campo fied após o indice pela palavra item.

Temos o seguinte objeto:


```
{
    "Sections": {
        "Introduction": "P2P networking is ..."
        "History": "..."
        "Applications": [ {"Napster":"..."}, {"Freechains":"..."} ]
    },
}
```

- Apaga o conteúdo de um determinado objeto:

```
node am.js p2p rem 'History'
```

Por fim temos o seguinte objeto:


```
{
    "Sections": {
        "Introduction": "P2P networking is ..."
        "Applications": [ {"Napster":"..."}, {"Freechains":"..."} ]
    },
}
```
-->
