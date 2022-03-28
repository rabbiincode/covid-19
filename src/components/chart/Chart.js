import { Bar } from 'react-chartjs-2'
import { Box } from '@material-ui/core'
import { Chart as ChartJS } from 'chart.js/auto'
import useStyles from '../../styles'


const Chart = ({ data: { cases, recovered, deaths }}) => {
    const classes = useStyles()

    return (
       <div>
        <Box className = {classes.chart}>
            {cases ? (
            <Bar 
                data = {{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'Cases',
                        data: [cases, recovered, deaths],
                        backgroundColor: [
                            'rgba(255,255, 0)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(255, 0, 0)',
                        ],
                    }]
                }}
                options = {{
                    legend: {display: false},
                    title: { display: true, text: 'Current State in Country'}
                }}

            /> ) : ''
        }   
        </Box>
      </div>
    )
}

export default Chart; 