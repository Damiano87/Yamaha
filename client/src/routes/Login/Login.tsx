import { useRef, useState, useEffect, FormEvent } from 'react';
import { useToken } from '@/hooks/useToken';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AxiosError } from 'axios';
import apiRequest from '../../api/apiRequest';
import { Helmet } from 'react-helmet-async';

const LOGIN_URL = '/auth/login';

const Login = () => {
    const { setToken } = useToken();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const userRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLParagraphElement>(null);
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current?.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    // submit form
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await apiRequest.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            const accessToken = response?.data?.accessToken;
            setToken(accessToken);
            setUser('');
            setPwd('');
            setTimeout(() => {
                   navigate(from, { replace: true });
            }, 2000)
        } catch (err) {
           if (err instanceof AxiosError) {
            setErrMsg(err?.response?.data.message)
           } else {
            setErrMsg('Login Failed');
            console.log(err);
           }
             
            errRef.current?.focus();
        }
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <Helmet>
                <title>Login</title>
                <meta 
                name="description" 
                content="Login page" 
                />
            </Helmet>
            <section className="w-full max-w-[420px] min-h-[400px] flex flex-col justify-start p-4 bg-black text-white">
            <p ref={errRef} className={errMsg ? "bg-pink-400 text-red-700 font-bold p-2 mb-2" : "absolute -left-[9999px]"} aria-live="assertive">{errMsg}</p>
            <h1>Zaloguj się</h1>
            <form onSubmit={handleSubmit} className="flex flex-col justify-evenly grow pb-4">
                <div className='flex flex-col'>
                    <label htmlFor="username" className='mt-4 mb-2'>Username:</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                    className="text-[1.4rem] p-1 rounded-[.5rem] text-black"
                />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="password" className='mt-4 mb-2'>Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                    className="text-[1.4rem] p-1 rounded-[.5rem] text-black"
                />
                </div>
                <button className='border-2 border-white py-2 mt-5 hover:bg-white hover:text-black font-semibold'>Zaloguj się</button>
                </form>
                <p>
                    Need an Account?<br />
                    <span className="line">
                        <Link to="/register" className='hover:underline'>Sign Up</Link>
                    </span>
                </p>
            </section>
        </div>

    )
}

export default Login