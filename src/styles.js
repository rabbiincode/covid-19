import { makeStyles } from "@material-ui/core"

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
  },
  container1: {
    display: 'flex',
    textAlign: 'center',
    alignItem: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 0.9
  },
  cases: {
    background: 'lightgrey',
    color: 'black'
  },
  header: {
    width: '400',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
    padding: 10,
    color: 'white'
  },
  components: {
    display: 'flex',
    flexDirection: 'column',
    alignItem: 'center'
  },
  contain: {
    color: 'wheat',
    marginBottom: '20px',
    fontWeight: '700'
  },
  count: {
    color: 'red'
  },
  date: {
    color: 'gold',
    fontSize: '5',
    marginBottom: '10px'
  },
  card: {
    background: 'grey',
    padding: '10'
  },
  content: {
    background: 'lightgrey'
  },
  color1: {
    borderBottom: '10px solid yellow',
  },
  color2: {
    borderBottom: '10px solid green',
  },
  color3: {
    borderBottom: '10px solid red'
  },
  countries: {
    color: 'wheat',
    marginBottom: '20px'
  },
  color4: {
    color: 'black',
    background: 'lightgrey',
    fontWeight: '500'
  },
  chart : {
    width: '75%',
    margin: '20px 80px',
    color: 'wheat',
    [theme.breakpoints.down('sm')]: {
    margin: '20px 50px',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '20px 30px',
      },
  },
  safe: {
    fontSize: '1rem',
    fontWeight: '600',
    color: 'wheat',
    textAlign: 'center',
    padding: '2rem 0'
  }
 }))