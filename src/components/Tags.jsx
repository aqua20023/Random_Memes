
import { useState } from 'react'
import Spinner from './Spinner';
import  useGif  from '../hooks/useGif';

// this is a custom hook that fetches GIFs from the Giphy API based on a tag.
// but dosent use {} for importing hooks like other pre defined hooks

const Tags = () => {
  const [tag, setTag] = useState('');
  const {gif, loading, fetchData} = useGif(tag);



  function changeHandler(event) {
    setTag(event.target.value);
  }


  return (
    <div className='w-1/3  bg-blue-500 items-center flex flex-col rounded-lg border border-black gap-y-5 mt-[15px]'>
      <h1 className='text-2xl mt-[25px] underline uppercase font-bold '>{tag} Gif</h1>

      {
      loading ? (<Spinner/>):( <img src={gif} alt="Random gif" width="450" />)
      }

      
        <input 
        type="text" 
        name='Tag' 
        value={tag}
        onChange={changeHandler}
        className='w-9/12 mb-[25px] mt-[25px] bg-white rounded-lg text-lg text-center'/>
     
      <button onClick={() => fetchData(tag)}
      className='w-9/12 mb-[25px] bg-white rounded-lg text-lg '>
        Generate
      </button>
    </div>
  )
}

export default Tags
