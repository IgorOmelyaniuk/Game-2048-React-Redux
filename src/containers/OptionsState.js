import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { initialize } from '../actions/Actions'
import Options from '../components/Options'

const mapStateToProps = state => {
    return {
        score: state.game.score,
    }
}

const mapActionsToProps = { initialize }
const OptionsState = connect(mapStateToProps, mapActionsToProps)(Options)

export default OptionsState