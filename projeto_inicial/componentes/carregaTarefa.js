
import { criaData } from "./criarData.js"

export const carregaTarefa = () => {
    const lista = document.querySelector('[data-list]')

    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || []

    lista.innerHTML = " "

    const datasUnicas = removeDatasRepetidas(tarefasCadastradas)

    datasUnicas.forEach((dia) => {
        lista.appendChild(criaData(dia))
    })
}