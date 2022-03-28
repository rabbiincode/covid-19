import { Box, CircularProgress, Grid } from '@material-ui/core'
import useStyles from '../../styles'
import Card from '../card/Card'


const Cards = ({ data: { cases, recovered, deaths } }) => {
 const classes = useStyles()

 if(!cases){
    return <div><CircularProgress /></div>
 }

  return (
    <Box className={classes.components}>

      <Grid container spacing={3} justifyContent='center'>
         <Card
           cardTitle='Infected'
           value={cases}
           desc='Number of active covid cases'
           bod='10px solid yellow'
         />
         <Card
           cardTitle='Recovered'
           value={recovered}
           desc='Number of Recovered cases'
         />
         <Card
           cardTitle='Deaths'
           value={deaths}
           desc='Number of Deaths from covid'
         />
      </Grid>
    </Box>
  )
}

export default Cards