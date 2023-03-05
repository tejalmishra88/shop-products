import {Component} from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

class Products extends Component {
  render() {
  //  console.log('prpos..', this.props)
    return (
      <>
      <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Typography sx={{ mt: 4, mb: 2,mx:2 }} variant="h5" display="inline" color="blue"> {this.props.category}</Typography>
        <Typography sx={{ mt: 4, mb: 2,mx:2 }} variant="h6" display="inline" color="black"> {this.props.name}</Typography>
        <Typography sx={{ mt: 4, mb: 2,mx:2 }} variant="h7" display="inline" color="red"> {this.props.desc}</Typography>
        <Typography sx={{ mt: 4, mb: 2,mx:2 }} variant="h6" display="inline" color="blue"> {this.props.price}</Typography>


      </Grid>
      </Grid>
      </>
    )
  }
}

export default Products
