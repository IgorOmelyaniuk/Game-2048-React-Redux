import React from 'react';

export const Start = (props) => {
    return (
        <button onClick={props.startNewGame} className="board_info-start">Начать заново</button>
    )
}