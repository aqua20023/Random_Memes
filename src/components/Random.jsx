import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner';

// const API_KEY = 'ip7vt7TfQIUeDhLG6zoVYiyTObnxXW1S';
const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
 // Replace with your actual Giphy API key

const Random = () => {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);
  


  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const {data} = await axios.get(url);
    const imageUrl = data.data.images.downsized_large.url;
    console.log(imageUrl);
    setGif(imageUrl);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  },[])


 function clickHandler(){
   fetchData();
 }


  return (
    <div className='w-1/3  bg-green-500 items-center flex flex-col rounded-lg border border-black gap-y-5 mt-[15px]'>
      <h1 className='text-2xl mt-[25px] underline uppercase font-bold '>Random Gif</h1>

      {
      loading ? (<Spinner/>):( <img src={gif} alt="Random gif" width="450" />)
      }

      
     
      <button onClick={clickHandler}
      className='w-9/12 mb-[25px] bg-white rounded-lg text-lg '>
        Generate
      </button>
    </div>
  )
}

export default Random
