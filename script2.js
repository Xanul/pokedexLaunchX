const pokeBody = document.getElementById("pokeBody");
const pokeLight = document.getElementById("pokeLight");
const pokeimgContainer = document.getElementById("pokeimgContainer");
const pokeNumber = document.getElementById("pokeNumber");
const pokeImg = document.getElementById("pokeImg");
const pokeName = document.getElementById("pokeName");
const pokeSearch = document.getElementById("pokeSearch");
const pokeInput = document.getElementById("pokeInput");
const pokeStatsContainer = document.getElementById("pokeStatsContainer");
const pokeStat1 = document.getElementById("pokeStat1");
const pokeStat2 = document.getElementById("pokeStat2");
const pokeStat3 = document.getElementById("pokeStat3");
const pokeStat4 = document.getElementById("pokeStat4");
const pokeTypeContainer1 = document.getElementById("pokeTypeContainer1");
const pokeTypeContainer2 = document.getElementById("pokeTypeContainer2");
const pokeType1 = document.getElementById("pokeType1");
const pokeType2 = document.getElementById("pokeType2");


const typeColorsMain = {
    electric: '#F9CF30',
    normal: '#AAA67F',
    fire: '#F57D31',
    water: '#6493EB',
    ice: '#9AD6DF',
    rock: '#B69E31',
    flying: '#A891EC',
    grass: '#74CB48',
    psychic: '#FB5584',
    ghost: '#70559B',
    bug: '#A7B723',
    poison: '#A43E9E',
    ground: '#DEC16B',
    dragon: '#DA627D',
    steel: '#B7B9D0',
    fighting: '#C12239',
    default: '#2A1A1F',
};

const typeColorsSecond = {
    electric: '#fef5d6',
    normal: '#f1f1f6',
    fire: '#FDE5D6',
    water: '#e3ebfb',
    ice: '#e6f7f9',
    rock: '#F0EFEF',
    flying: '#e6e6f0',
    grass: '#e3f5da',
    psychic: '#fedde6',
    ghost: '#e2ddeb',
    bug: '#edf1d3',
    poison: '#e6d9e6',
    ground: '#f1e6d9',
    dragon: '#F3CFD8',
    steel: '#f1f1f6',
    fighting: '#f1d9d9',
    default: '#2A1A1F',
}

const fetchPokemon = (event) => {

    event.preventDefault();

    const pokeName2 = event.target.pokemon.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName2.toLowerCase()}`

    fetch(url).then((res) => {
        if (res.status != "200"){
            console.log(res);
            pokeImg.setAttribute("src", "./assets/pokeSad.png");
            pokeName.textContent = "Not Found!";
        }
        else {
            return res.json();
        }
        
    }).then((data) => {
        console.log(data);
        renderPokemonData(data);
    })


    



    

}

// const searchPokemon = event => {


//     event.preventDefault();
//     const {value} = event.target.pokemon;

//     fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
//     .then(data => data.json())
//     .then(response => renderPokemonData(response));

    

    
    
// }

const renderPokemonData = data => {
    
    console.log(data);

    const name = data.name;
    const number = data.id;
    const sprite = data.sprites.other["official-artwork"].front_default;
    const stats = data.stats;
    const types = data.types;

    pokeNumber.textContent = "ID: " + number;
    pokeImg.setAttribute("src", sprite);
    pokeName.textContent = name;
    pokeStat1.textContent = "HP: " + stats[0].base_stat;
    pokeStat2.textContent = "Attack: " +stats[1].base_stat;
    pokeStat3.textContent = "Defense: " +stats[2].base_stat;
    pokeStat4.textContent = "Speed: " +stats[5].base_stat;
    
    pokeType1.textContent = types[0].type.name;
    types[1] ? pokeType2.textContent = types[1].type.name : pokeType2.textContent = "";
    
    setCardColor(types);
    

    // const {stats , types } = data;

    // pokeImg2.setAttribute("src", sprite)
    // pokeName2.textContent = data.name;
    // console.log(pokeImg2);
    // pokeID.textContent = `No. ${data.id}`;
    

}

const setCardColor = types => {
    
    console.log(types);

    const colorMain = typeColorsMain[types[0].type.name];
    const colorMain2 = types[1] ? typeColorsMain[types[1].type.name]: typeColorsMain.default;

    const colorAlt = typeColorsSecond[types[0].type.name];
    const colorAlt2 = types[1] ? typeColorsSecond[types[1].type.name] : typeColorsSecond.default;


    // const colorAlt2 = types[1] ? typeColorsSecond[types[1].type.name] : typeColorsSecond.default;

    



    // pokeimgContainer.style.background = "linear-gradient(to right top, #65dfc9, #6cdbed)";
    pokeimgContainer.style.background = colorAlt;
    pokeTypeContainer1.style.background = colorMain;
    pokeTypeContainer2.style.background = colorMain2;
    // pokeBody.style.background = colorAlt;
    // pokeFondo.style.background = colorOne;
    // pokeLight.style.backgroundColor = colorOne;

    
   

    
    
    
    
}