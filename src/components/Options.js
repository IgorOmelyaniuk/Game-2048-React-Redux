import React from 'react'
import { Score } from './Score'
import { Start } from './Start'
import { startNewGame } from '../helpers/getInit'

export default class Options extends React.Component {
    
    constructor() {
        super();
        this.startAgain = this.startAgain.bind(this);
    }

    startAgain() {
        let newBoard = startNewGame();
        this.props.initialize(newBoard);
    }

    render() {
        return (
            <div className="board-options">
                <div className="board_info">
                    <Score score={this.props.score}/>
                    <Start startNewGame={this.startAgain}/>
                </div>
            </div>
        )
    }
}