import React from 'react'
import {connect} from 'react-redux'
import {EMAIL,PHON} from '../../../store/text/articles'
import {filter,age} from '../../../functions/functions'

const Simple = props =>{
    const active = filter(props.lang).active

 return(
     <div className='info'>

         <ul className='info__small'>
             <li><h2>{active.myName}</h2></li>
             <li><span>{active.age} :</span><span> {age('1981-07-29')}</span></li>
             <li><span>{active.city} :</span><span> {active.cityName}</span></li>
             <li><span>{active.phone} :</span><span> {PHON}</span></li>
             <li><span>{active.mail} :</span><a href="mailto: sergromanenko@gmail.com" className='info__small__link'> {EMAIL}</a></li>
             
         </ul>
         
     </div>
     
 )
}
function mapstateToprops(state){
    return{
        lang : state.langReducer.languages
    }
}


export default connect(mapstateToprops)(Simple)
