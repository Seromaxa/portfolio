import {OPEN_MODAL,CLOSE_MODAL,THUMB,OPEN_MAIL,CLOSE_MAIL,FILL_INPUT,SEND_MESSAGE,REWRITE} from './actionTypes'

export function close(){
    return{
        type: CLOSE_MODAL
    }
}

export function open(value){
    return{
        type: OPEN_MODAL,
        value
    }
}

export function thumb (value){
    return{
        type:THUMB,
        value
    }
}

export function openMail (event){
    return{
        type:OPEN_MAIL,
        event
    }
}
export  function closeMail (){
        return{
            type:CLOSE_MAIL
        }
}

export function fillInput(value,event){
    return{
        type: FILL_INPUT,
        value,
        event
    }
}

export function sendler (){
    return{
        type:SEND_MESSAGE
    }
}

export function errMail () {
    return{
        type:REWRITE
    }
    
}