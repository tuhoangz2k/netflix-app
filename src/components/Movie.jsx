import { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
function Movie({ movie }) {
    const [like, setLike] = useState(false);
    const [saved, setSaved] = useState(false);
    const { user } = UserAuth();

    const movieID = doc(db, 'users', `${user?.email}`);
    const saveShow = async () => {
        if (user?.email) {
            setLike(!like);
            setSaved(true);
            await updateDoc(movieID, {
                savedShows: arrayUnion({
                    id: movie.id,
                    title: movie.title,
                    img: movie.backdrop_path,
                }),
            });
        } else {
            alert('Please login to save movie');
        }
    };
    return (
        <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
            <img
                src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
                className="w-full h-auto object-cover object-center"
                alt={movie?.title}
            />
            <div className="absolute top-0 left-0 w-full h-full hover:opacity-100 hover:bg-black/80 opacity-0 text-white">
                <p className=" whitespace-normal text-xs md:text-sm top-4 font-bold flex justify-center items-center text-center h-full">
                    {movie?.title}
                </p>
                <span onClick={saveShow} className="absolute top-4 left-4">
                    {like ? <FaHeart size={'18px'} /> : <FaRegHeart size={'18px'} />}
                </span>
            </div>
        </div>
    );
}

export default Movie;
