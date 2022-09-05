import ReactDom from 'react-dom/client';
import React, {useState} from 'react';




function App() {
    
    const [color, setColor] = useState('bg-red-500'); //red is the default color

    //change the div color to the clicked button color:
    const changeColor = (e) => {
        setColor(e.target.className);
    }
    
    return (
      <div className='flexd d-flex ml-[15%] w-[70%] rounded h-screen place-items-center justify-center text-center font-bold bg-slate-800	'>
        <div class="text-5xl p-[2%] font-extrabold ...">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Color Picker</span>
        </div>
        {/* The color of this div will change to the color of the clicked button */}
        <div className= {`flex w-[50%] m-auto h-[30%] place-items-center justify-center rounded ${color}`} > 
          <h1 className='text-white'>The clicked button color will be set here.</h1>
        </div>
        
        <div className='text-white m-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  '>
          <button 
            className= 'bg-blue-500 hover:bg-blue-700  py-2 px-4 rounded'
            type = "button" onClick = {changeColor}>Blue</button>
          <button 
            className='bg-green-500 hover:bg-green-700 py-2 px-4 rounded' 
            type = "button" onClick = {changeColor}>Green</button>
          <button 
            className='bg-yellow-500 hover:bg-yellow-700 py-2 px-4 rounded' 
            type = "button" onClick = {changeColor}>Yellow</button>
           <button 
            className='bg-pink-400 hover:bg-pink-500 py-2 px-4 rounded' 
            type = "button" onClick = {changeColor}>Pink</button>
          <button 
            className='bg-orange-400 hover:bg-orange-500 py-2 px-4 rounded' 
            type = "button" onClick = {changeColor}>Orange</button>
          <button 
            className='bg-purple-500 hover:bg-purple-700 py-2 px-4 rounded' 
            type = "button" onClick = {changeColor}>Purple</button>
        </div>
      </div>
    );
}

export default App;
