import { useState } from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="flex  justify-between items-center h-24 max-w-[1240px] mx-auto  px-4 text-white">
            <h1 className='w-full text-3xl font-bold text-[#00FFFF] cursor-pointer'>LOGO</h1>
            <ul className='hidden md:flex uppercase'>
                <li className='p-4 cursor-pointer'>Home</li>
                <li className='p-4 cursor-pointer'>Projects</li>
                <li className='p-4 cursor-pointer'>Skills</li>
                <li className='p-4 cursor-pointer'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={25} className='cursor-pointer'/> : <AiOutlineMenu size={25} className='cursor-pointer' />}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-[100%] bg-[#141414] ease-in-out duration-500' : 'fixed left-[-100%] top-4 ease-in-out duration-500'}>
                <ul className='uppercase p-4 mt-24 '>
                    <li className='p-4 border-b border-gray-700 cursor-pointer'>Home</li>
                    <li className='p-4 border-b border-gray-700 cursor-pointer'>Projects</li>
                    <li className='p-4 border-b border-gray-700 cursor-pointer'>Skills</li>
                    <li className='p-4 cursor-pointer'>Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar