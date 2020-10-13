import Verstka from '../../imagens/verstka.png'
import Landing from '../../imagens/landing.png'
import Library from '../../imagens/library.png'
import Todo from '../../imagens/todo.png'
import {OPEN_MODAL} from '../actions/actionTypes'


const initialState = [
    {
    name:'verstka',
    photo:Verstka,
    show: false
    },
    {
    name:'landing',
    photo:Landing,
    show: false
    },
    {
    name:'library',
    photo:Library,
    show: false
    },
    {
    name:'todo',
    photo:Todo,
    show: true
    },
  
]
export default function portfolioRducer (state = initialState,action){
  switch (action.type){
      case OPEN_MODAL:
        let  show = state.map(item=>{if(item.name === action.value){
              item.show = true
          }else{
              item.show = false
          }return item})

          return  show
           
          
             
          
     default: return state      
  }
    
}