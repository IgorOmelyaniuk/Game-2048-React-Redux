import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import OptionsState  from '../containers/OptionsState'
import BoardState  from '../containers/BoardState'
import MessageState  from '../containers/MessageState'

export const App = () => {
    return (
        <div className="wrapper">
            <header>
                <h1>2048</h1>
            </header>
            <div className="board">
                <OptionsState />
                <BoardState />
            </div>
            <MessageState/>
        </div>
    )
}