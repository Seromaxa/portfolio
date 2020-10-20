import {OPEN_MODAL,CLOSE_MODAL,THUMB,OPEN_MAIL,CLOSE_MAIL} from './actionTypes'

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