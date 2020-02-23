import React from "react"

const ScrollBar = (props) => {
    return (
        <div style={{overflow: 'scroll', height: '700px'}}>
            {props.children}
        </div>
    )
}

export default ScrollBar;