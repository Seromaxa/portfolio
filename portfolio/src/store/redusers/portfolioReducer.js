import Verstka from '../../imagens/verstka.png'
import Landing from '../../imagens/landing.png'
import Library from '../../imagens/library.png'
import Todo from '../../imagens/todo.png'
import { OPEN_MODAL, THUMB } from '../actions/actionTypes'


const initialState = [
  {
    name: 'verstka',
    photo: Verstka,
    show: false
  },
  {
    name: 'landing',
    photo: Landing,
    show: false
  },
  {
    name: 'library',
    photo: Library,
    show: false
  },
  {
    name: 'todo',
    photo: Todo,
    show: false
  },

]
export default function portfolioRducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      let show = state.map(item => {
        if (item.name === action.value) {
          item.show = true
        } else {
          item.show = false
        } return item
      })
      return show
    case THUMB:
      let newState = [...state]
      let index
      state.map((item, ind) => { if (item.show === true) { index = ind } return item })
      newState[index].show = false
      if (action.value === 'right') {
        newState[(index + 1) % newState.length].show = true
        return newState
      }
      if (action.value === 'left') {
        if (index - 1 === -1) {
          index = newState.length - 1
          newState[index].show = true
        } else {
          newState[index - 1].show = true
        }
        return newState
      }
      break
    default: return state
  }

}