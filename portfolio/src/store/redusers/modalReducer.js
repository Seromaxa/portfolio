import { OPEN_MODAL, CLOSE_MODAL, OPEN_MAIL, CLOSE_MAIL, FILL_INPUT, SEND_MESSAGE, REWRITE } from '../actions/actionTypes'
import { init, send } from 'emailjs-com'
import { USER, SERVIS, TEMPLATE } from '../../myConst'
import is from 'is_js'


const initialState = {
    open: false,
    mail: false,
    warning: false,
    message: {
        name: '',
        mail: '',
        text: ''
    }

}

export default function modalReducer(state = initialState, action) {
    switch (action.type) {
        case CLOSE_MODAL:
            return {
                ...state,
                open: false
            }
        case OPEN_MODAL:
            return {
                ...state,
                open: true
            }
        case OPEN_MAIL:
            action.event.stopPropagation()
            return {
                ...state,
                mail: true
            }
        case CLOSE_MAIL:
            return {
                ...state,
                message: {
                    name: '',
                    mail: '',
                    text: '',
                },
                mail: false,
                warning:false
            }

        case FILL_INPUT:

            let newState = { ...state }
            newState.message[action.value] = action.event
            return newState

        case SEND_MESSAGE:
            if (is.email(state.message.mail)) {
                init(USER)
                send(SERVIS, TEMPLATE, { name: state.message.name, mail: state.message.mail, message: state.message.text })
                return {
                    ...state,
                    message: {
                        name: '',
                        mail: '',
                        text: '',
                    },
                    mail:false

                }
            } else {
                return {
                    ...state,
                    warning: true
                }
            }
        case REWRITE:
            if (state.warning === true) {
                return {
                    ...state,
                    warning: false
                }
            } else {
                return state
            }

        default: return state

    }

}