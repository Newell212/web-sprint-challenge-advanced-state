import React from 'react'
import {connect} from 'react-redux';

 const Message = (props) => {
  return <div id="message">{props.message.message}</div>
}

const mapStateToProps = state => {
  console.log(state.infoMessage)
  return {
    message: state.infoMessage
  }
}



export default connect(mapStateToProps)(Message)