import React, {useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {filter} from '../../../functions/functions'
import Imagen from '../../../UI/imagens/Imagen'




const Portfolio = props =>{

   const active = filter(props.lang).active


 


    return(
        <section>
        <h2 className='main_wrapper__list__hero'>{active.works}</h2>
     <ul className='main_wrapper__list'>
         {Object.keys(props.photo).map(item=><li key={item}><Imagen wrapper='main_wrapper__list__list_item' wrapped={'main_wrapper__list__list_item__imagen'} src={props.photo[item]} alt={item} />
         <p className='main_wrapper__list__list_item__description'>{active[item]}</p>
         </li>)}
     </ul>
     </section>
    )

}

function mapStateToProps(state){
    return{
        lang: state.langReducer.languages,
        photo: state.portfolioRducer
    }
 
}

export default connect(mapStateToProps)(Portfolio)