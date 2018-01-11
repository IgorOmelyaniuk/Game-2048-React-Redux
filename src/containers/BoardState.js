import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { move, initialize, addRandom } from '../actions/Actions'
import Board  from '../components/Board'
import { getWin } from '../selectors'

const mapStateToProps = state => {
    return {
        board: state.game.board,
        victory: getWin(state)
    }
}

const mapActionsToProps = {move, initialize, addRandom}
const BoardState = connect(mapStateToProps, mapActionsToProps)(Board)

export default BoardState