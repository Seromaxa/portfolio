import React from 'react'
import {connect} from 'react-redux'
import {filter} from '../../functions/functions'
import {show,asyncChanger} from '../../store/actions/actionsLang'

const addClass = (willBoolen,arr,nameOfClass) =>{
    if(!!willBoolen){
     arr.push(nameOfClass) 
    }else{
     return arr
    } 
    return arr.join(' ')
     }



const LanguageThumb = (props) => {

    const classList = ['header__language__list']
  
     const active = filter(props.lang.languages).active
     const unActive = filter(props.lang.languages).unActive
    
    


    return (

        <div className='header__language' onClick={props.listVision}>
            <span>{active.nameLanguage}</span>
            &nbsp;
            <span>{active.language}</span>
            <ul className={addClass(props.lang.option, classList, 'vision')}>
                <li key={active.id} className='activLang'>{active.language}</li>
    {unActive.map(item=><li onClick={event=>props.changeLang(event.target.id)} key={item.id} id={item.id}>{item.language}</li> )}
            </ul>
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
     changeLang: event=> dispatch(asyncChanger(event))

 }
}


export default connect(mapStateToProps,mapDispatchToProps)(LanguageThumb)