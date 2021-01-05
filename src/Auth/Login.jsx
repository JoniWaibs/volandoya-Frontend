import React, { useState } from 'react'
import Logo from '../Assets/Media/volandoya.png'
import { Link } from 'react-router-dom'

const Login = () => {
    const [ userLogin ,setUserLogin ] = useState({ user:"", password:"" });
    const { user , password } = userLogin;
    const inputData = e => { setUserLogin({ ...userLogin , [e.target.name] : e.target.value }) };
    const handleSubmit = e =>{ 
        e.preventDefault();
        if( user.trim() === "" || password.trim() === ""){
            //alerta
            console.log('Algo anda mal')
            return
        }
        if( password.trim().length < 6 ){
            //alerta
            console.log('Tu clave debe ser mas larga')
            return
        }
        //enviar datos
        console.log(userLogin)
        //reset form
        setUserLogin({user:"", password:""})
    }
    



    return (
        <div className="bg-gradient-to-b from-green-400 to-green-900 h-screen py-28 md:py-20">
            <div className="h-auto w-96 md:w-4/6 mx-auto">
                <div className="rounded bg-white shadow">
                    <div className="w-4/5 mx-auto py-4 md:w-full md:grid md:grid-cols-2 ">
                        <div className="md:my-auto">
                            <img src={Logo} alt="volandoya" className="my-8 block mx-auto"/>
                        </div>
                        <div className="mt-4 md:w-11/12">
                            <p className=" text-2xl my-4 text-center">- Iniciar Sesion -</p>
                            <form action="#" onSubmit={ handleSubmit }>
                                <div>
                                    <label htmlFor="usename" className="block mt-2 font-light">Usuario</label>
                                    <input 
                                        type="text" 
                                        placeholder="Nombre de tu tienda" 
                                        name="user"
                                        value={user}
                                        onChange={ inputData } 
                                        className="block bg-gray-100 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-opacity-50"
                                    />
                                </div>
                                <div className="my-4">
                                    <label htmlFor="password" className="block mt-2 font-light">Password</label>
                                    <input 
                                        type="password" 
                                        placeholder="*****" 
                                        name="password"
                                        value={password} 
                                        onChange={ inputData } 
                                        className="block bg-gray-100 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-opacity-50"
                                    />
                                </div>
                                <div className="mt-8">
                                    <button type="submit" className="hover:bg-green-600 bg-green-900 transition duration-400   text-gray-100 block w-full py-3 rounded">ENTRAR</button>
                                </div>
                            </form>
                            <div className="mt-4 block  text-green-900 text-right">
                                <p>Olvidaste tu password?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8 text-white">
                    <div className="border-t-2 md:border-t-4 mb-4 w-32 block mx-auto"></div>
                    <Link to={'/signin'} className="font-light">No tenés una cuenta? <span className="font-bold">REGISTRATE GRATIS</span> </Link>
                </div>
            </div>
        </div>

    )
}

export default Login
