import React from 'react';

export const Score = (props) => {
    return (
        <div className="board_info-score">Текущий счет: {props.score}</div>
    )
}