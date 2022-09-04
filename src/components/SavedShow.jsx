import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect, useState, useRef } from 'react';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';

function SavedShow(props) {
    const slider = useRef();
    const [movies, setMovies] = useState([]);
    const { user } = UserAuth();
    const slideLeft = () => {
        slider.current.scrollLeft = slider.current.scrollLeft - 500;
    };
    const slideRight = () => {
        slider.current.scrollLeft = slider.current.scrollLeft + 500;
    };
    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedShows);
        });
    }, [user?.email]);

    const movieRef = doc(db, 'users', `${user?.email}`);
    const deleteShow = async (passedId) => {
        try {
            const result = movies.filter((item) => item.id !== passedId);
            await updateDoc(movieRef, {
                savedShows: result,
            });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <h2 className="text-white font-bold md:text-2xl text-3xl p-4">My Shows</h2>
            <div className="relative flex items-center group">
                <HiOutlineChevronLeft
                    onClick={slideLeft}
                    size={40}
                    color="#666"
                    className="bg-white rounded-full absolute opacity-50 cursor-pointer z-10  hover:opacity-100 hidden left-0 group-hover:block"
                />
                <div
                    className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
                    ref={slider}
                >
                    {movies?.map((movie) => (
                        <div
                            key={movie.id}
                            className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
                        >
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
                                className="w-full h-auto object-cover object-center"
                                alt={movie?.title}
                            />
                            <div className="absolute top-0 left-0 w-full h-full hover:opacity-100 hover:bg-black/80 opacity-0 text-white">
                                <p className=" whitespace-normal text-xs md:text-sm top-4 font-bold flex justify-center items-center text-center h-full">
                                    {movie?.title}
                                </p>
                                <p
                                    onClick={() => {
                                        deleteShow(movie?.id);
                                    }}
                                    className="absolute text-gray-300 top-4 right-4"
                                >
                                    <AiOutlineClose />
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <HiOutlineChevronRight
                    onClick={slideRight}
                    size={40}
                    color="#666"
                    className="bg-white rounded-full absolute opacity-50 cursor-pointer z-10 hover:opacity-100 hidden right-0 group-hover:block"
                />
            </div>
        </>
    );
}

export default SavedShow;
