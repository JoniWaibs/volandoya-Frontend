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
            <button className="text-center md:hidden w-full py-4" onClick={toggleMenu}>Menu</button>
            <div id="menu" className="md:w-10/12 md:mx-auto hidden md:block">
                <div className="md:grid md:grid-cols-4">
                    <Link to={'/profile/admin'} className="block transition duration-500 text-green-600 mx-4 text-center py-4 text-xl hover:bg-green-600 hover:text-green-100"><i className=" mx-2 fas fa-edit"></i>Admin de datos</Link>
                    <Link to={'/profile/sells'} className="block transition duration-500 text-green-600 mx-4 text-center py-4 text-xl hover:bg-green-600 hover:text-green-100"><i className=" mx-2 fas fa-chart-line"></i>Reporte Ventas</Link>
                    <Link to={'/profile/catalogue'} className="block transition duration-500 text-green-600 mx-4 text-center py-4 text-xl hover:bg-green-600 hover:text-green-100"><i className=" mx-2 fas fa-th-list"></i>Crear y editar tienda</Link>
                    <Link to={'/profile/demo'} target="_blank" className="block transition duration-500 text-green-600 mx-4 text-center py-4 text-xl hover:bg-green-600 hover:text-green-100"><i className=" mx-2 fas fa-store-alt"></i>Demo tienda</Link>
                </div>
            </div>
        </div>
    )
}

export default SubNav
