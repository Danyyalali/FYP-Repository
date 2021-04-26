import React from 'react';
import {Link} from 'react-router-dom';
import './HotItems.css';
import Grid from '@material-ui/core/Grid';
import Item from '../Item/Item';
import {Button} from '@material-ui/core';
  
function HotItems() {
    return (
        <div>
  <Link className='linkStyle'  to='/hot-product'><h1 className='head'>HOT PRODUCTS</h1></Link> 
        <Grid container className='H_root'>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {[0, 1, 2,3,4,5].map((value) => (
              <Grid key={value} item>
                <Item/>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid container justify='center' item xs={12}>
        
            <Button className='showBtn'><Link className='linkStyle' to='/hot-product'>Show More</Link></Button>
        </Grid>
      </Grid> 
        </div>
    )
}

export default HotItems
