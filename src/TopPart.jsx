import { useState } from 'react';
import './App.css';

function TopPart({ getWeather, city, con }) { // ✅ Accept props
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    getWeather(inputValue); // ✅ Pass input value to parent function
  };

  return (
    <>
      {/* Top div */}
      <div className="lg:min-h-[50vh] lg:relative lg:flex border border-amber-400 w-full bg-[#487eb0]">
        {/* input tag with search button */}
        <div className="inpCity overflow-hidden rounded-2xl lg:absolute lg:top-[1rem] lg:right-[2rem] flex w-[90vw] lg:w-[40vw] h-[3rem]">
          <input 
            className="w-[80%] px-[1rem] outline-0 bg-white" 
            type="text" 
            placeholder="Enter city" 
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} // ✅ Update state on change
          />
          <span className="bg-[#7f8fa6] h-full grow flex justify-center items-center pointer" onClick={handleSearch}>
            Search
          </span>
        </div>
        {/* left div */}
        <div className="bg-[#808e9b] lg:w-xl rounded-tr-4xl rounded-br-4xl flex items-center justify-center flex-col p-[1rem]">
          <span className="py-1 text-4xl">{city}</span>
          <span className="py-1">{con}</span>
          <span className="py-1 text-6xl">Temp</span>
          <span className="py-1 text-3xl">Cloud</span>
        </div>
      </div>
    </>
  );
}

export default TopPart;
