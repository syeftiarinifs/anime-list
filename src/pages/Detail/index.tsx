import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

import Header from '../../components/Header';
import { styContainer } from './styles';
import { AnimeDetailProps } from './types';
import { DEFAULT_VALUE_ANIME } from './constants'

const Detail = () => {
  const [animeDetail, setAnimeDetail] = useState<AnimeDetailProps>(DEFAULT_VALUE_ANIME);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
      .then((response) => response.json())
      .then((data) => {
        setAnimeDetail(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);



  return(
    <>
      <Header />
      <div className={styContainer}>
        <div className="sty-image">
          <img alt="anime" src={animeDetail.images.jpg.large_image_url} />
        </div>

        <div className='sty-title-wrapper'>
          <Typography gutterBottom variant="h5" component="div">
            {animeDetail.title}
          </Typography>
          <Button variant="contained">Add to Favorites</Button>
        </div>

        <div className='sty-chip-wrapper'>
          {animeDetail.genres?.map((genre, index) => (
            <Chip key={index} label={genre.name} variant="outlined" />
          ))}
        </div>
        
        <Typography className='sty-anime-description' variant="body2" color="text.secondary">
            {animeDetail.synopsis}
          </Typography>

      </div>
    </>
  )

}

export default Detail;