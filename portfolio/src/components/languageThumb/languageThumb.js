import React from 'react'
import {connect} from 'react-redux'

const shower = (willBoolen,arr,nameOfClass) =>{
    if(!!willBoolen){
     arr.push(nameOfClass) 
    }else{
     return arr
    } 
    return arr.join(' ')
     }



const LanguageThumb = (props) => {

    const classList = ['header__language__list']


    return (
        <div className='header__language' onClick={props.listVision}>

            <span>{props.lang.nameLanguage}</span>	&nbsp; <span >{props.lang.activLanguage}</span>
            <ul className={shower(props.lang.option, classList, 'vision')}>
                <li onClick={props.changeLang} className='activLang'>{props.lang.activLanguage}</li>
                <li onClick={props.changeLang} >{props.lang.language}</li>
            </ul>
        </div>
    )
}

function mapStateToProps(state){
    return{
        lang: state
    }
}

function mapDispatchToProps(dispatch){
 return{
     listVision: ()=> dispatch({type: 'SHOW_LIST'}),
     changeLang: event=> dispatch({type:'CHANGE_LANG',val:event})
 }
}


export default connect(mapStateToProps,mapDispatchToProps)(LanguageThumb)
