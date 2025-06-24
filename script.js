const tabuadaForm = document.getElementById("tabuadaForm");
const numero = document.getElementById("numero");
const resultado = document.getElementById("resultado");
const nS = document.getElementById("numeroSelecionado");

tabuadaForm.addEventListener("submit", function(event){
    event.preventDefault();

    nS.innerHTML = `Tabuada do ${numero.value}`;

    const num = parseInt(numero.value);
    let tabuada = "";
    for (let i = 1; i <= 10; i++) {
        tabuada += `${num} x ${i} = ${num * i}<br>`;
    }

    resultado.innerHTML = tabuada;
})