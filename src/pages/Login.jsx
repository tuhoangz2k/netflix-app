import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import background from '../assets/signInBg.jpg';
import { UserAuth } from '../context/AuthContext';

function Login(props) {
    const navigate = useNavigate();
    const { user, logIn } = UserAuth();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await logIn(email, password);
            navigate('/');
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    };
    return (
        <div className="w-full h-screen ">
            <img src={background} alt="" className="hidden sm:block absolute w-full h-full object-cover" />
            <div className="fixed w-full px-4 py-24 z-50">
                <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
                    <div className="max-w-[320px] mx-auto py-16">
                        <h1 className="text-3xl font-bold">Sign In</h1>
                        {error ? <p className="p-3 text-red-500 my-2">{error}</p> : null}
                        <form onSubmit={handleSubmit} action="" className="w-full flex flex-col py-4">
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                className="p-3 my-2 bg-gray-700 rounded w-full"
                                type="email"
                                placeholder="email"
                                autoComplete="email"
                            />
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                className="p-3 my-2 bg-gray-700 rounded w-full"
                                type="password"
                                placeholder="password"
                                autoComplete="current-password"
                            />
                            <button className="bg-red-600 py-3 my-6 rounded font-bold">Sign Up</button>
                            <div className="flex justify-between items-center text-sm text-gray-600">
                                <p>
                                    <input className="mr-2" type="checkbox" name="" id="" />
                                    Remember me
                                </p>
                                <p>Need help?</p>
                            </div>
                            <p className="py-8">
                                <span className=" text-gray-600 mr-2">New to Netflix?</span>
                                <Link to="/signup">Sign Up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <div className="fixed top-0 left-0 w-full h-screen bg-black/60"></div>
        </div>
    );
}

export default Login;
