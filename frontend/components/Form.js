import React, {useState} from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import {postQuiz, inputChange} from '../state/action-creators';

export const Form = (props) => {
  const [disable, setDisable] = useState(true)

  const onChange = evt => {
    evt.preventDefault();
    console.log("evt",evt.target.id)
    console.log("12", props.newQuestion)

   if(evt.target.id === 'newQuestion') {
   
   
      
    props.inputChange(evt.target.value)
    
    
   } else if (evt.target.id === 'newTrueAnswer') {
    
    props.inputChange(evt.target.value)
   } else {
    props.inputChange(evt.target.value)
   }
  }

  const onSubmit = evt => {
    evt.preventDefault();
    postQuiz()
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn" onClick={onSubmit} disabled={disable}>Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = state => {
  console.log("1",state.form.newQuestion)
  return {
    newQuestion: state.form.newQuestion,
    newTrueAnswer: state.form.newTrueAnswer,
    newFalseAnswer: state.form.newFalseAnswer
  }
}

export default connect(mapStateToProps, {postQuiz, inputChange})(Form)
