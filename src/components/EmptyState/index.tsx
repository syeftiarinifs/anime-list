import Typography from '@mui/material/Typography';
import { styEmptyState } from './styles';
import { EmptyStateProps } from './types';

const EmptyState = ({title, description}: EmptyStateProps) => {
  return(
    <div className={styEmptyState}>
      <img alt="anime-empty" src="https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2022/06/anya-spy-x-family.webp" />
      
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography className='sty-anime-description' variant="body2" color="text.secondary">
        {description}
      </Typography>
    </div>
  )

}

export default EmptyState;