import React from 'react'
import Pizza from '../../Assets/Media/pizzaCover.jpeg'
import Avatar from '../../Assets/Media/home.jpeg'


const Header = () => {
    return (
        <div className="relative">
            <div className="h-36 md:h-64 bg-gray-400 overflow-hidden">
                <img src={Pizza} alt="Pizza" className="cover"/>
            </div>
            <div className="absolute top-16 left-4 md:top-36 md:left-8 ">
                <div className=" w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-green-900 overflow-hidden">
                    <img src={Avatar} alt="Pizza" className="avatar"/>
                </div>
            </div>
            <div className="min-h-0 md:min-h-0 bg-gray-50">
                <div className="w-11/12 mx-auto pt-8 md:pt-12">
                    <div className="flex">
                        <h1 className="text-2xl md:text-4xl font-bold py-4">Las Pizzas de Ale</h1>
                        <div className="py-3 ml-auto">
                            <i className="fab fa-whatsapp text-gray-200 mx-2 text-base md:text-2xl bg-green-800 p-3 rounded shadow-xl"></i>
                            <i className="fab fa-facebook-f text-gray-200 mx-2 text-base md:text-2xl bg-green-800 p-3 rounded shadow-xl"></i>
                            <i className="fab fa-instagram text-gray-200 mx-2 text-base md:text-2xl bg-green-800 p-3 rounded shadow-xl"></i>
                        </div>
                    </div>
                    <p className="text-gray-800 text-sm md:text-base py-1 md:py-2 truncate">Pizzas caseras amasadas en el dia. Cocinamos con amor, ese es nuestro secreto. </p>
                    <p className="text-gray-600 text-xs md:text-base py-1 md:py-2"><i className="fas fa-map-marker-alt text-gray-600 pr-1"></i>Primera Junta 2780 Santa Fe Argentina</p>
                    <div className="flex py-2">
                        <p className="mr-3 text-sm md:text-base bg-gray-300 px-3 py-1 rounded text-green-800 "><i className="fas fa-store-alt text-green-800 mr-2"></i>Take Away</p>
                        <p className="mr-3 text-sm md:text-base bg-gray-300 px-3 py-1 rounded text-green-800"><i className="fas fa-truck text-green-800 mr-2"></i>Delivery: $50</p>
                    </div>
                </div>
            </div>                
        </div>
    )
}

export default Header
