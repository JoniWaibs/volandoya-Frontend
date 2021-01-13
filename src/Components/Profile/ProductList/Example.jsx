import React from 'react'
import Pizza from '../../../Assets/Media/pizzaCover.jpeg'

const Example = () => {
    return (
        <div className="w-11/12 mx-auto md:w-10/12 md:mx-auto bg-gray-100 my-4 md:my-10 md:px-8 py-2 px-1 rounded shadow">
            <h3 className="text-2xl text-gray-600 text-center my-8">Vamos con un ejemplo:</h3>
            <div className="my-2 px-2 text-center">
                <p className="my-2 font-light text-gray-600">Te mostramos como se vería un articulo publicado en tu tienda de <span className="uppercase font-bold text-green-900">volandoya</span></p>
            </div>
            <div className="w-full block my-2 mx-auto bg-white md:w-4/6">
                <div className="flex border border-gray-400 rounded h-32 md:h-32">
                    <div className="w-2/4 md:w-1/4 ">
                        <img src={Pizza} alt="pizza" className="w-full h-full rounded-l"/>
                    </div>
                    <div class="w-56 md:w-96 px-2">
                        <div className=" h-6">
                            <h3 className="text-gray-700 uppercase font-bold text-center">Napolitana confitada</h3>
                        </div>
                        <div className=" h-10 md:h-10 overflow-hidden">
                            <p className="font-light text-gray-500 text-xs truncate">Lorem ipsum dolor sit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias harum ipsum, molestias minus consequatur similique eveniet quos suscipit iste excepturi. Eaque, reprehenderit perferendis! Non exercitationem expedita perferendis quod doloribus sit? amet cow-2/5psum dolor sit amet consectetur adipisicing elit.  </p>
                        </div>
                        <div className="h-6">
                            <p className="bg-green-100 font-bold text-green-600 w-16 text-center rounded shadow text-md">$750</p>
                        </div>
                        <div className="h-8 block text-center my-1 md:w-36">
                            <button className="w-full h-full bg-green-900 text-gray-50 rounded shadow">Agregar al pedido</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Example
