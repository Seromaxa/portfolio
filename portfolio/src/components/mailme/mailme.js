import React from 'react'
import {connect} from 'react-redux'
import {openMail} from '../../store/actions/modalsAction'

const Mail = props =>{

    return(
        <div className= 'mail' onClick={(ev)=>props.mailMe(ev)}>
   <svg id="latter" enableBackground="new 0 0 64 64" height="50" viewBox="0 0 64 64" width="50" xmlns="http://www.w3.org/2000/svg"><g><path d="m62 12h-60c-.553 0-1 .448-1 1v38c0 .552.447 1 1 1h60c.553 0 1-.448 1-1v-38c0-.552-.447-1-1-1zm-30 27.632-27.463-25.632h54.926zm-11.784-8.262-17.216 17.216v-33.285zm1.463 1.365 9.638 8.996c.193.179.438.269.683.269s.49-.09.683-.269l9.638-8.996 17.265 17.265h-55.172zm22.105-1.365 17.216-16.069v33.285z"/><path d="m10 46h2v2h-2z"/><path d="m14 46h14v2h-14z"/></g></svg>
     </div>
    )
}


function mapDispatchToProps(dispatch){
    return{
        mailMe: event=> dispatch(openMail(event))
    }
   }
export default connect('',mapDispatchToProps) (Mail)