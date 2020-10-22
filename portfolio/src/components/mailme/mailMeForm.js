import React, { useEffect, useState, useRef } from 'react'
import { init, send } from 'emailjs-com'
import is from 'is_js'
import { filter } from '../../functions/functions'
import Input from '../../UI/input/Input'
import Button from '../../UI/button/Button'
import { connect } from 'react-redux'
import { USER, SERVIS, TEMPLATE } from '../../myConst'
import { closeMail } from '../../store/actions/modalsAction'



const MailForm = props => {

    const [warn, setWarn] = useState(false)
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

    const focusHandler = () => {
        if (warn === true) {
            setWarn(false)
        }
    }

    const sendHandler = () => {
        if (is.email(name.current.value) === false) {
            setWarn(true)
            return
        } else {
            init(USER)
            send(SERVIS, TEMPLATE, { name: name.current.value, mail: mail.current.value, message: text.current.value })
            props.closeHandler()
        }

    }

    return (
        <div className='form_wrapper'>
            <div className='closer form_closer_position' onClick={props.closeHandler} >&#10008;</div>
            <form className='form' onSubmit={ev => submitHandler(ev)}>
                <h2>{active.contactMe}</h2>
            
                <Input
                    wrapper= 'input_wrapper'
                    labelHero={active.yourName}
                    inputType='text'
                    name='name'
                    refs={name}
                    autoComplete = 'off'

                />
                <Input
                wrapper= 'input_wrapper'
                    labelHero={active.mail}
                    inputType='email'
                    name='senderMail'
                    refs={mail}
                    warningMessage={warn}
                    warning={active.warning}
                    onFocus={focusHandler}
                    autoComplete = 'off'
                />
                <div className='text_wrapper'>
                    <label htmlFor='messageText'>{active.message}</label>
                    <textarea id='messageText' name='message' ref={text} rows='8' />
                </div>
                <Button
                    buttonHero={active.send}
                    onClick={sendHandler}
                    buttonClass='button'
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