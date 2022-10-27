import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'

import PlayPause from './PlayPause';
import { setActiveSong, playPause } from '../redux/features/playerSlice'; 

const SongCard = ({ song, i, isPlaying, activeSong, data }) => {

  const handlePlayClick = () => {
    console.log('play')
  }

  const handlePauseClick = () => {
    console.log('pause')
  }

  return (
    <div className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-30 rounded-lg backdrop-blur-sm cursor-pointer animate-slideup'>
      <div className='relative h-56 w-full group'>
        <div className= {`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`} >
          <PlayPause
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePlay={handlePlayClick}
            handlePause={handlePauseClick}
          />
        </div>
        <img className='rounded ' src={song.images?.coverart} alt="song_img" />
      </div>
      <div className='mt-4 flex flex-col '>
        <p className='text-white font-semibold text-lg truncate'>
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p className='text-sm text-gray-300 mt-1 truncate'>
          <Link to={song.artist ? `/artists/${song?.artists[0].adamid}` : '/top-artists'}>{song.subtitle}</Link>
        </p>
      </div>
    </div>
  );
}

export default SongCard;
