import React from 'react'

export const Cell = (props) => {
    return (
        <div className={`board_grid-cell cell-${props.value}`}>{props.value ? props.value : ''}</div>
    )
}