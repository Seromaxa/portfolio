import {OPEN_MODAL,CLOSE_MODAL,THUMB} from './actionTypes'

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