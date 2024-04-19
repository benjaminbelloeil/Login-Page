import {useEffect, useState} from 'react';
import Form from './components/Form';

function App() {

  let [darkMode,setDarkMode] = useState(false);

  useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add('dark');
    }
    else{
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode])


  return (
    <div className = "flex w-full h-screen dark:bg-black">
      <div className='w-full flex items-center justify-center lg:w-1/2'>
        <Form />
      </div>
      <div className='hidden relative lg:flex h-full w-1/2 items-center justify-center bg-#f1f1f1 dark:bg-black'>
        <div className='w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce'/>
        <button onClick={()=>{setDarkMode(!darkMode)}}className='absolute right-10 top-10 bg-violet-500 text-white px-5 py-3 rounded hover:bg-violet-400'>{!darkMode?'Dark':'Light'} Mode</button>
        <div className='w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg dark:bg-black/10'/>
      </div>
    </div>
  );
}

export default App;
