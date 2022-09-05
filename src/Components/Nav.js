import { useApi } from '../Context/Models';

import Logo from '../logo.svg'
import Drop from './drop.svg'
import Close from './close.svg'
import { useState } from 'react';

const Nav = () => {

    const {page} = useApi();

    const [menu, setMenu] = useState(false)

    const menuStatus = () => {
        menu ? setMenu(false) : setMenu(true)
    };

    const menu1 = ["Servicios y Accesorios", "Financiación", "Reviews y Comunidad"]
    const menu2 = ["Toyota Mobility Service", "Toyota Gazoo Racing", "Toyota Híbridos"]
    const menu3 = ["Concesionarios", "Test Drive", "Contacto"]
    const menu4 = ["Actividades", "Servicios al Cliente", "Ventas Especiales", "Innovación", "Prensa", "Acerca de..."]

    return (
        <header className='min-w-screen sticky top-0'>
            <nav className='flex w-full justify-between items-center h-[70px] border-b-[1px] bg-white border-[#CCCCCC]'>
                <div className='flex w-[500px] justify-around items-center '>
                    <img src={Logo} alt="ego-logo" className='ml-[35px]'/>        
                    <div className={`h-[70px] grid place-content-center px-9 ${page && "border-b-4 border-[#EB0A1E] text-[#EB0A1E]"} opacity-0 sm:opacity-100 font-semibold text-[14px]`}><a href="/">Modelos</a></div>
                    <div className={`h-[70px] grid place-content-center px-9 ${!page && "border-b-4 border-[#EB0A1E] text-[#EB0A1E]"} opacity-0 sm:opacity-100 font-semibold text-[14px]`}>Ficha de modelo</div>
                </div>
                <div className='flex absolute right-4 gap-5'>
                    <p className='text-[14px]'>Menú</p>
                    <button onClick={menuStatus}><img src={Drop} alt='drop' width="25px"/></button>
                </div>
                <div className={`fixed sm:fixed top-[70px] sm:top-0 right-0 bg-[#FFFFFF] min-w-screen sm:w-[400px] max-h-screen grid justify-items-end text-right text-[20px] overflow-y-scroll overflow-x-hidden ${menu && "translate-x-0"} translate-x-full transition-all duration-500  mr-[0.5px]`}>
                    <div className='mr-7 mt-5'>
                        <button onClick={menuStatus} className='flex items-center gap-3 text-[14px]'>Close <img src={Close} alt='close' width="15px"/></button>
                    </div>
                    <div>
                        <div className='grid md:mt-4 p-9 py-6 md:py-8 sm:space-y-3 space-y-2 border-b border-[#E9E9E9] text-[20px]'>
                            <a href='/'>Modelos</a>
                            {menu1.map((i, idx) => {
                                return (<a key={idx} href=''>{i}</a>)
                            })}
                        </div>
                        <div className='grid md:mt-4 p-9 py-6 md:py-8 sm:space-y-3 space-y-2 border-b border-[#E9E9E9] text-[20px]'>
                        {menu2.map((i, idx) => {
                                return (<a key={idx} href=''>{i}</a>)
                            })}
                        </div>
                        <div className='grid md:mt-4 p-9 py-6 md:py-8 sm:space-y-3 space-y-2 text-[20px]'>
                        {menu3.map((i, idx) => {
                                return (<a key={idx} href=''>{i}</a>)
                            })}
                        </div>
                        <div className='grid w-[300px] sm:w-[400px] bg-[#EFEEEF] md:mt-4 p-9 py-6 md:py-8 sm:space-y-3 space-y-2 border-b border-[#E9E9E9] text-[20px]'>
                        {menu4.map((i, idx) => {
                                return (<a key={idx} href=''>{i}</a>)
                            })}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
};

export default Nav;

