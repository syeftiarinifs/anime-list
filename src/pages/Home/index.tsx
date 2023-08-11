import { useCallback, useEffect, useState } from "react";

import Pagination from '@mui/material/Pagination';
import TextField from '@mui/material/TextField';

import Header from '../../components/Header';
import AnimeCard from '../../components/AnimeCard';
import EmptyState from "../../components/EmptyState";
import AnimeCardLoader from "../../components/AnimeCard/CardLoader";
import { styContainer } from './styles';

const  LIMIT_PERPAGE = 12;

const Home = () => {
  const [page, setPage] = useState(1);
  const [animeList, setAnimeList] = useState([])
  const [lastVisiblePage, setLastVisiblePage] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessgae] = useState('')

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleChangeKeyWord = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const val = e.target.value;
    setKeyword(val);
  };

  const fetchAnimeData = useCallback(() => {
    setLoading(true)
    fetch(`https://api.jikan.moe/v4/anime?page=${page}&limit=${LIMIT_PERPAGE}&q=${keyword}`)
    .then((response) => response.json())
    .then((data) => {
      if(data?.data){
        setAnimeList(data?.data);
        setLastVisiblePage(data?.pagination?.last_visible_page)
      } else {
        setErrMessgae(data.message)
      }
    })
    .catch((err) => {
      setErrMessgae(err.message)
    })
    .finally(() => {
      setLoading(false)
    });
  }, [keyword, page])

  useEffect(() => {
    fetchAnimeData();
  }, [fetchAnimeData]);

  const isAnyAnime = Boolean(animeList?.length)

  return(
    <>
      <Header />
      <div className={styContainer}>
        <TextField className="sty-input" value={keyword} onChange={(e) =>handleChangeKeyWord(e)} placeholder="Search Anime" variant="outlined" />
        { loading ? 
          <div className="sty-anime-loader-container">
            {[1,2,3,4,5,6].map((index) => (
              <AnimeCardLoader key={index} />
            ))}
          </div>
          :
          <>
            { errMessage ?
              <EmptyState title="Uh oh, Error Occured" description={errMessage} />
            :
              <>
                { isAnyAnime ? 
                  <div className="sty-anime-container">
                    {animeList.map((anime, index) => (
                      <AnimeCard key={index} anime={anime} />
                    ))}
                  </div>
                : 
                  <EmptyState title="Anime not found" description="Please use other keyword" />
                }
              </>
            }
          </>
        }
        {isAnyAnime && <Pagination className="sty-pagination" count={lastVisiblePage} page={page} onChange={handleChangePage} />}
      </div>
    </>
  )

}

export default Home;