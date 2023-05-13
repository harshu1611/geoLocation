import logo from './logo.svg';
import './App.css';
import{useEffect, useState} from 'react';
import axios from 'axios'
function App() {
  const [location,setLocation]=useState([]);
  const geolocationAPI = navigator.geolocation;

const getLocation=()=>{
  if (!geolocationAPI) {
    console.log('Geolocation API is not available in your browser!')
  } else {
    geolocationAPI.getCurrentPosition((position) => {
      setLocation(position.coords);
     console.log(location)
    }, (error) => {
      console.log(error);
    })
  }


}
    
useEffect(()=>{
  getLocation();
},[location.latitude, location.longitude])
  
  

  

  return (
    <div>
      {/* <p>Your latitude is: {location.latitude}</p>
      <p>Your longitude is: {location.longitude}</p> */}
      latitude: {location.latitude} <br/>
      longitude: {location.longitude}
    </div>
  )
}

export default App;
