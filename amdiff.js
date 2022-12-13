//***************************** Variáveis Globais *****************************//

const Automerge = require('automerge') // Carrega o automerge no node
var fs = require("fs"); // file system
let verbose = false; // Ativa (true) e desativa (false) o modo verboso

//***************************** Funções *****************************//

//Função para exibir o manual:
function help() {

console.log("AMDIFF v0.1.0")
console.log("")
console.log("AMDIFF is a command line comparision utility for JSON-Automerge files with save file function for differences")
console.log("")
console.log("Usage:")
console.log("    node amdiff.js <old_file> <actual_file> [verbose]")
console.log("    node amdiff.js help")
console.log("")
console.log("Help:")
console.log("    Displays this manual")
console.log("")
console.log("Old_file:")
console.log("    Name of previous file")
console.log("")
console.log("Actual_file:")
console.log("    Name of actual file")
console.log("")
console.log("Verbose:")
console.log("    Enable verbose mode")
console.log("")
console.log("More Information:")
console.log("")
console.log("    https://github.com/fabiobosisio/amdiff")
console.log("")
console.log("    Please report bugs at <https://github.com/fabiobosisio/amdiff/blob/master/README.md>")
console.log("")
}

// Função de leitura do arquivo Automerge-Json
function recompose(file){
  let output;
  // Remove extensoes passadas no nome do arquivo nos argumentos
  file = file.substr(0, file.lastIndexOf('.')) || file;
  file = file+".am"
  // Verifica se o arquivo existe localmente
  if(!fs.existsSync(file)) {
    ('\x1b[36m%s\x1b[0m',"Arquivo inexistente");
  }
  else {
    // Carrega o arquivo
    output = Automerge.load(fs.readFileSync(file, {encoding: null}));
    return output;

  }
}

// Função para verificar se o arquivo está vazio
function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}

// Função de exibição do JSON formatado
function show(out){
  console.dir(out, { depth: null} );
  return null;
}

//***************************** Módulo Principal *****************************//

if(process.argv[4] == 'verbose'){ verbose = true;} // Habilita o modo verboso

if (process.argv[2] == 'help' || process.argv[2] == 'Help' || process.argv[2] == 'h' || process.argv[2] == null  || process.argv[3] == null){ // Exibe o manual
  help();
  return null
}

let ant = recompose(process.argv[2]) // Carrega o arquivo anterior
if(verbose) {console.log('\x1b[36m%s\x1b[0m',"Arquivo anterior:"); show(ant);}

let pos = recompose(process.argv[3]) // Carrega o arquivo atual
if(verbose) {console.log('\x1b[36m%s\x1b[0m',"Arquivo atual"); show(pos);}
 			
let filediff  = Automerge.getChanges(ant,pos);// Obtém a diferença entre o arquivo local e o conteudo consolidado da cadeia
if(verbose) console.log('\x1b[36m%s\x1b[0m',"Diferenca obtida com sucesso");	

if (isEmpty(filediff)){ // Se não houver diferenças sai
  console.log('\x1b[1m\x1b[31m%s','\nNao tem diferencas entre os arquivos!','\x1b[0m\n');
  return null
}else{
  let old = process.argv[2].substr(0, process.argv[2].lastIndexOf('.')) || process.argv[2];
  let newest = process.argv[3].substr(0, process.argv[3].lastIndexOf('.')) || process.argv[3];
  fs.writeFileSync(old+'-'+newest+".diff", JSON.stringify(filediff), {encoding: null}); // Salva o arquivo local .diff com a diferença entre os dois arquivos
  if(verbose) console.log('\x1b[36m%s\x1b[0m',"Arquivo salvo com sucesso"); 
}
