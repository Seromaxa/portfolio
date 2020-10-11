import React from 'react'

const Imagen = props =>{
    return(
        <div className={props.wrapper} >
            {props.children}
            <img className={props.wrapped} src={props.src} alt={props.alt} />
        </div>
    )
}
export default Imagen