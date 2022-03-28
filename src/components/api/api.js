import axios from 'axios'

const url = 'https://disease.sh/v3/covid-19'

export const fetchData = async (country) => {
  let urlChange = url
  if(country) {
    urlChange = `${url}/countries/${country}`
  } else {
    urlChange = `${url}/all`
  }
  try {
    const data = await axios.get(`${urlChange}`)
      return data.data
  } catch (error) {
      return error
  }
}

export const fetchCountries = async () => {
  try {
     const data= await axios.get(`${url}/countries`)
     const countries = data.data
     console.log(countries);
       return countries.map(country => ({
        name: country.country,
        cases: country.cases
       }))
  } catch (error) {
      return error
  }
}