import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import Movie from './Movie';
function Row({ title, fetchURL }) {
    const slider = useRef();
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        (async () => {
            const res = await axios.get(fetchURL);
            setMovies(res.data.results);
        })();
    }, [fetchURL]);

    const slideLeft = () => {
        slider.current.scrollLeft = slider.current.scrollLeft - 500;
    };
    const slideRight = () => {
        slider.current.scrollLeft = slider.current.scrollLeft + 500;
    };
    return (
        <>
            <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
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
                    {movies.map((movie, index) => (
                        <Movie movie={movie} key={index} />
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

export default Row;
