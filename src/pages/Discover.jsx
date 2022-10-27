import Error from '../components/Error';
import SongCard from '../components/SongCard';
import Loader from '../components/Loader';
import { genres } from '../assets/constants';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import { useSelector, useDispatch } from 'react-redux';

const Discover = () => {
    const dispatch = useDispatch()
    const { activeSong, isPlaying } = useSelector((state) => state.player)
    
    const { data, isFetching, error } = useGetTopChartsQuery();
    console.log(data)

    if (isFetching) return <Loader title="Loading songs..."/>
    if(error) return <Error/>

    const genreTitle = 'Pop';

    return (
        <div className={`flex flex-col`}>
            <div className={`w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10`}>
                <h2 className={`text-left font-bold text-white text-3xl`}>Discover {genreTitle}</h2>
                <select onChange={() => { }}
                    value={``}
                    className={`rounded-lg bg-black text-gray-300 outline-none p-3 text-sm sm:mt-0 mt-5`}
                >
                    {genres.map((genre) => (
                        <option key={genre.value} value={genre.value}>{genre.title}</option>
                    ))}
                </select>
            </div>

            <div className={`flex flex-wrap gap-8 justify-center sm:justify-start`}>
                {data.map((song, i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        i={i}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                    />
                ))}
            </div>
        </div>
    );
};

export default Discover;
