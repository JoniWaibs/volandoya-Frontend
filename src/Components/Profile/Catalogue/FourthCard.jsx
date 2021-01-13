import React from 'react'

const FourthCard = () => {
    return (
        <div className="w-11/12 mx-auto md:w-10/12 md:mx-auto bg-gray-100 my-4 md:my-10 md:px-8 px-4 py-2 rounded shadow">
            <h3 className="text-2xl text-gray-600 text-center my-8">Título de tu tienda</h3>
            <div className="my-2">
                <p className="my-2 font-light text-gray-600">Agregá un titulo haciendo referencia a lo que hacés o vendés:</p>
                <input type="text" 
                    className="block bg-white p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-opacity-50"
                    placeholder="Ej: Pizzas caseras hechas con amor"
                />
            </div>
            <div className="w-full block text-right">
                <button className="bg-gray-700 text-green-50 px-4 py-2 rounded shadow w-24">Guardar</button>
            </div>
        </div>
    )
}

export default FourthCard
