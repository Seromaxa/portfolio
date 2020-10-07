import {FILL_CANVAS} from '../actions/actionTypes'



export default function canvasReduser(state=[],action){
    switch (action.type){
        case FILL_CANVAS:
            
             return[
                 ...state,
                 ...action.obj
             ]

            default: return state
    }
 
}