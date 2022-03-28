import './today.css'

const Today = ({data: { todayCases, todayRecovered, todayDeaths, continent, country, countryInfo }}) => {

  if(!countryInfo){
    return (
      <div className="today">
        <table>
          <caption>Cases around the Globe today</caption>
          <tr>
            <td id='one'>{todayCases}</td>
            <td id='two'>{todayRecovered}</td>
            <td id='three'>{todayDeaths}</td>
          </tr>
        </table>
      </div>
    )
  }
  return (
    <div className='today'>
      <table>
        <tr>
         <th>{continent}</th>
         <th>{country}</th>
         <th><img className='img' src={countryInfo.flag} alt="" /></th>
        </tr>
        <tr>
         <td id='one'>{todayCases}</td>
         <td id='two'>{todayRecovered}</td>
         <td id='three'>{todayDeaths}</td>
        </tr>
      </table>
    </div>
  )
}

export default Today