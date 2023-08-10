import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { AnimeProps } from './types';
import { styCardAnime } from './styles';

const AnimeCard = ( {anime}: AnimeProps ) => {
  const navigate = useNavigate()

  const handleClickCard = () => {
    navigate(`/detail/${anime.mal_id}`)
  }

  return(
    <Card onClick={handleClickCard} className={styCardAnime}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={anime.images.webp.small_image_url}
          alt={anime.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {anime.title}
          </Typography>
          <Typography className='sty-anime-description' variant="body2" color="text.secondary">
            {anime.background}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default AnimeCard;