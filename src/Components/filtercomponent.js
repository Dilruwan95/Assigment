import React from 'react'

const filtercomponent = (props) => {
    return (
        <div>
         <input type="text"
        placeholder={props.placeholder}
        onChange={props.handlechange}
    /> 
    </div>
    )
}

export default filtercomponent
