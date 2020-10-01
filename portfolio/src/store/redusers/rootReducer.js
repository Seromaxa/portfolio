import {russian,english} from '../text/articles'

const initialState = {
 languages:[{...english},{...russian}],
 option: false

}



export default function rootReducer(state= initialState,action){
    switch(action.type){
        case 'SHOW_LIST':
            
            return{
                ...state,
                option:!state.option
            }
        // break
        case 'CHANGE_LANG':
        let a =  state.languages.map(item=>{if(item.id === action.val.target.id){
            item.active = true
        }if(item.active === true && item.id !== action.val.target.id){
            item.active = false
        }return item})
        return{
            ...state,
            languages:a
        }
        
            default:
                return state
    }
    // return state
}