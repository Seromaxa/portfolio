import React, { useEffect, useRef } from 'react'
import { init, send } from 'emailjs-com'
import { filter } from '../../functions/functions'
import Input from '../../UI/input/Input'
import Button from '../../UI/button/Button'
import { connect } from 'react-redux'
import {USER,SERVIS,TEMPLATE} from '../../myConst'
import { closeMail } from '../../store/actions/modalsAction'



const MailForm = props => {


    const name = useRef()
    const mail = useRef()
    const text = useRef()

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
    useEffect(() => {

    }, [])

    const sendHandler = () => {
        init(USER)
        send(SERVIS, TEMPLATE, { name: name.current.value, mail: mail.current.value, message: text.current.value })
        name.current.value = ''
        mail.current.value = ''
        text.current.value = ''
        props.closeHandler()
    }

    return (
        <div className='form_wrapper'>

            <form className='form' onSubmit={ev => submitHandler(ev)}>
                <h2>{active.contactMe}</h2>
                <div className='closer form_closer_position' onClick={props.closeHandler} >&#10008;</div>
                <Input
                    labelHero={active.yourName}
                    inputType='text'
                    name='name'
                    refs={name}
                />
                <Input
                    labelHero={active.mail}
                    inputType='email'
                    name='senderMail'
                    refs={mail}
                />
                <div>
                    <label htmlFor='messageText'>{active.message}</label>
                    <textarea id='messageText' name='message' ref={text} />
                </div>
                <Button
                    buttonHero={active.send}
                    onClick={sendHandler}
                />
            </form>
        </div>
    )

}

function mapStateToProps(state) {
    return {
        openMail: state.modalReducer.mail,
        lang: state.langReducer

    }

}
function mapDispatchToProps(dispatch) {
    return {
        closeHandler: () => dispatch(closeMail())
    }

}




export default connect(mapStateToProps, mapDispatchToProps)(MailForm)