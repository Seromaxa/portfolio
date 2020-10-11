import {russian,english} from '../text/articles'
import  {SHOW_LIST,CHANGE_LANG} from '../actions/actionTypes'

const initialState = {
 languages:[{...english},{...russian}],
 option: false,
}



export default function langReducer(state= initialState,action){
    switch(action.type){
        case SHOW_LIST:
            
            return{
                ...state,
                option:!state.option
            }
        case CHANGE_LANG:
            let activeLang =  state.languages.map(item=>{if(item.id === action.val){
                item.active = true
            }if(item.active === true && item.id !== action.val){
                item.active = false
            }return item})
            return{
                ...state,
                languages:activeLang,
                option:!state.option
            }
        
            default:
                return state
    }
}

