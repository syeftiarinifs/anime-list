import Typography from '@mui/material/Typography';
import { styHeader } from './styles';

const Header = () => {
  return(
    <div className={styHeader}>
      <Typography gutterBottom variant="h5" component="div">
        Anime List
      </Typography>

      <Typography gutterBottom variant="h5" component="div">
        Favorites
      </Typography>
    </div>
  )

}

export default Header;