import Input from "../components/Input";
import {useCallback, useState} from 'react';

const Auth = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[name, setName] = useState('');
    const[variant, setVariant] = useState('Login')
    const toggleVariant = useCallback(()=>{
        setVariant((currentVariant)=>  currentVariant === 'Login' ? 'Register': 'Login')
    }, [])


    return ( 
     
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-fixed bg-center bg-cover ">
        <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
            <img src="/images/logo.png" alt='logo' className="h-12"/>
            </nav>
            <div className="flex justify-center">
            <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:max-w-md rounded-md w-full ">
                <h2 className="text-white text-4xl mb-8 font-semibold">{variant === 'Login'? 'Sign In' : 'Create an Account'}</h2>
            <div className="flex flex-col gap-4">
            {variant === 'Register' &&(<Input 
                label="UserName"
                onChange={(ev: any)=>setName(ev.target.value)}
                id='name' 
                value={name}
                />)}
            <Input 
                label="Email"
                onChange={(ev: any)=>setEmail(ev.target.value)}
                id='email' 
                type="email"
                value={email}
                />
            <Input 
                label="Password"
                onChange={(ev: any)=>setPassword(ev.target.value)}
                id='password' 
                type="password"
                value={password}
                />

                
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full md-10 hover:bg-red-700 Transition"> Login </button>
            <p className="text-neutral-500 mt-12">{variant ==='Login'? 'First time using Netflix? ':' Already have an account' } 
            <span onClick={toggleVariant} className="text-white ml-l  hover:underline cursor-pointer"> 
            {variant === 'Login' ? 'Create an account? ':  ' Login'}</span>
            </p>
            </div>
            </div>
            </div>
            <div>

            
            
            </div> 
        </div>
    );
}

export default Auth;