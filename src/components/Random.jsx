import Spinner from './Spinner';
import  useGif from '../hooks/useGif';
 
// const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const Random = () => {

const {gif, loading, fetchData} = useGif();

  return (
    <div className='w-1/3  bg-green-500 items-center flex flex-col rounded-lg border border-black gap-y-5 mt-[15px]'>
      <h1 className='text-2xl mt-[25px] underline uppercase font-bold '>Random Gif</h1>

      {
      loading ? (<Spinner/>):( <img src={gif} alt="Random gif" width="450" />)
      }

      <button onClick={()=> fetchData()}
      className='w-9/12 mb-[25px] bg-white rounded-lg text-lg '>
        Generate
      </button>
    </div>
  )
}

export default Random
