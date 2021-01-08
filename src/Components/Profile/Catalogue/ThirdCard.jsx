import React from 'react'

const ThirdCard = () => {
    const showEditNumber = false;
    return (
        <div className="w-11/12 mx-auto md:w-10/12 md:mx-auto bg-gray-100 my-4 md:my-10 md:px-8 px-4 py-2 rounded shadow">
            <h3 className=" text-gray-600 text-center my-4">Algunas configuraciones más:</h3>
            <div className="my-2">
                <p className="my-2 font-light text-gray-600">Configura medios de contacto y forma de venta:</p>
                <div className="my-8">
                    <p className="font-light text-gray-600">Recibiras los pedidos en este número de Whatsapp:</p>
                    <div className="py-2 px-4 bg-green-100 font-bold text-green-600  shadow rounded text-xl flex justify-between">
                        <p>3408673559</p>
                        <button className=" text-sm">Cambiar numero</button>
                    </div>
                    { showEditNumber 
                        ? 
                            <div className="my-2" >
                                <input type="number" className="mx-1 w-24 rounded bg-white py-2 px-3 shadow rounded focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-opacity-50"/>
                                <input type="number" className="mx-1 rounded bg-white py-2 px-3 shadow rounded focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-opacity-50"/>
                                <button  className="py-2 px-3 shadow rounded bg-gray-700 text-green-50">Listo</button>
                            </div> 
                        :
                        null
                    }
                    
                </div>
                <div className="my-8">
                    <p className="font-light text-gray-600">Metodos de entrega: Tilda las opciones deseadas</p>
                    <div className="my-2">
                        <div className="flex h-6">
                            <input type="checkbox" name="delivery" className="mx-1 my-auto"/>
                            <p className="mx-1 my-auto">Delivery</p>
                        </div>
                    </div>
                    <div className="my-2">
                        <div className="flex h-6">
                            <input type="checkbox" name="takeaway" className="mx-1 my-auto"/>
                            <p className="mx-1 my-auto">Take Away</p>
                        </div>
                    </div>
                </div>
                <div className="my-8">
                    <p className="font-light text-gray-600">Redes sociales</p>
                    <div className="my-2">
                        

                    </div>
                </div>

                <div className="w-full block text-right">
                    <button className="bg-green-100 text-green-600 px-4 py-2 rounded shadow w-24">Listo!</button>
                </div>
            </div>
        </div>
    )
}

export default ThirdCard
