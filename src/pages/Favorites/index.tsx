import { ANIME_LIST_STORAGE_KEY } from '../../constants';
import Header from '../../components/Header';
import AnimeCard from '../../components/AnimeCard';
import EmptyState from "../../components/EmptyState";
import { getData } from '../../helpers/LocalStorage';

import { styContainer } from './styles';
import { AnimeProps } from './types';

const Home = () => {
    const currFavorit = getData(ANIME_LIST_STORAGE_KEY) || []

  return(
    <>
      <Header />
      <div className={styContainer}>
        { Boolean(currFavorit.length) ? 
          <div className="sty-anime-container">
            {currFavorit.map((anime: AnimeProps, index: number) => (
              <AnimeCard key={index} anime={anime} />
            ))}
          </div>
        : 
          <EmptyState title="You havent added any favorites" description="Pick your favorites Anime to watch it later" />
        }
      </div>
    </>
  )

}

export default Home;