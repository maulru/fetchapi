const informacoesCliente = [
    {
        cpf: 18875538081,
        nome: "Zézin"
    },{
        cpf: 18274968273,
        nome: "Pamela"
    }
]


const corpoTabela = document.querySelector(
    "[data-conteudo-tabela]")



const exibeCliente = (cpf,nome) =>{
    const linha = document.createElement('tr')
    const conteudoLinha = `
    <td>${cpf}</td>
    <td>${nome}</td>
    `

    linha.innerHTML = conteudoLinha
    return linha
}

informacoesCliente.forEach (indice =>{
    corpoTabela.appendChild(exibeCliente(indice.cpf,indice.nome))
})


