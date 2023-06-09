import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import { postQuiz, addNewQuestion, addNewTrueAnswer, addNewFalseAnswer } from '../state/action-creators';

export const Form = (props) => {

  const validate = () => {
    return props.newQuestion.trim().length > 1 && props.newTrueAnswer.trim().length > 1 && props.newFalseAnswer.trim().length > 1
  }

  const onChange = evt => {
    let newQ = null
    let newT = null
    let newF = null

    switch (evt.target.id) {
      case 'newQuestion':
        props.addNewQuestion(evt.target.value)
        break;
      case 'newTrueAnswer':
        props.addNewTrueAnswer(evt.target.value)
        break;
      case 'newFalseAnswer':
        props.addNewFalseAnswer(evt.target.value)
        break;
    }      
  }

  const onSubmit = evt => {
    evt.preventDefault();
    props.postQuiz(props.newQuestion, props.newTrueAnswer, props.newFalseAnswer)
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" value={props.newQuestion} />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" value={props.newTrueAnswer} />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" value={props.newFalseAnswer} />
      <button id="submitNewQuizBtn" onClick={onSubmit} disabled={!validate()}>Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = state => {

  return {
    newQuestion: state.form.newQuestion,
    newTrueAnswer: state.form.newTrueAnswer,
    newFalseAnswer: state.form.newFalseAnswer
  }
}

export default connect(mapStateToProps, { postQuiz, addNewQuestion, addNewTrueAnswer, addNewFalseAnswer })(Form)
