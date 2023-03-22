
// import React, { useEffect, useState } from 'react'
// // import React, { useState } from "react"; 8k (gzipped: 3.3k)
// import PokemonThumb from './components/PokemonThumb'
// import PokemonDetails from './components/PokemonDetails'
// import Axios from "axios"; //  15.7k (gzipped:  5.4)
// // import 

// const App = () => {

//    const[allPokemons, setAllPokemons] = useState([])
//    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=10')
  


//   const getAllPokemons = async () => {
//     const res = await fetch(loadMore)
//     const data = await res.json()

//     setLoadMore(data.next)

//     function createPokemonObject(results)  {
//       results.forEach( async pokemon => {
//         const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
       
//         const data =  await res.json()
//         setAllPokemons( currentList => [...currentList, data])
//         await allPokemons.sort((a, b) => a.id - b.id)
//       })
//     }
//     createPokemonObject(data.results)
//   }

//  useEffect(() => {
//   getAllPokemons()
//  }, [])



// // const [pokemonName, setPokemonName] = useState("");
// const [pokemonChosen, setPokemonChosen] = useState(false);
// const [pokemon, setPokemon] = useState({
//   name: "",
//   species: "",
//   img: "",
//   hp: "",
//   attack: "",
//   defense: "",
//   type: "",
 
// });


// const [pokemonName, setPokemonName] = useState("");
//   const SearchPokemon = () => {
//     Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
//       (Response) => {
//         setPokemonName({
//       name: pokemonName,
//       species: Response.data.species.name,
//       img: Response.data.species.front_default,
//       hp: Response.data.stats[0].base_stat,
//       attack: Response.data.stats[1].base_stat,
//       defense: Response.data.stats[2].base_stat,
//       type: Response.data.types[0].type.name,
    

//        });
//        setPokemonChosen(true);
//       });
//   };


 
//   return (

//     <div className="App">

//     {/* <div className="app-contaner"> */}
//     <div className="TitleSection"> 
//       <h1>PokemDex</h1>
//        <input type="text" onClick={(event) => {setPokemonName(event.target.value);
//        }} 

//        />
//        <button onClick={SearchPokemon}> Search Pokemon</button>

//     </div>
      
//       <div className='DisplaySection'> {!pokemonChosen ? (<h1>Please Choose a pokemon</h1>
//       ) : (
//         <>
//         <h1>{pokemon.name}</h1>
//         <img src={pokemon.img} />
//         <h3>species: {pokemon.species}</h3>
//         <h3>type: {pokemon.type}</h3>
//         <h4>Hp: {pokemon.hp}</h4>
//         <h4>attack: {pokemon.attack}</h4>
//         <h4>defense: {pokemon.defense}</h4>

//         </>
//         )}
//         </div>
        
        

//       <div>

        
//       </div>
//       <div className="pokemon-container">
//         <div className="all-container">
//           {allPokemons.map( (pokemonStats, index) => 
//             <PokemonThumb
//               key={index}
//               id={pokemonStats.id}
//               image={pokemonStats.sprites.other.dream_world.front_default}
//               name={pokemonStats.name}
//               type={pokemonStats.types[0].type.name}
//             />)}
      
          
//         </div>
//           <button className="previous_load" onClick={() => getAllPokemons()}>Previous</button>
//           <button className="load-more" onClick={() => getAllPokemons()}>Load more</button>

//       </div>
      
//     {/* </div> */}

//     </div>
    
//   );
// }

// export default App;


import React from 'react';
import Main from './Components/Main';
import './Components/style.css'
function App() {
  return (
    <>
      <Main/>
    </>
  );
}

export default App;
