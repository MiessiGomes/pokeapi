async function getPokemon(){
    const response = await fetch('http://localhost:3000/pokemons-data')
    const pokemonArray = await response.json()

    const container = document.getElementById("container");

    pokemonArray.forEach((pokemon, index) => {
        const card = document.createElement("div")
        card.classList.add("card")

        const image = document.createElement("img")
        image.src = pokemon.imgUrl

        const nameElement = document.createElement("h2")
        nameElement.textContent = firstLetter(pokemon.name)
        
        const dexElement = document.createElement("p")
        dexElement.textContent = pokemon.dex

        const versionElement = document.createElement("p")
        versionElement.textContent = pokemon.version

        const heightElement = document.createElement("p")
        heightElement.textContent = pokemon.height
        
        const weightElement = document.createElement("p")
        weightElement.textContent = pokemon.weight

        //Pegar os 3 primeiros cards
        if (pokemonArray.length - index <= 8 && index < pokemonArray.length - 5){
            card.classList.add("first-legendary-cards");
        }

        //Pegar os 2 últimos cards
        if (pokemonArray.length - index <= 2){
            card.classList.add("second-legendary-cards");
        }

        card.appendChild(image)
        card.appendChild(nameElement)
        card.appendChild(dexElement)
        card.appendChild(versionElement)
        card.appendChild(heightElement)
        card.appendChild(weightElement)
        
        container.appendChild(card)
    })

    function firstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1); //Essa função aqui está pegando a primeira letra do nome que obtemos alí em cima e colocando em letra maiúscula !!
    }
}

getPokemon();