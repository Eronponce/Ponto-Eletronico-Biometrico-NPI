const botao = document.getElementById("btnClique")

botao.addEventListener("click", newTabela)

function dados(){
  var fm=document.forms.namedItem("formulario").elements[0].value;
  document.write(fm)  
  document.write(Date())
}

function newTabela(){
  var tabela = document.createElement("table");
  var thead = coument.createElement("thead");
  var tbody = document.createElement("tbody");
  document.getElementById("tabelaDados").appendChild(newTabela);

  var container = document.getElementById("container");
container.innerHTML = [
  '<table>',
  '<thead>',
  '<tr>',
  '<th>id</th>',
  '<th>col1</th>',
  '<th>col2</th>',
  '<th>col3</th>',
  '</tr>',
  '</thead>',
  '<tbody>',
  '<tr>',
  '<td>1</td>',
  '<td>data</td>',
  '<td>data</td>',
  '<td>data</td>',
  '</tr>',
  '<tr>',
  '<td>2</td>',
  '<td>data</td>',
  '<td>data</td>',
  '<td>data</td>',
  '</tr>',
  '<tr>',
  '<td>3</td>',
  '<td>data</td>',
  '<td>data</td>',
  '<td>data</td>',
  '</tr>',
  '</tbody>',
  '</table>'
].join("\n");
}




/*let todoList

function formatDate(date) {
    // formata a data para o formato DD/MM/YYYY
    const time = new Date(date);
    return `${time.getDate()}/${time.getMonth()}/${time.getFullYear()}`;
  }


function saveList (){
    localStorage.setItem("alunos", JSON.stringify(todoList));
}



/*
const minha_propriedade = localStorage.getItem('teste1');
alert("Valor:" + minha_propriedade);

localStorage.removeItem('re');

let registrarBotao = document.querySelector('button');*/
