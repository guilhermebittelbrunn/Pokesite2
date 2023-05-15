import Card from "./Card"
import { useState, useEffect } from "react"
import axios from "axios";

export default function Container(){
    const [loop, setLoop] = useState({start: 800, end: 850})   
    const [pokemons, setPokemnos] = useState([]); 

    async function fetchPokemons(start, end ){
        const dataFetch = [];
        for(let i = start; i <= end; i++){
            dataFetch.push('https://pokeapi.co/api/v2/pokemon/' + i);
        }
        const dataPokemon = await axios.all(dataFetch.map(async(fetch)=>{
            const {data} = await axios.get(fetch);
            return data
        }))
        setPokemnos((preventValue)=>{
            return [...preventValue, ...dataPokemon]
        })
    }

    useEffect(()=>{
        fetchPokemons(loop.start, loop.end);
    },[loop]);

    return(
        <>
            <main id="container" className="w-full py-4 mt-8 px-6 max-w-screen-xl bg-stone-200 flex justify-center items-center gap-6 flex-wrap rounded-sm">
                {pokemons.map((pokemon, k)=>{
                    return <Card key={k} pokemon={pokemon}/>
                })}
                <button onClick={()=>{
                    setLoop(preventValue=>{
                        return {start: preventValue.start + 50, end: preventValue.end + 50}
                    })
                }}>Show more</button>
            </main>
        </>
    )
}