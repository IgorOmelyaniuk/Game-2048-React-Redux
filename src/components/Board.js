import React from 'react'
import { Cell } from './Cell'

import { startNewGame } from '../helpers/getInit'
import { verticalMove, horizontalMove } from '../helpers/handlersMoving'
import { addRandomCell } from '../helpers/addRandom'
import { isEqualArray, checkLosing } from '../helpers/checks'


export default class Board extends React.Component {

    componentDidMount() {
        document.addEventListener('keydown', e => this.handlerKeyDown(e.keyCode));
        let newBoard = startNewGame();
        this.props.initialize(newBoard);
    }

    handlerKeyDown(keyCode) {
        if (this.props.victory === true) {
            return;
        }

        let changes;
        
        if (keyCode == 37) {
            changes = horizontalMove(this.props.board, 'left');
            this.changeBoard(this.props.board, changes);
        } else if (keyCode == 39) {
            changes = horizontalMove(this.props.board, 'right');
            this.changeBoard(this.props.board, changes);
        } else if (keyCode == 38) {
            changes = verticalMove(this.props.board, 'top');
            this.changeBoard(this.props.board, changes);
        } else if (keyCode == 40) {
            changes = verticalMove(this.props.board, 'bottom');
            this.changeBoard(this.props.board, changes);
        }
    }

    changeBoard(board, changes) {
        let equal = isEqualArray(this.props.board, changes.newArr);
    
        if (!equal) {
            this.props.move(changes.newArr, changes.result);
            let readyBoard = addRandomCell(changes.newArr);
            this.props.addRandom(readyBoard);
        // } else if(checkLosing(changes.newArr)) {
        //     this.props.getLose();
        }
    }

    render() {
        return (
            <div className="board_content">
                <div className="board_grid-static">
                    {this.props.board.map((row, index) => {
                        return (<div key={index} className="board_grid-row">
                            {row.map((cell, index) => {
                                return <Cell key={index} value={cell} />
                            })}
                        </div>)
                    })}
                </div>
            </div>
        )
    }
}