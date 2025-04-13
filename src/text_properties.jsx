import React from 'react'

function Text_properties({textValue=""}) {
    function totalWordsListCount(){
        
if(textValue.trim()===""){return 0}
        return textValue.trim().split(/\s+/).length
    }
  return (
    <div className='flex justify-center space-x-20'>
      <p>character Count:{textValue.length} </p>
      <br/>
      <div><p>words count:{totalWordsListCount()}</p></div>
    </div>
  )
}

export default Text_properties
