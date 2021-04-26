import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Item.css';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
      <>
    
    <Card className={classes.root}>
        
      <CardActionArea>
        <CardMedia
          component="img"
          alt="ERR"
          height="140"
          image="/images/h1.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Hand Bag
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
        Modern mini hand bag  for women waterproof and with strong strip.Available in multicolors.
        Small cross  body bag.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='card_align'>
      <Button size="small" className='button'>
        <Link  className='linkItem' to='/product-description'>Show</Link> 
        </Button>
        <span>
       <Link className='linkItem' to='/cart'><ShoppingCartIcon className='icon'/></Link> 
        <Link className='linkItem' to='/wishlist'> <FavoriteIcon className='icon'/></Link>         
       </span>
        
      </CardActions>
    </Card>
    </>
  );
}
