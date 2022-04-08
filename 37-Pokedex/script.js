const poke_container = document.getElementById("poke-container");
const pokemon_count = 150;

const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};

const main_types = Object.keys(colors);

const fetchPokemons = async () => {
    for(let i = 1; i <= pokemon_count; i++){
        await getPokemon(i);
    }
}


const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url)
    const data = await res.json();
    
    createPokemonCard(data);
    
}

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");

    const id = pokemon.id.toString().padStart(3,"0");

    const poke_types = pokemon.types.map(type => type.type.name)
    const type = main_types.find(type => poke_types.indexOf(type) > - 1)
    console.log(poke_types);

    const color = colors[type];
    pokemonEl.style.backgroundColor = color;

    console.log(id);

    const pokemonInnerHtml = `
    <div class="img-container">
        <img class="img-container" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" alt="">
    </div>

    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${pokemon.name}</h3>
        <small class="type">Type: <span>${type}</span></small>
    </div>
    `;

    pokemonEl.innerHTML = pokemonInnerHtml;
    poke_container.appendChild(pokemonEl);
}

fetchPokemons()
