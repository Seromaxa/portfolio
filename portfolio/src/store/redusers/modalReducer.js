import{OPEN_MODAL,CLOSE_MODAL} from '../actions/actionTypes'
const initialState = {
    open: false
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
    default: return state    
}

}