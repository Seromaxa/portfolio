import {SHOW_LIST,CHANGE_LANG,HIDE_LIST} from './actionTypes'

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
export function hide(){
    return(dispatch)=>{
        setTimeout(()=>{
              dispatch({type: HIDE_LIST}) 
            
        },3000)
    }
  
   
}