import { Box, Card, CardContent, Typography } from "@material-ui/core"
import { useEffect, useState } from "react"
import { fetchCountries, fetchData } from "./components/api/api"
import Cards from "./components/cards/Cards"
import Countries from "./components/countries/Countries"
import Chart from "./components/chart/Chart"
import useStyles from './styles'
import Table from "./components/table/Table"
import { sortData } from "./components/table/sortedTableData"
import Today from "./components/today/Today"
import './index.css'


const App = () => {
 const classes = useStyles()
 const [data, setData] = useState({})
 const [tableData, setTableData] = useState([])

 useEffect( async () => {
   const fetch = await fetchData()
   setData(fetch)
 }, [])
 console.log(data);

 const handleCountryChange = async(country) => {              //method
   const fetchedData = await fetchData(country)
   setData(fetchedData)
   console.log(fetchedData);
 }

 useEffect( async () => {
   const fetchApi = await fetchCountries()
   const sortedData = sortData(fetchApi)
   setTableData(sortedData)
 }, [])
console.log(tableData);

  return (
    <div className="app">
      <Box className={classes.header}>
        <Box>COVID-19 TRACKER APPLICATION</Box>
        <Typography className={classes.count}>No of Countries Affected : {data.affectedCountries}</Typography>
        <Typography className={classes.date}>Last Updated : {data.updated && new Date(data.updated).toDateString()}</Typography>
      </Box>  

      <div className={classes.container}>

        <div className={classes.container1}>
          <Countries handleCountryChange={handleCountryChange}/>
          <Cards data={data}/>
          <Chart data={data}/>
        </div>

        <div className={classes.container2}>
          <Card>
            <CardContent className={classes.cases}>
              <h3>Today's Cases Worldwide</h3>
              <Today data={data}/>
              <br style={{color: 'black'}}/>

              <h3>Live Cases by Country</h3>
              <Table countries={tableData}/>
            </CardContent>
          </Card>
        </div>
        
      </div>

      <div className="wrap">
        <div class="slide-right">
          <div className="real">Covid-19 is Real.</div>
          <div>Wash your hands regularly with soap and running water.</div>
          <div>Always put on your Nose Mask especially in crowded places.</div>
          <div>Observe all regulations laid out by Local and Health authorities.</div>
          <div className="safe">STAY SAFE</div>
        </div>
      </div>
      
    </div>
    
  )
}

export default App
