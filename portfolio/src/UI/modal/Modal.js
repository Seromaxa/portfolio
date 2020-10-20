import React, {useEffect} from 'react'
import {addClass} from '../../functions/functions'
import {connect} from 'react-redux'
import {close,thumb} from '../../store/actions/modalsAction'
import Imagen from '../imagens/Imagen'



const Modal = props =>{

 const  classArr = ['modal_wrapper']
 const listClass = ['modal_item__img_wrapper']

 const clicker = event=>{
     if(event.code === 'Escape'){
  return props.closeHandler()
     }
     
 }

useEffect(()=>{
    window.addEventListener('keydown',clicker)
    return()=>{
        window.removeEventListener('keydown',clicker)
    }
})
 

    return (

        <div className={addClass(props.closeBoolen.open,classArr,'open')}>
            <div className='closer modal_wrapper_closer__position' onClick ={props.closeHandler} >&#10008;</div>
            <div className='leftArroy' onClick={()=>props.thumbHalder('left')}></div>
         <ul className='modal_item'>
             {props.photos.map(item=><li className='modal_item__list_item' key={'photo'+ item.name}> <Imagen wrapper={addClass(item.show,listClass,'vision')} wrapped='modal_item__img_wrapper__imagen'src={item.photo}/></li>)}
         </ul>
           <div className='rigthArroy' onClick={()=>props.thumbHalder('right')}></div>
        </div>
    )
}


function mapStateToProps(state){
    return{
        closeBoolen: state.modalReducer,
        photos: state.portfolioRducer 
    }
}
function mapDispatchToProps(dispatch){
    return{
        closeHandler: ()=>dispatch(close()),
        thumbHalder: (value)=>dispatch(thumb(value)),
        
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Modal)