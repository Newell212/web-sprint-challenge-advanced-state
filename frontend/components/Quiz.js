import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {fetchQuiz, postAnswer, selectAnswer} from '../state/action-creators';

 const Quiz = (props) => {

  if(props.quiz === null) {
    props.fetchQuiz()
  }
  
  
  return (
    <div id="wrapper" >
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz !== null ? (
          <>
            <h2>{props.quiz.quiz.question}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                {props.quiz.quiz.answers[0].text}
                <button onClick={() => store.dispatch(selectAnswer(props.quiz.quiz.answers[0]))}>
                  Select
                </button>
              </div>

              <div className="answer">
                {props.quiz.quiz.answers[1].text}
                <button onClick={() => selectAnswer(props.quiz.quiz.answers[1])}>
                  Select
                </button >
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={props.fetchQuiz}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = state => {
  console.log("2", state.infoMessage.message)
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer,
    message: state.message
  }
}

export default connect(mapStateToProps, {fetchQuiz})(Quiz);