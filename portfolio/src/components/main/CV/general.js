import React from 'react'
import { connect } from 'react-redux'
import { filter } from '../../../functions/functions'

const General = props => {

    const active = filter(props.lang.languages).active

    return (
        <div className='general_info'>
            <h2 className='general_info__hero'>{active.aboutMe}</h2>
            <p>{active.generalInfo}</p>
            <p>{active.lookFo} junior <i>Front-end</i> {active.vacancy}.</p>

        </div>
    )

}

function mapStateToProps(state) {
    return {
        lang: state.langReducer
    }
}

export default connect(mapStateToProps)(General)