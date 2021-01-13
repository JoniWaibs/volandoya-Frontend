import React, { useState }  from 'react'

const ThirdCard = () => {
    const [ showChangeNumberInput , setShowChangeNumberInput ] = useState(false)
    const changeView = () => { showChangeNumberInput ? setShowChangeNumberInput(false) : setShowChangeNumberInput(true) }


    return (
        <div className="w-11/12 mx-auto md:w-10/12 md:mx-auto bg-gray-100 my-4 md:my-10 md:px-8 px-4 py-2 rounded shadow">
            <h3 className="text-2xl text-gray-600 text-center my-8">Algunas confirguraciones más</h3>
            <div className="my-2">
                <p className="my-2 font-light text-gray-600">Configura medios de contacto y forma de venta:</p>
                <div className="my-8">
                    <p className="font-light text-gray-600">Recibiras los pedidos en este número de Whatsapp:</p>
                    <div className="py-2 px-4 bg-green-100 font-bold text-green-600  shadow rounded text-xl flex justify-between">
                        <p>3408673559</p>
                        <button className=" text-sm"  onClick={changeView} >Cambiar numero</button>
                    </div>
                    { showChangeNumberInput 
                        ? 
                            <div className="my-2 flex" >
                                <input type="number" 
                                className="block my-2 w-full md:w-96 rounded bg-white py-2 px-3 shadow rounded focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-opacity-50"
                                placeholder="Nuevo numero sin 0 y sin 15 "
                                />
                                <button  className="py-2 px-3 ml-2 block my-2 shadow rounded bg-gray-700 text-green-50">Listo</button>
                            </div> 
                        :
                        null
                    }
                    
                </div>
                <div className="my-8">
                    <p className="font-light text-gray-600">Metodos de entrega: Tildá las opciones deseadas</p>
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
                    <p className="font-light text-gray-600">Redes sociales que querés agregar a tu feed:</p>
                    <p className="font-light mt-4 text-gray-700">Completa solo la que quieras usar..</p>
                    <div className="my-2">
                        <div className="flex my-2">
                            <button className="rounded shadow-lg bg-red-700 text-gray-50 px-2 py-1"><i class="fab fa-instagram"></i></button>
                            <p className="my-auto ml-2 text-gray-600">https://instagram/</p>
                            <input type="text"  className="bg-white rounded border border-gray-300 w-full"/>
                        </div>
                        <div className="flex my-2">
                            <button className="rounded shadow-lg bg-blue-600 text-gray-50 px-2 py-1"><i class="fab fa-facebook-f"></i></button>
                            <p className="my-auto ml-2 text-gray-600">https://facebook/</p>
                            <input type="text"  className="bg-white rounded border border-gray-300 w-full"/>
                        </div>
                        <div className="flex my-2">
                            <button className="rounded shadow-lg bg-blue-400 text-gray-50 px-2 py-1"><i class="fab fa-twitter"></i></button>
                            <p className="my-auto ml-2 text-gray-600">https://twitter/</p>
                            <input type="text"  className="bg-white rounded border border-gray-300 w-full"/>
                        </div>
                        <p className="font-light mt-4 text-gray-700">Sitio web propio</p>
                        <div className="flex my-2">
                            <button className="rounded shadow-lg bg-green-700 text-gray-50 px-2 py-1"><i class="fas fa-link"></i></button>
                            <input type="text"  className="bg-white rounded border border-gray-300 w-full px-2" placeholder="Ej: www.mitienda.com"/>
                        </div>
                    </div>
                </div>

                <div className="w-full block text-right">
                    <button className="bg-gray-700 text-green-50 px-4 py-2 rounded shadow w-24">Guardar</button>
                </div>
            </div>
        </div>
    )
}

export default ThirdCard
