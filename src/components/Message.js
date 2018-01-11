import React from 'react'
import {Start} from './Start'
import { startNewGame } from '../helpers/getInit'

export default class Message extends React.Component {
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
            <div className={'message-wrap ' + ((this.props.losing || this.props.victory) ? 'show' : 'hidden') }>
                <div className="message">
                    <p className={'message-text ' + (this.props.losing ? 'show' : 'hidden')}>К сожалению, вы програли</p>
                    <p className={'message-text ' + (this.props.victory ? 'show' : 'hidden')}>Поздравляем, вы выиграли</p>
                    <Start startNewGame={this.startAgain}/>
                </div>
                
                
            </div>
        )
    }
    
}