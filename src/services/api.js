import axios from 'axios'

export const corebiz = axios.create({
  baseURL: 'https://corebiz-test.herokuapp.com/',
});