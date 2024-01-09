const albumCardTemplate = document.querySelector("[data-album-template]")
const albumCardContainer = document.querySelector("[data-album-cards-container]")
const albumSearchInput = document.querySelector("[data-search]") 

let albuns = []

albumSearchInput.addEventListener("input", e => {
    const value = e.target.value
    albuns.forEach(album =>{
        const albumVisible = album.title.includes(value) 
        album.element.classList.toggle("hide",!albumVisible)

    })
})

fetch("https://jsonplaceholder.typicode.com/albums")
.then(res => res.json())
.then(data =>{
    albuns = data.map(album => {
        const card = albumCardTemplate.content.cloneNode(true).children[0]
        const header = card.querySelector("[data-header]")
        const body = card.querySelector("[data-body]")

        header.textContent = album.title
        body.textContent = album.id
        albumCardContainer.append(card)
        return {title: album.title, id: album.id, element:card}
        
    });

})