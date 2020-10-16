import React from 'react'
import {connect} from 'react-redux'
import {filter} from '../../../functions/functions'
import {TECHNOLOGY} from '../../../store/text/articles'

const Technology = props =>{
    const active = filter(props.lang.languages).active

  return(
      <section className='technology'>
         <h2>{active.skillsTag}</h2>
  <ul className='technology__list'>{TECHNOLOGY.map(item=><li key={item}>{item}</li>)}</ul>
      </section>
  )  
}

function mapStateToProps(state){
    return{
        lang: state.langReducer
    }
}
export default connect(mapStateToProps)(Technology)