const cards = document.querySelectorAll('.card')
    cards.forEach(card => {
        card.setAttribute('style', 'background-color: #ff8533;')
    }) 

const titulo = document.querySelectorAll('.titulo-card')
    titulo.forEach(titulo=> {
        titulo.setAttribute('style', 'margin-top:15%')
        titulo.textContent = 'Meu Card'
    })

const description = document.querySelectorAll('.descricao-card')
    description.forEach(descriptions => {
        descriptions.setAttribute('style', 'margin-top:25%; color: #ffffff; font-size: 15px;')
        descriptions.textContent = 'Descrição modificada pelo JavaScript'
    }) 

const buttonsEdit = document.querySelectorAll('.botao-editar')
function editarcard() {
    alert('Clicou em Editar!')
}
    buttonsEdit.forEach(buttons => {
        buttons.setAttribute('style', 'margin-top:30%; background-color: #007d00; border-radius: 5px; border: none; color: #ffffff; width: 50px; height: 25px; cursor: pointer')
        buttons.onclick = editarcard;
    })

const buttonsDelete = document.querySelectorAll('.botao-apagar')
function apagarCard() {
    let confirmation = confirm('Tem certeza que quer apagar este card?')
    // console.log(confirmation)

    if(confirmation === true){
        alert('Confirmado!')
    }
    if(confirmation === false){
        alert('Cancelou')
    }
}
buttonsDelete.forEach(buttons2 => {
    buttons2.setAttribute('style', 'margin-top:25%; background-color: #ff0000; border-radius: 5px; border: none; color: #ffffff; width: 50px; height: 25px;')
    buttons2.onclick = apagarCard;
})  
