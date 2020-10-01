import {russian,english} from '../text/articles'

const initialState = {
 ...english,

 option: false

}


export default function rootReducer(state= initialState,action){
    switch(action.type){
        case 'SHOW_LIST':
            return{
                ...state,
                option:!state.option
            }
        break
        case 'CHANGE_LANG':
            console.log(action.val.target)    
        
            default:
                return state
    }
    return state
}