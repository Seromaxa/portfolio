import React from 'react'
import {connect} from 'react-redux'
import {filter} from '../../../functions/functions'

const General = props =>{
    const active = filter(props.lang).active

    return(
        <section className='general_info blocks_padding'>
          <h2 className='general_info__hero'>{active.aboutMe}</h2>
          <p className=''></p>
        </section>
    )

}
function mapStateToProps(state){
    return{
        lang : state.langReducer.languages
    }
}

export default connect(mapStateToProps)(General)