import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {
  
function testState() {
  console.log('7', newQuestion)
  console.log('8', newTrueAnswer)
  console.log('9', newFalseAnswer)
  console.log('10', submitNewQuizBtn)
  
}

  const onChange = evt => {
    if(newQuestion === '') {
      console.log("it's working")
    }
  }

  const onSubmit = evt => {
    evt.preventDefault();
    
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn" onClick={testState}>Submit new quiz</button>
    </form>
  )
}

// const mapStateToProps = state => {
//   return {
//     newQuestion: state.newQuestion,

//   }
// }

export default connect(st => st, actionCreators)(Form)
