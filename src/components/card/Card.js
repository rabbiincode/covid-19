import { Box, Card as border, CardContent, Grid, Typography } from '@material-ui/core'
import Countup from 'react-countup'
import useStyles from '../../styles'


const Card = ({ cardTitle, value, desc, bod }) => {
 const classes = useStyles()

  return (
   <Grid component={border} style={{margin:20}} 
     className={cardTitle ==='Infected' ? classes.color1 : cardTitle ==='Recovered' ? classes.color2 : classes.color3}
   >
     <Box className={classes.card}>
       <Typography variant='h5' color='textPrimary'>{cardTitle}</Typography>
     </Box>
     <CardContent className={classes.content}>
       <Typography variant='h5'>
         <Countup start={0} end={value} duration={3} separator=',' /> 
       </Typography>
       <Typography color='textSecondary'>{desc}</Typography>
     </CardContent>
   </Grid>
  )
}

export default Card