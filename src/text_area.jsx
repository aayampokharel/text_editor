import React from 'react'

function Text_area({textValue="",setTextValue,colorValue="bg-amber-50",darkMode=false}) {
  let textColor=darkMode?"text-white":"text-black";
  let borderColor=darkMode?"border-white":"border-black";
  return (
    <div className={'flex justify-center  m-10'}>
      <textarea rows="10" cols="50"   
      value={textValue}
      onChange={(val)=>setTextValue(val.target.value)}
      className={` ${darkMode? colorValue:"bg-amber-50"} ${textColor} 
      border-2 ${borderColor}`}>

      </textarea>
    </div>
  )
}

export default Text_area
