
import { useState } from 'react'
import './App.css'
import Nav_bar from './nav_bar'
import Row_buttons from './row_buttons'
import Text_area from './text_area'
import Text_properties from './text_properties'

function App() {
let [textValue,setTextValue]=useState("");
let [colorValue,setColorValue]=useState("bg-blue-400");
let[darkModeValue,setDarkMode]=useState(false);
function SetBackgroundColor(newColorValue){
setColorValue(newColorValue);
}
function toggleDarkMode(){
  if(darkModeValue){
    setColorValue("bg-blue-400");//as value being transformed from dark->bright  

  }else{//bright-> dark .
    setColorValue("bg-gray-800");
  }
  setDarkMode((prev)=>!prev);
}
  return (
    <div className={`min-h-screen ${darkModeValue? "bg-gray-900":"bg-white"}`}> 
    <Nav_bar colorValue={colorValue} setColorValue={SetBackgroundColor}  setDarkMode={toggleDarkMode} darkModeValue={darkModeValue}/>
    <Text_area textValue={textValue} setTextValue={setTextValue} darkMode={darkModeValue} colorValue={colorValue}/>
    <Row_buttons child1='UpperCase' child2='LowerCase' child3='Clear' child4='Copy' textValue={textValue} setTextValue={setTextValue}/>
<Text_properties textValue={textValue}/>
    </div>
  )
}

export default App
