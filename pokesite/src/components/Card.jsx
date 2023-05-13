export default function Cards({pokemons}){
    return(
        <>
            {pokemons.map((pokemon, k)=>{
                return <Card key={k} pokemon={pokemon}/>
            })}
        </>
    )   
}


function Card({pokemon}){
    return(
        <>
            <div className="flex flex-col w-48 bg-white shadow-md shadow-black rounded-md cursor-pointer transition-all  hover:w-[196px]">
                <img src={pokemon.sprites.front_default} alt="Pokemon Image" className="w-full bg-slate-500"/>
                <div id="card-header" className="flex justify-between p-2">
                    <h3 className="text-lg font-bold">{pokemon.name}</h3>
                    <p className="text-lg text-gray-700">#{pokemon.id}</p>
                </div>
                <div id="card-body" className="flex justify-center py-3 gap-1">
                    {pokemon['types'].map(type=>{
                        return <div className="bg-red-700 py-1 px-4 text-white font-bold border-gray-950 border-2 rounded-full text-sm">{type.type.name}</div>
                    })}

                </div>
            </div>
        </>
    )
}