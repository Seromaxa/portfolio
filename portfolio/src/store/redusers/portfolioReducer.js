import Verstka from '../../imagens/verstka.png'
import Landing from '../../imagens/landing.png'
import Library from '../../imagens/library.png'
import Todo from '../../imagens/todo.png'

const initialState = {
    verstka:Verstka,
    landing:Landing,
    library:Library,
    todo:Todo,
}
export default function portfolioRducer (state = initialState,action){
    return state
}