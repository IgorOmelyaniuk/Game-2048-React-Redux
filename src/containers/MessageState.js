import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { initialize } from '../actions/Actions'
import Message from '../components/Message'
import { getWin, getLose } from '../selectors'

const mapStateToProps = state => {
    return {
        losing: getLose(state),
        victory: getWin(state)
    }
}

const mapActionsToProps = { initialize }
const MessageState = connect(mapStateToProps, mapActionsToProps)(Message)

export default MessageState