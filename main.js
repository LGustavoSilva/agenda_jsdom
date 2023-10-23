const form = document.getElementById('form-contact')
const nomeContato = []
const numeroContato = []


let linhas = ''

form.addEventListener('submit',function(event){
    event.preventDefault();

    inserirContato();

    atualizaLista();
})

function inserirContato() {
    const inputNomeContato = document.getElementById('contact-name')
    const inputNumberContato = document.getElementById('contact-number')

    if (nomeContato.includes(inputNomeContato.value)) {
        alert(`o Contato ${inputNomeContato.value} já existe`)
    }
    else if (numeroContato.includes(inputNumberContato.value)) {
        alert(`o Número ${inputNumberContato.value} já pertence a outro Contato`)
    }
    else{
        nomeContato.push(inputNomeContato.value)
        numeroContato.push(inputNumberContato.value)

        let linha = '<tr>'

        linha += `<td>${inputNomeContato.value}</td>`
        linha += `<td>${inputNumberContato.value}</td>`
        linha += '</tr>'

        linhas += linha
    }
    inputNomeContato.value = ''
    inputNumberContato.value = ''
}

function atualizaLista(){
    const Tabela = document.querySelector('tbody')
    Tabela.innerHTML = linhas
}
