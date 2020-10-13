import React from 'react'
import {addClass} from '../../functions/functions'
import {connect} from 'react-redux'
import {close} from '../../store/actions/modalsAction'
import Imagen from '../imagens/Imagen'



const Modal = props =>{

 const  classArr = ['modal_wrapper']


    return (
        <div className={addClass(props.closeBoolen.open,classArr,'open')}>
           <div className= 'modal_item'>
           <div className='modal_wrapper_claser' onClick ={props.closeHandler} >&#10008;</div>
           {props.photos.map(item=>item.show?<Imagen key={`phto`+item.name} wrapper='modal_item__img_wrapper' wrapped="modal_item__img_wrapper__imagen"src={item.photo}/>:null)}
           </div>
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
        closeHandler: ()=>dispatch(close())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Modal)