import React, {useState} from 'react'
import {connect} from 'react-redux';
import {fetchQuiz, postAnswer, selectAnswer, setMessage} from '../state/action-creators';

 const Quiz = (props) => {
  const {quiz, selectedAnswer,  fetchQuiz, postAnswer, selectAnswer} = props;
  const [selectedOne, setSelectedOne] = useState('Select')
  const [selectedTwo, setSelectedTwo] = useState('Select')
  const [classOne, setClassOne] = useState('answer')
  const [classTwo, setClassTwo] = useState('answer')
  const [disable, setDisable] = useState(true)

  
  const addAnswer = (ansId) => {
    selectAnswer(ansId);
    setDisable(false)
    
     if(ansId === props.quiz.quiz.answers[0].answer_id) {
      setSelectedOne("SELECTED")
      setSelectedTwo('Select')
      setClassOne('answer selected')
      setClassTwo('answer')
    } else {
      setSelectedOne('Select')
      setSelectedTwo('SELECTED')
      setClassOne('answer')
      setClassTwo('answer selected')
    }
  }

  const onSubmit = () => {
    postAnswer(props.quiz.quiz.quiz_id, selectedAnswer)
    setSelectedOne('Select')
    setSelectedTwo('Select')
    setClassOne('answer')
    setClassTwo('answer')
    setDisable(true)
  }

  if(props.quiz === null) {
    fetchQuiz()
  } else {
  
  return (
    <div id="wrapper" >
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz !== null ? (
          <>
            <h2>{props.quiz.quiz.question}</h2>

            <div id="quizAnswers">
              <div className={classOne}>
                {props.quiz.quiz.answers[0].text}
                <button id={props.quiz.quiz.answers[0].answer_id} onClick={() => addAnswer(props.quiz.quiz.answers[0].answer_id)}>
                  {selectedOne}
                </button>
              </div>

              <div className={classTwo}>
                {props.quiz.quiz.answers[1].text}
                <button id={props.quiz.quiz.answers[1].answer_id} onClick={() => addAnswer(props.quiz.quiz.answers[1].answer_id)}>
                {selectedTwo}
                </button >
              </div>
            </div>

            <button id="submitAnswerBtn" disabled={disable} onClick={onSubmit}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}
 }

const mapStateToProps = state => {
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer,
    message: state.infoMessage
  }
}

export default connect(mapStateToProps, {fetchQuiz, selectAnswer, postAnswer})(Quiz);