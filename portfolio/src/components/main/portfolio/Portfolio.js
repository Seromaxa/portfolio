import React, {useState} from 'react'
import {connect} from 'react-redux'
import {filter} from '../../../functions/functions'
import Verstka from '../../../imagens/verstka.jpg'
import Landing from '../../../imagens/landing.jpg'
import Library from '../../../imagens/library.png'
import Todo from '../../../imagens/todo.png'



const Portfolio = props =>{

   const active = filter(props.lang).active

    const [worcks,setWorcs]=useState({
        
    })

 


    return(
        <>
 
    </>
    )

}

function mapStateToProps(state){
    return{
        lang: state.langReducer.languages
    }
 
}

export default connect(mapStateToProps)(Portfolio)