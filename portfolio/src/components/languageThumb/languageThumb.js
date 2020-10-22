import React from 'react'
import {connect} from 'react-redux'
import {filter,addClass} from '../../functions/functions'
import {show,changer,hide} from '../../store/actions/actionsLang'
import Mail from '../mailme/mailme'


const LanguageThumb = (props) => {

    const classList = ['language__list']
  
     const active = filter(props.lang.languages).active
     const unActive = filter(props.lang.languages).unActive
    
    


    return (
<div className='language_wrapper' onMouseLeave={props.lang.option? props.listClose:null} >
     
            <ul className={addClass(props.lang.option, classList, 'display')}>
                <li key={active.id} className='activLang'>{active.language}</li>
                {unActive.map(item => <li onClick={event => props.changeLang(event.target.id)} key={item.id} id={item.id}>{item.language}</li>)}
            </ul>
            <div className='language' onClick={props.listVision}>
           <div>
                <p>{active.nameLanguage}</p>
                <p>{active.language}</p>
                <Mail />
            </div>
            </div>
           
        </div>
       )
}

function mapStateToProps(state){
    return{
        lang: state.langReducer
    }
}

function mapDispatchToProps(dispatch){
 return{
     listVision: ()=> dispatch(show()),
     changeLang: event=> dispatch(changer(event)),
     listClose: ()=> dispatch(hide())

 }
}


export default connect(mapStateToProps,mapDispatchToProps)(LanguageThumb)