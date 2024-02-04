import axios from 'axios';
const baseURL = 'https://65beb226dcfcce42a6f2d5b1.mockapi.io/api/flight';

const FlightApi = axios.create({ baseURL });
export default FlightApi;