// pegar o q ta escrito no inputText (ao clickar no addButton) ✔
// criar um novo input e label child do newItem ✔
// colocar o q foi criado ao fim do newItem ✔
// colocar o q foi escrito dentro do label ✔
// limpar o input 

const addButton = document.querySelector('#addButton')

addButton.addEventListener("click", addItem)
window.document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addItem()
    }
});

function addItem() {
    let itemTyped = document.querySelector("#insertText").value
    let body = document.querySelector("#border")

    let newItem = document.createElement("p")
    newItem.className = "newItem"
    let newItemInput = document.createElement("input")
    newItemInput.type = "checkbox"
    newItemInput.className = "newItem--checkbox"
    let newItemLabel = document.createElement("label")
    body.appendChild(newItem)
    newItem.appendChild(newItemInput)
    newItem.appendChild(newItemLabel)

    newItemLabel.innerText = itemTyped

    let inputTxt = document.querySelector("#insertText")
    inputTxt.value = ""
}


























/*addButton.addEventListener("click", addToList())

function addToList() {
    const newCheckBox = checkBox.innerHTML
    const newItemChild = document.createElement("label")
    newItemChild.innerText = inputText
    
    const newPItem = document.createElement("p")
    newPItem.innerHTML = newCheckBox + newItemChild

    newItem.push(newPItem)
}*/