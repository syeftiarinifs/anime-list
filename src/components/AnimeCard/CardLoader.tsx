import StaticLoader from '../StaticLoader';
import { styCardAnimeLoader } from './styles';

const AnimeCardLoader = ( ) => {

  return(
    <div className={styCardAnimeLoader}>
      <StaticLoader width="100%" height='140px' marginBottom='16px' />
      <StaticLoader width="30%" height='32px' marginBottom='8px' />
      <StaticLoader width="80%" height='32px' marginBottom='4px' />
      <StaticLoader width="80%" height='32px' marginBottom='4px' />
      <StaticLoader width="80%" height='32px' marginBottom='4x' />
    </div>
  )
}

export default AnimeCardLoader;