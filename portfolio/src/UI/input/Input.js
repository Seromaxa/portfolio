import React from 'react'

const Input = props =>{
    const inputType = props.type || 'text'
    const htmlFor = `${inputType}-${Math.random()}`

    return(
        <div className={props.wrapper}>
            <label htmlFor = {htmlFor} className={props.labelClass}>{props.labelHero}</label>
            <input className={props.inputClass} id={htmlFor} name={props.name}  type={inputType} placeholder={props.logo} onKeyDown={props.onKeyDown} onChange={props.onChange} ref={props.refs} onFocus={props.onFocus} autoComplete={props.autoComplete} />
    {props.warningMessage?<span className={props.spanClass}>{props.warning}</span>:null}
            {props.children}
        </div>



    )
}
export default Input