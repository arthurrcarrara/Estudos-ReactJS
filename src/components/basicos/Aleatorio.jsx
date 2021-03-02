import React from 'react'

export default props => {
    // const max = props.max
    // const min = props.min
    const { min, max } = props

    const sort = Math.floor(Math.random() * (max - min + 1) ) + min

   return (
    <div>
        <h2>Valor Aleatorio</h2>
        <p>Valor minimo: {min}</p>
        <p>Valor maximo: {max}</p>
        <p>Valor sorteado: { sort }</p>
    </div>
    )
}