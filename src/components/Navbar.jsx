import React from 'react';

function Navbar(props) {
    return (
        <div className="text-white justify-between flex p-4 z-[100] w-full absolute">
            <h1 className="text-red-600 text-4xl font-bold cursor-pointer">Netflix</h1>
            <div>
                <button className="pr-4">Sign In</button>
                <button className="bg-red-600 px-6 cursor-pointer py-2 rounded">Sign Up</button>
            </div>
        </div>
    );
}

export default Navbar;
