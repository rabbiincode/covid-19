import { NativeSelect, Typography } from "@material-ui/core"
import { useEffect, useState } from "react"
import { fetchCountries } from "../api/api"
import useStyles from '../../styles'


const Countries = ({ handleCountryChange }) => {
  const classes = useStyles()

  const [countries, setCountries] = useState([])

 useEffect(() => {
   const fetchApi = async() => {
     setCountries(await fetchCountries())
   }
   fetchApi()
 }, [])

 console.log(countries);
  return (
    <div className={classes.countries}>
      <Typography className={classes.contain} variant='h6' gutterBottom>Coronavirus Cases Globally</Typography>
      <NativeSelect className={classes.color4} onChange = {(e) => handleCountryChange(e.target.value)}>
        <option value = "" >Worldwide</option>
          { countries?.map((country, i) => {
            return (
              <option key={i} value={country.name} style={{background: 'grey'}}>{country.name}</option>
            )
          })}
      </NativeSelect>
    </div>
  )
}

export default Countries