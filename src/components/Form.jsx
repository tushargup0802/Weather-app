import { Box, Button, makeStyles, TextField } from "@material-ui/core"
import { useEffect, useState } from "react";
import { getData }  from '../service/api';
import Information from './information';

const useStyles = makeStyles ({
    component:{
    padding: 10,
    background: '#01579b',

    
    },
    input: {
        color:'white',
        marginRight: 15
    },
    button:{
        width:150,
        height: 40,
        background: '#e67e22',
        color:'white',
        marginTop: 5
    }
})


const Form = () => {
    const classes = useStyles();
    const [data, getWeatherData] = useState();
    const [city,setCity] = useState('');
    const [country,setCountry] = useState('');
    const [click, handleClick] = useState(false);


    useEffect(() =>{
        const getWeather = async()=>{
          city && await getData(city,country).then(response => {
           getWeatherData(response.data);
           console.log(response.data)
           })
        }
     getWeather();
     handleClick(false);
    }, [click]);

    const handleCityChange = (value) => {
        setCity(value);
    }

    
    const handleCountryChange = (value) => {
        setCountry(value);
    }

    return (
        <>
        <Box className={classes.component}>
            <TextField 
            inputProps = {{className: classes.input}}
            onChange = {(e)=> handleCityChange(e.target.value)}
              label = "CITY"         
            className= {classes.input}
            />
            <TextField 
            inputProps = {{className: classes.input}}
            onChange = {(e)=> handleCountryChange(e.target.value)}
              label = "COUNTRY"       
              className= {classes.input}     
            />
            <Button
             variant = "contained"
             className={classes.button}
             onClick = {() => handleClick(true)}
            >Get Weather</Button>
        </Box>
        <Information data ={data}  />

        </>
    )
}

export default Form;