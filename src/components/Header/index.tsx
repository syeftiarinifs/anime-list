import { useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import { styHeader } from './styles';

const Header = () => {
  const navigate = useNavigate()

  const handleClick = (destination: string) => {
    navigate(`${destination}`)
  }
  return(
    <div className={styHeader}>
      <Typography onClick={() => handleClick('/')} gutterBottom variant="h5" component="div">
        Anime List
      </Typography>

      <Typography onClick={() => handleClick('/favorites')} gutterBottom variant="h5" component="div">
        Favorites
      </Typography>
    </div>
  )

}

export default Header;