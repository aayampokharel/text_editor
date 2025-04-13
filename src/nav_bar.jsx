import React from 'react'

function Nav_bar({colorValue="bg-blue-400",setColorValue,setDarkMode,darkModeValue=false}) {
  
  
  let darkModeColor=colorValue==="bg-gray-800"?"bg-gray-800":colorValue;
  return (
<nav className={`flex py-3.5 items-center justify-between ${darkModeColor} w-full`}>
    
        <h1>MYAPP</h1>
        <div>
<ul className='flex items-center mx-4 space-x-5'>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
    <li>More</li>
</ul>
        </div>
        <div className=' mx-4 space-x-5'>
<ul className='flex items-center space-x-5'>
    <li><span className='bg-blue-800  inline-block w-10 h-10' onClick={()=>setColorValue("bg-blue-500")}></span></li>
    <li><span className='bg-green-800  inline-block w-10 h-10' onClick={()=>setColorValue("bg-green-500")}></span></li>
    <li><span className='bg-red-800  inline-block w-10 h-10' onClick={()=>setColorValue("bg-red-500")}></span></li>
    <li><label class="relative inline-flex items-center cursor-pointer">
<input type="checkbox" value="" class="sr-only peer"/>
<div class="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-black hover:peer-checked:bg-black" onClick={()=>setDarkMode()}></div>
</label></li>

</ul>

        </div>
    
</nav>

  )
}

export default Nav_bar
