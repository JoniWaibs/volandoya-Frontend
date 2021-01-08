import React from 'react'

const Link = () => {
    return (
        <div className="my-4">
            <p className="font-light text-gray-600">El link de tu sitio sera:</p>
            <div className="py-2 px-4 bg-green-100 font-bold text-green-600 flex justify-between shadow rounded text-xl">
                <p>volandoya/nombre</p>
                <button><i className="far fa-clone"></i></button>
            </div> 
            
            <p className="font-light text-gray-600">podras compartirlo con tus clientes y amigos para que puedan ver tu carta digital.</p>
        </div>
    )
}

export default Link
