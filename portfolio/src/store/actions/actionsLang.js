import {SHOW_LIST,CHANGE_LANG} from './actionTypes'

export function show(){
    return {
        type: SHOW_LIST
    }
}
export function changer(ev){
    return{
        type:CHANGE_LANG,
        val: ev
    }
}
export function asyncChanger(ev){
    
    return(dispatch)=>{
    setTimeout(()=>{
        dispatch(changer(ev))
        
    },2000)
    }
}