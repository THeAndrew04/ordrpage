import React from "react"

function Button(props) {
    const {children, style} = props
    return(
        <button style={style ? style: {background: "red", color: "white"}}> {children} </button>
    )
}

export default Button;