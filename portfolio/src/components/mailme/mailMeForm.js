import React, { useEffect} from 'react'
import { filter } from '../../functions/functions'
import Input from '../../UI/input/Input'
import Button from '../../UI/button/Button'
import { connect } from 'react-redux'
import { closeMail,fillInput,sendler,errMail } from '../../store/actions/modalsAction'



const MailForm = props => {
    const active = filter(props.lang.languages).active

    const submitHandler = ev => {
        ev.preventDefault()
    }

    const clicker = event => {
        if (event.code === 'Escape') {
            return props.closeHandler()
        }

    }

    useEffect(() => {
        window.addEventListener('keydown', clicker)
        return () => {
            window.removeEventListener('keydown', clicker)
        }
    })
 

 



    return (
        <div className='form_wrapper'>
            <div className='closer form_closer_position' onClick={props.closeHandler} >&#10008;</div>
            <form className='form' onSubmit={ev => submitHandler(ev)}>
                <h2>{active.contactMe}</h2>
            
                <Input
                    wrapper= 'input_wrapper'
                    labelHero={active.yourName}
                    inputType='text'
                    value={props.mailer.message.name}
                    name='name'
                    autoComplete = 'off'
                    onChange ={event=>props.fillHandler('name',event.target.value)}

                />
                <Input
                wrapper= 'input_wrapper'
                    labelHero={active.mail}
                    inputType='email'
                    name='senderMail'
                    value={props.mailer.message.mail}
                    warningMessage={props.mailer.warning}
                    warning={active.warning}
                    autoComplete = 'off'
                    onFocus = {props.reWriteMail}
                    onChange ={event=>props.fillHandler('mail',event.target.value)}
                />
                <div className='text_wrapper'>
                    <label htmlFor='messageText'>{active.message}</label>
                    <textarea id='messageText' name='message' rows='8' onChange ={event=>props.fillHandler('text',event.target.value)} value={props.mailer.message.text}/>
                </div>
                <Button
                    buttonHero={active.send}
                    onClick={props.sendHandler}
                    buttonClass='button'
                />

            </form>
        </div>
    )

}

function mapStateToProps(state) {
    return {
        lang: state.langReducer,
        mailer :state.modalReducer

    }

}
function mapDispatchToProps(dispatch) {
    return {
        closeHandler: () => dispatch(closeMail()),
        fillHandler : (value,event) => dispatch(fillInput(value,event)),
        sendHandler : ()=>dispatch(sendler()),
        reWriteMail: ()=>dispatch(errMail())
    }

}




export default connect(mapStateToProps, mapDispatchToProps)(MailForm)