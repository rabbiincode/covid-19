import { Box } from "@material-ui/core"
import './table.css'

const Table = ({ countries }) => {
  return (
    <Box className='table'>
      {countries.map(({ name, cases }) => (
        <tr>
         <td>{name}</td>
         <td><strong>{cases}</strong></td>
        </tr>
      ))} 
    </Box>
  )
}

export default Table