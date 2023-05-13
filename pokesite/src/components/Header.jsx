import {BiSearch} from 'react-icons/bi';
import {MdOutlineFilterList} from 'react-icons/md'

export default function Heaeder(){
    return(
        <>
            <header className="flex justify-between w-full max-w-screen-xl p-2 mt-4">
                <div id="seach-bar" className="flex flex-row justify-center items-center bg-white rounded-r-md">
                    <input type="text" name="name" id="name" placeholder="Name or id" className="w-4/5 p-2 shadow-md rounded-l-md outline-none text-lg" maxLength={15}/>
                    <button className=" text-white bg-black p-2 w-1/5 rounded-r-md text-3xl"><BiSearch/></button>
                </div>
                <div id="filter-section" className='w-48 bg-white flex justify-center items-center gap-2 p-2'>
                        <MdOutlineFilterList className='text-3xl'/>
                        <select name="generation" id="generetion" className='outline-none w-48 text-xl'>
                            <option value="1" selected className='w-72'>Todos</option> 
                            <option value="1">1</option>
                            <option value="1">1</option>
                        </select>
                   
                </div>
            </header>
        </>
    )
}