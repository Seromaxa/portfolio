import React from 'react'
import Simple from './simple'
import General from './general'
import Canvas from './bacground/canvas'

const Resume =()=>{
    return(
        <main className='main'>
          <Canvas />
        <div className='wrapper'>
           <Simple />
           <General />
        </div>
       
     </main>
  )
    
}
export default Resume