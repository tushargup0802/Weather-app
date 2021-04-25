import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'a4a2066898ccc033c783f1f7e47a33dd';

export const getData = async(city,country) => {
    return await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
}