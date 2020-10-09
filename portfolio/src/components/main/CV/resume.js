import React from 'react'
import Imagen from '../../../UI/imagens/Imagen'
import MyFace from '../../../imagens/webVersion.png'
import Simple from './simple'
import General from './general'
import Portfolio from '../portfolio/Portfolio'


const Resume =()=>{
    return(
       <main className='main'>
          <aside className='main__aside'>
             <div className='aside__semple_wrapper'>
                <Imagen wrapper='info__img__wrapper' wrapped='info__img' src={MyFace} alt='man face' />
                <Simple />
             </div>
             <General />
          </aside>
          <section className='main__wrapper'>
            <Portfolio />
          </section>

       </main>
  )
    
}
export default Resume


// <Canvas />
// <div className='wrapper'>
//    <Simple />
//    <General />
// </div>