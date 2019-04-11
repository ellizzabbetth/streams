import axios from 'axios';
// creates instance of axioss
export default axios.create({
  baseURL: 'http://localhost:3001'
});
