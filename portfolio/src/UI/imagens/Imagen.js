import React from 'react'
import Canvas from '../../components/main/CV/bacground/canvas'

const Imagen = props =>{
    return(
        <div className={props.wrapper}>
            <Canvas />
            <img className={props.wrapped} src={props.src} alt={props.alt} />
        </div>
    )
}
export default Imagen