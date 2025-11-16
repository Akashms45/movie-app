import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Icon from '@mui/material/Icon';
import StarIcon from '@mui/icons-material/Star';

export default function MovieCard({movie}) {

   
    const {title,poster,runtime,imdbRating,released,writer, genre}=movie;
    
  return (
    <Grid size={3}>
    <Card sx={{ maxWidth: 440, Height:500, backgroundColor:'#C9FBFF' }}>
      <CardMedia
  
  sx={{ height: 600, width: 440  }}
  image={poster}
  title={title}
/>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <b>Written By</b> : {writer}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <b>Genre</b> : <Chip label={genre} />
        </Typography>
      </CardContent>
      <CardActions >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon  />
        </IconButton>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <b>Duration</b> : {runtime}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <StarIcon/>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {imdbRating}
        </Typography>
      </CardActions>
    </Card>
    </Grid>
  );
}
