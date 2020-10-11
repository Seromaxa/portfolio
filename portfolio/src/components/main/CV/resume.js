import React from 'react'
import Imagen from '../../../UI/imagens/Imagen'
import MyFace from '../../../imagens/webVersion.png'
import Simple from './simple'
import General from './general'
import Portfolio from '../portfolio/Portfolio'
import Canvas from '../CV/bacground/canvas'
import LanguageThumb from '../../languageThumb/languageThumb'


const Resume =()=>{
    return(
       <main className='main'>
        <LanguageThumb />
          <aside className='main__aside'>
             <div className='aside__semple_wrapper'>
                <Imagen wrapper='info__img__wrapper' wrapped='info__img' src={MyFace} alt='man face' >
                   <Canvas />
                </Imagen>
                <Simple />
             </div>
             <General />
          </aside>
          <article className='main__wrapper'>
            <Portfolio />
          </article>
       </main>
  )
    
}
export default Resume


// <Canvas />
// <div className='wrapper'>
//    <Simple />
//    <General />
// </div>