const API_URL = "https://rickandmortyapi.com/api/character";

export const fetchCharacters = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Error al cargar los datos.");
    }
    const data = await response.json();
    return data.results.map((character) => ({
        id: character.id,
        name: character.name,
        species: character.species,
        image: character.image,
      }));
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };
