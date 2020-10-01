import React from 'react'
import {connect} from 'react-redux'
import {filter} from '../../functions/functions'

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
  
     const active = filter(props.lang.languages).active
     const unActive = filter(props.lang.languages).unActive
    
    


    return (

        <div className='header__language' onClick={props.listVision}>
            <span>{active.nameLanguage}</span>
            &nbsp;
            <span>{active.language}</span>
            <ul className={shower(props.lang.option, classList, 'vision')}>
                <li key={active.id} className='activLang'>{active.language}</li>
    {unActive.map(item=><li onClick={props.changeLang} key={item.id} id={item.id}>{item.language}</li> )}
            </ul>
            {/* {props.lang.languages.filter(item=>item.active === true).map(item=><div key={item.id+'wrapper'}><span>{item.nameLanguage}</span>&nbsp;<span>{item.language}</span></div>)}
            <ul className={shower(props.lang.option, classList, 'vision')}>
    {props.lang.languages.sort((item)=>item.active === true? -1:1).map(item=><li className={item.active?'activLang':null} key={item.id} onClick={props.changeLang} id={item.id} >{item.language}</li> )}
            </ul> */}
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



// <div className='header__language'>



     
// </div>