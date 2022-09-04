import React from 'react';
import background from '../assets/signInBg.jpg';
import SavedShow from '../components/SavedShow';

function Account(props) {
    return (
        <>
            <div className="w-full text-white">
                <img src={background} alt="" className="w-full h-[400px] object-cover" />
                <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
                <div className="absolute top[20%] p-4 md:p-8"></div>
            </div>
            <SavedShow />
        </>
    );
}

export default Account;
