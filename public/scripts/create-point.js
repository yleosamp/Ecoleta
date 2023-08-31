function populateUFs(){
  const ufSelect = document.querySelector("select[name=uf]")

  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {
      for(const state of states){
        ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
      }
    } )
}

populateUFs()

function getCities(event){
  const citySelect = document.querySelector("select[name=city]")
  
  let ufValue = event.target.value
  let url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

  const stateInput = document.querySelector("input[name=state]")
  const indexOfSelectedState = event.target.selectedIndex
  stateInput.value = event.target.options[indexOfSelectedState].text
  
  citySelect.innerHTML = "<option value>Selecione a cidade</option>"
  citySelect.disabled = true

  fetch(url)
    .then( res => res.json() )
    .then( cities => {
      for(const city of cities){
        citySelect.innerHTML += `<option value=${city.nome}>${city.nome}</option>`
      }

      citySelect.disabled = false
    })
}

document
  .querySelector("select[name=uf]")
  .addEventListener("change", getCities)

// ÍTENS DE COLETA

//PEGANDO TODOS LI
const itemsToCollect = document.querySelectorAll(".items-grid li")

for(const item of itemsToCollect){
  item.addEventListener("click", handleSelectedItem) // Estou adicionado um "ouvidor" de eventos e mandando para a função abaixo(que está escrita)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event){ // "event" Está pegando tdo que o EventListener está ouvindo
  const itemLi = event.target // Informações do li
  
  // Remover e adicionar classes
  itemLi.classList.toggle("selected")

  const itemId = itemLi.dataset.id //Estou acessando o object "event" e pegando o target dele. Toda vez que clico em um item, o target recebe alguma coisa e retorna no console no navegador

  // Verificar se existem itens selecionador, caso
  // tenha, pegar os itens selecionados
  const alreadySelected = selectedItems.findIndex( function(item){
    const itemFound = item == itemId
    return itemFound
  })

  // Se já estiver um item selecionado, remova ele de selected
  if(alreadySelected >= 0){
    // Tirar da seleção
    const filteredItems = selectedItems.filter( function(item){
      const itemIsDifferent = item != itemId
      return itemIsDifferent
    } )

    selectedItems = filteredItems
  }else{
      // Se não estiver, adicione a seleção
    selectedItems.push(itemId)
  }

  // Atualiza o input hidden com os itens selecionados
  collectedItems.value = selectedItems
}