import React, { useState, useEffect } from "react";
import { fetchCharacters } from "../services/RickAndMortyServices";

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const loadCharacters = async () => {
            try {
                const data = await fetchCharacters();
                setCharacters(data.slice(0, 20)); 
            } catch (error) {
                
            }
        };

        loadCharacters();
    }, []);

    return (


        <div>
            <h1 className="titulo">Lista de Personajes de Rick and Morty</h1>
            <ul className="ul">
                {characters.map((character) => (
                    <li key={character.id} className="li">
                        <img src={character.image} alt={character.name} className="imagen" />
                        <div className="datos">
                            <strong>{character.name}</strong>
                            <p>Especie: {character.species}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CharacterList;
