import React, { useState } from 'react'
import Logo from '../Assets/Media/volandoya.png'
import { Link } from 'react-router-dom'
import Benefits from '../Components/Extras/Benefits'

const Signin = () => {
    const [ userRegister , setUserRegister ] = useState({ user: "",mail: "",category: "",password: "",confirm: "" });
    const {user, mail, category, password, confirm } = userRegister;
    const inputData = e =>{setUserRegister({ ...userRegister , [e.target.name] : e.target.value })}
    const handleSubmit = e =>{ 
        e.preventDefault();
        //validar
        if( user.trim() ==="" || mail.trim() ==="" || category ==="" || password.trim() ==="" || confirm.trim() ==="" ){
            console.log('Algo anda mal')
            return
        }
        if( password.trim() !== confirm.trim() ){
            console.log('Los passwords son distintos')
            return
        }
        if( password.trim().length < 6 || confirm.trim().length < 6 ){
            console.log('los passwords deben tener al menos 6 caracteres')
            return
        }
        //enviar datos
        console.log(userRegister)
        //resetear
        setUserRegister({ user: "",mail: "",category: "",password: "",confirm: "" })
     }




    return (
        <div className="h-screen bg-gradient-to-b from-green-400 to-green-900 md:flex">

            <div className="w-96 mx-auto md:w-2/5 md:m-0 h-full py-10 md:py-2 md:px-8">
                <div className="rounded shadow bg-white p-4">
                    <div className="text-center my-2">
                        <img src={Logo} alt="volandoya" className="block mx-auto w-54"/>
                        <h2 className="text-2xl my-4">Registrate, <span className="text-green-900 font-bold">es gratis</span></h2>
                    </div>
                    <div>
                        <form action="#" onSubmit={ handleSubmit } >
                            <div>
                                <label htmlFor="usename" className="block font-light mt-2 text-gray-400">volandoya<span className="text-gray-900">/nombredetutienda</span></label>
                                <input 
                                    type="text" 
                                    placeholder="Nombre de tu tienda" 
                                    name="user"
                                    value={ user }
                                    onChange={ inputData }
                                    className="block bg-gray-100 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-opacity-50"
                                />
                            </div>
                            <div>
                                <label htmlFor="mail" className="block font-light mt-2 ">Email:</label>
                                <input 
                                    type="mail" 
                                    placeholder="Tu correo electrónico" 
                                    name="mail"
                                    value={ mail }
                                    onChange={ inputData }
                                    className="block bg-gray-100 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-opacity-50"
                                />
                            </div>
                            <div>
                                <label htmlFor="category" className="block font-light mt-2 ">Categoría:</label>
                                <select 
                                    name="category"
                                    onChange={ inputData } 
                                    value={ category }
                                    className="block bg-gray-100 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-opacity-50">
                                    <option value="">-Seleccioná-</option>
                                    <option value="Alimentos">Alimentos</option>
                                    <option value="Bebidas">Bebidas</option>
                                    <option value="rpacc">Ropa y accesorios</option>
                                    <option value="Calzado">Calzado</option>
                                    <option value="Artesanias">Artesanias</option>
                                </select>
                            </div>
                            <div className="my-2">
                                <label htmlFor="password" className="block mt-2 font-light">Password:</label>
                                <input 
                                    type="password" 
                                    placeholder="*****" 
                                    name="password"
                                    value={ password }
                                    onChange={ inputData }
                                    className="block bg-gray-100 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-opacity-50"
                                />
                            </div>

                            <div className="my-2">
                                <label htmlFor="password" className="block mt-2 font-light">Confirmar Password:</label>
                                <input 
                                    type="password" 
                                    placeholder="*****" 
                                    name="confirm"
                                    value={ confirm }
                                    onChange={ inputData }
                                    className="block bg-gray-100 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-opacity-50"
                                />
                            </div>
                            <div className="mt-8">
                                <button type="submit" className="hover:bg-green-600 bg-green-900 transition duration-400   text-gray-100 block w-full py-2 rounded">ENTRAR</button>
                            </div>
                        </form>
                        <div className="mt-4 block text-right">
                                <Link to={'/'} className="font-light text-sm">Ya tenés una cuenta?  <span className="font-bold text-green-900">Iniciá Sesion</span> </Link>
                            </div>
                    </div>
                </div>
            </div>

            <div className="hidden md:block">
                <Benefits/>
            </div>

        </div>
    )
}

export default Signin
