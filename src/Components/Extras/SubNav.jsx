import React from 'react'
import { Link } from 'react-router-dom'

const SubNav = () => {

    const toggleMenu = () =>{
        console.log('toggle')
        const menu = document.getElementById('menu')
        menu.classList.toggle('hidden')
    }

    return (
        <div className="bg-green-100 md:p-0 shadow">
            <button className="text-center md:hidden w-full py-4" onClick={toggleMenu}>Menu<i class="ml-2 fas fa-hamburger"></i></button>
            <div id="menu" className="md:w-10/12 md:mx-auto hidden md:block">
                <div className="md:grid md:grid-cols-5">
                    <Link to={'/profile/admin'} className="block transition duration-500 text-green-600  text-center py-4 text-xl md:text-lg hover:bg-green-600 hover:text-green-100"><i className=" mr-2 fas fa-edit"></i>Admin de datos</Link>
                    <Link to={'/profile/sells'} className="block transition duration-500 text-green-600 mx-4 text-center py-4 text-xl md:text-lg hover:bg-green-600 hover:text-green-100"><i className=" mr-2 fas fa-chart-line"></i>Reporte Ventas</Link>
                    <Link to={'/profile/catalogue'} className="block transition duration-500 text-green-600  text-center py-4 text-xl md:text-lg hover:bg-green-600 hover:text-green-100"><i class="mr-2 fas fa-cogs"></i>Configurar tienda</Link>
                    <Link to={'/profile/products'} className="block transition duration-500 text-green-600  text-center py-4 text-xl md:text-lg hover:bg-green-600 hover:text-green-100"><i className=" mr-2 fas fa-th-list"></i>Carga de articulos</Link>
                    <Link to={'/profile/demo'} target="_blank" className="block transition duration-500 text-green-600  text-center py-4 text-xl md:text-lg hover:bg-green-600 hover:text-green-100"><i className=" mr-2 fas fa-store-alt"></i>Demo tienda</Link>
                </div>
            </div>
        </div>
    )
}

export default SubNav
