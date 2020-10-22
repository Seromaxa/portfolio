import React from 'react'
import {connect} from 'react-redux'
import {filter} from '../../../functions/functions'
import Imagen from '../../../UI/imagens/Imagen'
import {open} from '../../../store/actions/modalsAction'




const Portfolio = props =>{

   const active = filter(props.lang).active


 


    return(
        <section className='my_worcks'>
        <h2 className='main_wrapper__list__hero'>{active.works}</h2>
     <ul className='main_wrapper__list'>
         {props.photo.map(item=><li onClick={()=>props.openHandler(item.name)} key={item.name}><Imagen wrapper='main_wrapper__list__list_item' wrapped={'main_wrapper__list__list_item__imagen'} src={item.photo} alt={item.name} />
         <p className='main_wrapper__list__list_item__description'>{active[item.name]}</p>
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
function mapDispatchToProps(dispatch){
    return{
        openHandler: (val)=>dispatch(open(val))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Portfolio)