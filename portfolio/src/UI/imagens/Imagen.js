import React from 'react'

const Imagen = props =>{
    return(
        <img src={props.src} className={props.imgClass} alt={props.alt} />
    )
}
export default Imagen