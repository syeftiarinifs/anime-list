import { useMemo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

import { ANIME_LIST_STORAGE_KEY } from '../../constants';
import { saveData, getData } from '../../helpers/LocalStorage';
import Header from '../../components/Header';
import { styContainer } from './styles';
import { AnimeDetailProps } from './types';
import { DEFAULT_VALUE_ANIME } from './constants'

interface AnimeProps {
  mal_id: number;
}

const Detail = () => {
  const [animeDetail, setAnimeDetail] = useState<AnimeDetailProps>(DEFAULT_VALUE_ANIME);

  const currFavorit = useMemo(() => {
    return getData(ANIME_LIST_STORAGE_KEY) || [];
  }, [])

  const { id } = useParams();

  const [isFavorit, setIsFavorit] = useState(false)

  const handleAddFavorite = () => {
    currFavorit.push(animeDetail);
    const serializedState = JSON.stringify(currFavorit);
    saveData(serializedState, ANIME_LIST_STORAGE_KEY);
    window.location.reload();
  }

  const handleRemoveFavorite = () => {
    const itemNotRemoved = currFavorit.filter((item: AnimeProps) => item.mal_id !== Number(id))
    const serializedState = JSON.stringify(itemNotRemoved);
    saveData(serializedState, ANIME_LIST_STORAGE_KEY);
    setIsFavorit(true);
    window.location.reload();
  }

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
      .then((response) => response.json())
      .then((data) => {
        setAnimeDetail(data.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [id]);

  useEffect(() => {
    const tempFavorite = Boolean(currFavorit?.find((item: AnimeProps) => item.mal_id === Number(id)))
    setIsFavorit(tempFavorite)
  }, [currFavorit, id])

  return(
    <>
      <Header />
      <div className={styContainer}>
        <div className="sty-image">
          <img alt="anime" src={animeDetail?.images?.jpg?.large_image_url} />
        </div>

        <div className='sty-title-wrapper'>
          <Typography gutterBottom variant="h5" component="div">
            {animeDetail?.title}
          </Typography>
          { isFavorit ? 
              <Button variant="contained" onClick={handleRemoveFavorite}>Remove from Favorites</Button>
            :
              <Button variant="contained" onClick={handleAddFavorite}>Add to Favorites</Button>
          }
          
        </div>

        <div className='sty-chip-wrapper'>
          {animeDetail?.genres?.map((genre, index) => (
            <Chip key={index} label={genre.name} variant="outlined" />
          ))}
        </div>
        
        <Typography className='sty-anime-description' variant="body2" color="text.secondary">
            {animeDetail?.synopsis}
          </Typography>

      </div>
    </>
  )

}

export default Detail;