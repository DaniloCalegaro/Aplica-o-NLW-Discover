import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// pegar todos os botoes com as classes check
const checkButtons = document.querySelectorAll(".actions a.check")
checkButtons.forEach(button => {
    button.addEventListener("click", handleClick)
})

//Quando clicador no botão delete

const deleteButton = document.querySelectorAll(".actions a.delete")
deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})


function handleClick(event, check = true) {  
    event.preventDefault();

    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action",`/question/${roomId}/${questionId}/${slug}`)
    
    modalTitle.innerHTML = check ? "Marcar como lido" : "Excluir esta pergunta"
    modalDescription.innerHTML = check ? "Tem certeza que deseja marcar como lida esta pergunta?" : "Tem certeza que deseja excluir esta pergunta?"
    modalButton.innerHTML = check ? "Sim, marcar como lida" : "Sim, excluir"
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    //abrir modal
    modal.open()
}
