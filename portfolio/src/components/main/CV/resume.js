import React from 'react'
import Imagen from '../../../UI/imagens/Imagen'
import MyFace from '../../../imagens/webVersion.png'
import Simple from './simple'
import General from './general'
import Portfolio from '../portfolio/Portfolio'
import Technology from './technology'
import Canvas from '../CV/bacground/canvas'
import LanguageThumb from '../../languageThumb/languageThumb'
import Modal from '../../../UI/modal/Modal'
import MailForm from '../../mailme/mailMeForm'
import {connect} from 'react-redux'



const Resume =props=>{

 

    return(
       <main className='main' >
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
             <Technology />
            <Portfolio />
          </article>
        {props.modalOpen.open?<Modal /> :null} 
        {props.modalOpen.mail?<MailForm />:null}
       </main>
  )
    
}

function mapStateToProps(state){
   return{
      modalOpen: state.modalReducer
   }
   
}


export default connect(mapStateToProps)(Resume)