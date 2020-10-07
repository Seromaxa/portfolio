import React from 'react'
import {connect} from 'react-redux'
import {filter} from '../../../functions/functions'
import {TEXNOLOGY} from '../../../store/text/articles'

const General = props =>{

    const active = filter(props.lang.languages).active

    return(
        <section className='general_info'>
            <h2 className='general_info__hero'>{active.aboutMe}</h2>
            <p>{active.generalInfo}</p>
    <p>{active.lookFo} junior <i>Front-end</i> {active.vacancy}.</p>
    <h3>{active.skillsTag}:</h3>
    <ul className='general_info__skill_list'>{TEXNOLOGY.map(item=><li key={item}>{item}</li>)}</ul>
            <hr />
        </section>
    )

}

function mapStateToProps(state){
    return {
        lang: state.langReducer
    }
}

export default connect(mapStateToProps)(General)