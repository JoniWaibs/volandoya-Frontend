import React from 'react'
import Link from '../../Extras/Link'

const FormData = () => {


    return (
        <div className="w-11/12 mx-auto md:w-10/12 md:mx-auto bg-gray-100 my-4 md:my-10 p-8 rounded shadow">
            <div className="my-4">
                <p className="font-light text-gray-600 text-center md:text-left">Requerimos completar tus datos personales y los datos de tu tienda. Tener los datos actualizados genera mas confianza en tus clientes!</p>
            </div>
            <Link/>
            <div className="md:grid md:grid-cols-2 my-8 md:gap-3">
                <form action="" className="my-12 md:my-0">
                    <div>
                        <label htmlFor="name" className="block font-light">Tu nombre completo:</label>
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Nombres y apellidos"
                            className="block bg-white py-2 px-3 shadow rounded w-full focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="block font-light mt-2">Direccion de tu tienda o de tu casa:</label>
                        <input 
                            type="text" 
                            name="adress"
                            placeholder="Ej: Pasaje Juarez 800"
                            className="block bg-white py-2 px-3 shadow rounded w-full focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="block font-light mt-2">Whatsapp:</label>
                            <input 
                                type="number" 
                                name="whatsapp"
                                placeholder="Sin el 0 y sin el 15"
                                className="block bg-white py-2 px-3 shadow rounded w-full  focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-opacity-50"
                            />                       
                    </div>
                    <div>
                        <label htmlFor="name" className="block font-light mt-2">Other</label>
                            <input 
                                type="number" 
                                name="whatsapp"
                                placeholder="Other"
                                className="block bg-white py-2 px-3 shadow rounded w-full  focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-opacity-50"
                            />                       
                    </div>
                    <div>
                        <label htmlFor="name" className="block font-light mt-2">Other</label>
                            <input 
                                type="number" 
                                name="whatsapp"
                                placeholder="Other"
                                className="block bg-white py-2 px-3 shadow rounded w-full  focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-opacity-50"
                            />                       
                    </div>
                </form>
                <div className="my-auto pl-4">
                    <p>Editar</p>
                    <p className="text-gray-600 font-light my-4 md:my-2">Nombre completo: <span className=" block text-gray-900 font-bold">...</span> </p>
                    <p className="text-gray-600 font-light my-4 md:my-2">Direccion de tu tienda o de tu casa: <span className="block text-gray-900 font-bold">...</span> </p>
                    <p className="text-gray-600 font-light my-4 md:my-2">Whatsapp: <span className=" block text-gray-900 font-bold">...</span> </p>
                    <p className="text-gray-600 font-light my-4 md:my-2">Other <span className=" block text-gray-900 font-bold">...</span> </p>
                    <p className="text-gray-600 font-light my-4 md:my-2">Other <span className=" block text-gray-900 font-bold">...</span> </p>
                </div>
            </div>
        </div>
    )
}

export default FormData
