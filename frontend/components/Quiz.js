import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {fetchQuiz} from '../state/action-creators';

 const Quiz = (props) => {
  // useEffect(() => {
  //   fetchQuiz()
  // });
  console.log("1", props.quiz)
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
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                {props.quiz.quiz.answers[1].text}
                <button>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={props.fetchQuiz}>Submit answer</button>
          </>
        ) : props.fetchQuiz `${props.message}`
      }
    </div>
  )
}

const mapStateToProps = state => {
  console.log("2", state.message)
  return {
    quiz: state.quiz,
    message: state.message
  }
}

export default connect(mapStateToProps, {fetchQuiz})(Quiz);