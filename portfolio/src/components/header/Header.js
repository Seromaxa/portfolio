import React from 'react'
import {connect} from 'react-redux'
import {filter} from '../../functions/functions'
import LanguageThumb from '../languageThumb/languageThumb'

const Header = props=>{

    const active = filter(props.lang.languages).active
    //  const unActive = filter(props.lang.languages).unActive
     
    return(
        
        <header  className = 'header' >
            <h1 className='header__logo'>{active.myName}</h1>
                    <nav className='header__nav'>
                    <ul className='header__list'>
                        <li>{active.cv}</li>
                        <li>{active.works}</li>
                        <li>{active.contact}</li>
                    </ul>
                    <LanguageThumb />
                </nav> 
                </header>
                )

}

function mapStateToProps(state){
    return{
        lang: state
    }
}
export default connect(mapStateToProps)(Header)
