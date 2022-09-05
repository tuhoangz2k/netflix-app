import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import background from '../assets/signInBg.jpg';
import { UserAuth } from '../context/AuthContext';
const schema = yup
    .object({
        email: yup.string().required('Email is required').email('Email invalid'),
        password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters long'),
    })
    .required();

function Signup(props) {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const { user, signUp } = UserAuth();
    const navigate = useNavigate();
    const handleSubmitForm = async (data) => {
        const { email, password } = data;
        try {
            await signUp(email, password);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="w-full h-screen ">
            <img src={background} alt="" className="hidden sm:block absolute w-full h-full object-cover" />
            <div className="fixed w-full px-4 py-24 z-50">
                <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
                    <div className="max-w-[320px] mx-auto py-16">
                        <h1 className="text-3xl font-bold">Sign Up</h1>
                        <form action="" onSubmit={handleSubmit(handleSubmitForm)} className="w-full flex flex-col py-4">
                            <input
                                // onChange={(e) => setEmail(e.target.value)}
                                className="p-3 my-2 bg-gray-700 rounded w-full"
                                type="email"
                                placeholder="email"
                                {...register('email')}
                            />
                            <p className="md:text-[1rem] text-xl mb-2 text-red-600 ">{errors.email?.message}</p>
                            <input
                                className="p-3 my-2 bg-gray-700 rounded w-full"
                                // onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="password"
                                autoComplete="current-password"
                                {...register('password')}
                            />
                            <p className="md:text-[1rem] text-xl mb-2 text-red-600 ">{errors.password?.message}</p>

                            <button className="bg-red-600 py-3 my-6 rounded font-bold">Sign Up</button>
                            <div className="flex justify-between items-center text-sm text-gray-600">
                                <p>
                                    <input className="mr-2" type="checkbox" name="" id="" />
                                    Remember me
                                </p>
                                <p>Need help?</p>
                            </div>
                            <p className="py-8">
                                <span className=" text-gray-600 mr-2">Already subscribed to Netflix?</span>
                                <Link to="/login">Sign In</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <div className="fixed top-0 left-0 w-full h-screen bg-black/60"></div>
        </div>
    );
}

export default Signup;
