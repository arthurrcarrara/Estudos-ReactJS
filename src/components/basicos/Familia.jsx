import React from 'react'
import FamiliaMembro from './FamiliaMembro'

export default props => {

    return (
        <div>
            <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Ana" {...props}/>
            <FamiliaMembro nome="Joao" sobrenome="Silva"/>
        </div>
    )
}