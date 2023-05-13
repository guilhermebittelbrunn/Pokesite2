import {AiFillGithub} from 'react-icons/ai';
import {BsLinkedin} from 'react-icons/bs';
import {FiMail} from 'react-icons/fi'


export default function Footer(){
    return(
        <>
            <footer className='w-full max-w-screen-xl bg-gray-900 text-white flex justify-between items-center p-4 text-lg'>
                <h3>Created by Guilherme Bittelbrunn</h3>
                <ul className='flex gap-8 text-2xl'>
                    <li><a href="/" className="w-4 bg-black"><AiFillGithub/></a></li>
                    <li><a href="/" className="w-4 bg-black"><BsLinkedin/></a></li>
                    <li><a href="/" className="w-4 bg-black"><FiMail/></a></li>
                </ul>
            </footer>
        </>
    )

}