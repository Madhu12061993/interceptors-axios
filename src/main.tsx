import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import axios from 'axios'

axios.defaults.baseURL = 'https://dummyjson.com';
axios.defaults.timeout = 5000;
axios.defaults.headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer auth_token'
};

axios.interceptors.request.use( (config) => {
  console.log(config);
  return {...config , headers : {...config.headers , Authorization: 'Bearer toke'}};
})
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
