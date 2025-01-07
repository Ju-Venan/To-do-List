const input = document.getElementById("input")
const btn = document.getElementById("botao")
const list = document.getElementById("lista")


btn.addEventListener("click",adicionarTarefa)

function adicionarTarefa(){

    if(input.value === ""){
        alert("Insira a Tarefa")
        return
    }

const newTask = input.value

const li = document.createElement("li")
 
li.textContent = newTask

list.appendChild(li)



const btnExcluir = document.createElement("button")

btnExcluir.classList.add("btnExcluir")

btnExcluir.textContent= "Excluir"

li.appendChild(btnExcluir)

btnExcluir.addEventListener("click", excluir)

function excluir(){
li.remove()
}

const btnMarcar = document.createElement("button");

btnMarcar.classList.add("btnMarcar")

btnMarcar.textContent = "Marcar";

li.appendChild(btnMarcar);

// Evento para riscar a tarefa
btnMarcar.addEventListener("click", () => {
    li.classList.toggle("riscado"); // Alterna a classe 'riscado' para riscar/desriscar
});

input.value=""
}
