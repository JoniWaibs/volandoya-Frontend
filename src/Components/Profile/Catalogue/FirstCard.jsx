import React from 'react'
import Link from '../../Extras/Link'

const FirstCard = () => {
    return (
        <div className="w-11/12 mx-auto md:w-10/12 md:mx-auto bg-gray-100 my-4 md:my-10 md:px-8 px-4 py-2 rounded shadow">
            <h3 className="text-2xl text-gray-600 text-center my-8"><i className="fas fa-cog mr-2"></i>Configurando tu tienda en 3...2...1...</h3>
            <Link/>
        </div>
    )
}

export default FirstCard
