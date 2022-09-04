import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function Navbar(props) {
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();
    // console.log(user.email);
    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="text-white justify-between flex p-4 z-[100] w-full absolute">
            <Link to="/">
                <h1 className="text-red-600 text-4xl font-bold cursor-pointer">Netflix</h1>
            </Link>
            {user?.email ? (
                <div>
                    <Link to="/account">
                        <button className="pr-4">Account</button>
                    </Link>

                    <button onClick={handleLogout} className="bg-red-600 px-6 cursor-pointer py-2 rounded">
                        Logout
                    </button>
                </div>
            ) : (
                <div>
                    <Link to="/login">
                        <button className="pr-4">Sign In</button>
                    </Link>
                    <Link to="/signup">
                        <button className="bg-red-600 px-6 cursor-pointer py-2 rounded">Sign Up</button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Navbar;
