import React from 'react'
import {connect} from 'react-redux';

 const Message = (props) => {
  return <div id="message">{props.message}</div>
}

const mapStateToProps = state => {
  console.log(state.message)
  return {
    message: state.message
  }
}



export default connect(mapStateToProps)(Message)