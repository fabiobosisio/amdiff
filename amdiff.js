//***************************** Variáveis Globais *****************************//

const Automerge = require('automerge') // Carrega o automerge no node
var fs = require("fs"); // file system

//***************************** Funções *****************************//
// Função de leitura do arquivo Automerge-Json
function recompose(file){
  let output;
  // Remove extensoes passadas no nome do arquivo nos argumentos
  file = file.substr(0, file.lastIndexOf('.')) || file;
  file = file+".am"
  // Verifica se o arquivo existe localmente
  if(!fs.existsSync(file)) {
    if(verbose) console.log("Arquivo inexistente");
  }
  else {
    // Carrega o arquivo
    output = Automerge.load(fs.readFileSync(file, {encoding: null}));
    return output;

  }
}
 
let ant = recompose(process.argv[2])
let pos = recompose(process.argv[3])
 			
// Obtém a diferença entre o arquivo local e o conteudo consolidado da cadeia
let filediff  = Automerge.getChanges(ant,pos);		

// Salva o arquivo local .automerge com os metadados automerge do json
fs.writeFileSync(process.argv[2]+'-->'+process.argv[3]+".diff", JSON.stringify(filediff), {encoding: null}); 
						
//console.log('\x1b[36m%s\x1b[0m',`\nDiferenca entre o arquivo local e o conteudo da cadeia:`);
//console.log(Automerge.load(filediff));

