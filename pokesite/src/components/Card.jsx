export default function Card({pokemon}){
    const colorsTypes = [
        {type: 'normal', code: '#A8A878'},
        {type: 'fire', code: '#F08030'},
        {type: 'water', code: '#6890F0'},
        {type: 'electric', code: '#F8D030'},
        {type: 'grass', code: '#78C850'},
        {type: 'ice', code: '#98D8D8'},
        {type: 'fighting', code: '#C03028'},
        {type: 'poison', code: '#A040A0'},
        {type: 'ground', code: '#E0C068'},
        {type: 'flying', code: '#A890F0'},
        {type: 'psychic', code: '#F85888'},
        {type: 'bug', code: '#A8B820'},
        {type: 'rock', code: '#B8A038'},
        {type: 'ghost', code: '#705898'},
        {type: 'dragon', code: '#7038F8'},
        {type: 'dark', code: '#705848'},
        {type: 'steel', code: '#B8B8D0'},
        {type: 'fairy', code: '#EE99AC'}
    ]

    function setColorType(type){
        let color = colorsTypes.filter(color=>{
            if(color.type === type){
                return color.code
            }
        })
        return color[0].code
    }

    return(
        <>
            <div className="flex flex-col w-48 bg-white shadow-md shadow-black rounded-md cursor-pointer transition-all  hover:scale-105 hover:shadow-lg hover:shadow-black">
                <img src={pokemon.sprites.front_default} alt="Pokemon Image" className="w-full bg-slate-500"/>
                <div id="card-header" className="flex justify-between p-2">
                    <h3 className="text-lg font-bold">{pokemon.name}</h3>
                    <p className="text-lg text-gray-700">#{pokemon.id}</p>
                </div>
                <div id="card-body" className="flex justify-center py-3 gap-1">
                    {pokemon['types'].map((type, k)=>{
                        return <div key={k} style={{backgroundColor: `${setColorType(type.type.name)}`}} className={`py-1 px-4 text-blacvk font-bold border-gray-950 border-2 rounded-full text-sm`}>{type.type.name}</div>
                    })}

                </div>
            </div>
        </>
    )
}