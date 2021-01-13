import React from 'react'
import Logo from '../../Assets/Media/volandoya.png'

const NavBar = () => {
    return (
        <div className="bg-gray-50 h-16 shadow md:py-4">
            <div className="grid grid-cols-6 h-full md:w-10/12 md:mx-auto">
                <div className="my-auto col-span-4">
                    <img src={Logo} alt="volandoya" className="w-48 pl-1"/>
                </div>
                <div className="flex col-span-2 my-auto ml-auto">
                    <p className="mx-8 font-bold hidden md:block">Hola, <span className="font-light">Jonatan</span> </p>
                    <p className="mx-8 font-light "><i className="fas fa-external-link-alt mr-2"></i>Salir</p>
                </div>
            </div>
        </div>
    )
}

export default NavBar
