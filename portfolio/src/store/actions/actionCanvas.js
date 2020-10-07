import {FILL_CANVAS} from './actionTypes'

export function activateCanvas(obj){
  return {
      type: FILL_CANVAS,
      obj
  }
}