import { useEffect, useState } from "react";

import Pagination from '@mui/material/Pagination';
import TextField from '@mui/material/TextField';

import Header from '../../components/Header';
import AnimeCard from '../../components/AnimeCard';
import { styContainer } from './styles';

const  LIMIT_PERPAGE = 12;

const Home = () => {
  const [page, setPage] = useState(1);
  const [animeList, setAnimeList] = useState([])
  const [lastVisiblePage, setLastVisiblePage] = useState(0);
  const [keyword, setKeyword] = useState('');

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleChangeKeyWord = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const val = e.target.value;
    setKeyword(val);
  };

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime?page=${page}&limit=${LIMIT_PERPAGE}&q=${keyword}`)
      .then((response) => response.json())
      .then((data) => {
        setAnimeList(data.data);
        setLastVisiblePage(data.pagination.last_visible_page)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [page, keyword]);

  return(
    <>
      <Header />
      <div className={styContainer}>
        <TextField className="sty-input" value={keyword} onChange={(e) =>handleChangeKeyWord(e)} placeholder="Search Anime" variant="outlined" />

        <div className="sty-anime-container">
          {animeList?.map((anime, index) => {
            return(
              <>
                <AnimeCard key={index} anime={anime} />
              </>
            )
          })}
        </div>
        
        <Pagination className="sty-pagination" count={lastVisiblePage} page={page} onChange={handleChangePage} />

      </div>
    </>
  )

}

export default Home;