
import { useState, useRef } from "react";

import fetchWeatherData from '../Actions';

const Input = () => {

  const [searchTerm, setSearchTerm] = useState();

  const inputRef = useRef();

  const changeHandler = (e) => {
    setSearchTerm(e.target.value)
  }

  const clickHandler = (e) => {
    const citySearchForAPI = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=9b71dd7687d5daeb5225c83041aa3ed4`
    
    fetchWeatherData(citySearchForAPI);
    inputRef.current.value = '';
  }



  const enterHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      clickHandler();
      inputRef.current.value = '';
    }
  }



  return (
    <form>
      <input 
        ref={inputRef}
        id="input-box" 
        type="text" 
        placeholder="Enter City Name..." 
        onChange={changeHandler} 
        onKeyDown={enterHandler}
      ></input>
      <button 
        type="button" 
        className="btn btn-primary" 
        onClick={clickHandler}
      >Submit</button>
    </form>
  )
}



export default Input