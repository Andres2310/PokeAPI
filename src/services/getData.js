const API_URL = "https://pokeapi.co/api/v2/pokemon/";
async function getPokemonByName(pokemonName) {
  try {
    const response = await fetch(`${API_URL}${pokemonName.toLowerCase()}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default getPokemonByName
