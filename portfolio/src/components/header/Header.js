import React from 'react'
import {connect} from 'react-redux'
import LanguageThumb from '../languageThumb/languageThumb'

const Header = props=>{
    console.log(props)
    return(
        
        <header className = 'header' >
            <h1 className='header__logo'>{props.lang.myName}</h1>
            <nav className='header__nav'>
                <ul className='header__list'>
    <li>{props.lang.cv}</li>
    <li>{props.lang.works}</li>
    <li>{props.lang.contact}</li>
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
