import React from 'react'
import CV from './CV/cv'
import General from './CV/general'



const Main = ()=>{
 return( 
    <main className='main'>
<div className='wrapper'>
   <CV />
   <General />
</div>
    </main>
 )
}

export default Main