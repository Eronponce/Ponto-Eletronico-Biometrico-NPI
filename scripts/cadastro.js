const botaoCadastrar = document.getElementById("cadastrar")

botaoCadastrar.addEventListener("click", dadosCadastro)

function dadosCadastro(){
  var valor0=document.forms.namedItem("formularioCadastro").elements[0].value;
  var valor1=document.forms.namedItem("formularioCadastro").elements[1].value;
  var valor2=document.forms.namedItem("formularioCadastro").elements[2].value;
  var valor3=document.forms.namedItem("formularioCadastro").elements[3].value;
  document.writeln(valor0) 
  document.writeln(valor1)
  document.writeln(valor2)
  document.writeln(valor3)
  /*
  var novaTabela = document.createElement("table");
document.getElementById("valornome").appendChild(novaTabela);
var cabecalho = document.createElement("thead");
var corpo = document.createElement("tbody");

tabela.appendChild(cabecalho);
tabela.appendChild(corpo);
document.getElementById("valornome").appendChild(tabela);
*/
}

