import React from 'react'

const SecondCard = () => {
    return (
        <div className="w-11/12 mx-auto md:w-10/12 md:mx-auto bg-gray-100 my-4 md:my-10 md:px-8 px-4 py-2 rounded shadow">
            <h3 className=" text-gray-600 text-center my-4">Descripcion de tu perfil:</h3>
            <div className="my-2">
                <p className="my-2 font-light text-gray-600">Agregá una pequeña descripcion de qué es lo que haces o vendes:</p>
                <textarea 
                    name="description"  
                    rows="4"
                    placeholder="Ej: Nuestras recetas son únicas. Ofrecemos postres para reuniones familiares o grandes eventos"
                    className="block my-2 bg-white py-2 px-3 shadow rounded w-full focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-opacity-50"
                >
                </textarea>
                <div className="w-full block text-right">
                    <button className="bg-green-100 text-green-600 px-4 py-2 rounded shadow w-24">Listo!</button>
                </div>
            </div>
        </div>
    )
}

export default SecondCard
