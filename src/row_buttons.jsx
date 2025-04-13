import React from 'react'
import Colored_buttons from './common/colored_buttons'


function Row_buttons({child1="",child2="",child3="",child4="",textValue="",setTextValue}) {
  return (
    <div className='flex justify-center'>
<Colored_buttons textName={child1} textValue={textValue} setTextValue={setTextValue}  />
<Colored_buttons textName={child2} textValue={textValue} setTextValue={setTextValue} />
<Colored_buttons textName={child3} textValue={textValue} setTextValue={setTextValue}/>
<Colored_buttons textName={child4} textValue={textValue} setTextValue={setTextValue}/>
    
    
    </div>
  )
}

export default Row_buttons
