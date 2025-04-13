import React from 'react'

function Colored_buttons({textName="",textValue="",setTextValue}) {
  function handleClick(){
    switch(textName){
      case "UpperCase":
        console.log("uppercaase");
        setTextValue(textValue.toUpperCase());
        break;
        case "LowerCase":
          setTextValue(textValue.toLowerCase());
          break;
          case "Clear":
            setTextValue("");
            break;
            case "Copy":
              navigator.clipboard.writeText(textValue);
              break;  
    }
  }

  return (
    
      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" 
      onClick={()=>handleClick()}
      >
    <span>{textName}</span>
    </button>
    
  )
}

export default Colored_buttons
