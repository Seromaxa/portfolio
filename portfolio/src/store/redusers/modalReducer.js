import{OPEN_MODAL,CLOSE_MODAL,OPEN_MAIL,CLOSE_MAIL} from '../actions/actionTypes'
const initialState = {
    open: false,
    mail: false
}

export default function modalReducer(state = initialState,action){
switch(action.type){
    case CLOSE_MODAL:
        return{
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
        return{
            ...state,
            mail: true
        }
    case CLOSE_MAIL:
        return{
            ...state,
            mail:false
        }   
    default: return state  
    
}

}