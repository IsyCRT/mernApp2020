import axios from 'axios'
import config from '../config.js'
export default axios.create({
  //SI USO VARIABLE DE ENTORNO
  baseURL: config.baseURL_API
  //cuando la tengo desplegada asi
  //baseURL: 'https://mernisyed.herokuapp.com/'
  //sino la tengo desplegada y la quiero pruebar local es asi
  //baseURL: 'http://localhost:5000'
  //ver video de como se hace pq hay que con npm start dejar corriendo la api
  //y ademas debo poner en package.json lo siguiente "proxy:"http://localhost:5000"
});
