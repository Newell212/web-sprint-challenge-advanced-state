// ❗ You don't need to add extra action creators to achieve MVP
import {MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_INFO_MESSAGE, SET_SELECTED_ANSWER, INPUT_CHANGE, RESET_FORM, ADD_NEW_QUESTION, ADD_NEW_TRUE_ANSWER, ADD_NEW_FALSE_ANSWER} from './action-types';
import axios from 'axios';

export const moveClockwise = wheel => ({type:MOVE_CLOCKWISE, payload: wheel})

export const moveCounterClockwise = wheel => ({type:MOVE_COUNTERCLOCKWISE, payload: wheel})

export const selectAnswer = selectedAnswer => {return({type:SET_SELECTED_ANSWER, payload:selectedAnswer})}

export const setMessage = message =>  ({ type: SET_INFO_MESSAGE, payload: message })

export const setQuiz = quiz => ({type: SET_QUIZ_INTO_STATE, payload: quiz })

export const addNewQuestion = (form) => ({type: ADD_NEW_QUESTION, payload: form })

export const addNewTrueAnswer = form => ({type: ADD_NEW_TRUE_ANSWER, payload: form})

export const addNewFalseAnswer = form => ({type: ADD_NEW_FALSE_ANSWER, payload: form })

export const resetForm = () => ({type: RESET_FORM })

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
   
    axios.get('http://localhost:9000/api/quiz/next')
    .then(res => {
      dispatch(setQuiz(null))
      dispatch(setQuiz(res.data))
    })
    .catch(console.log("error"))
    
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer(quiz_id, selectedAnswer) {
  return function (dispatch) {
    
    let data = {
      quiz_id: quiz_id, 
      answer_id: selectedAnswer.selectedAnswer 
    }
    axios.post('http://localhost:9000/api/quiz/answer', data, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => {
     dispatch(selectAnswer(null))
     dispatch(setMessage(res.data.message))
     dispatch(fetchQuiz())
    })
    .catch(() => {
      console.log("uh no not working")
    })
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz(newQuestion, newTrueAnswer, newFalseAnswer) {
  return function (dispatch) {

    let data = {
      question_text: newQuestion,
      true_answer_text: newTrueAnswer,
      false_answer_text: newFalseAnswer
    }

    axios.post('http://localhost:9000/api/quiz/new', data, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      console.log(res.data)
      dispatch(setMessage(`Congrats: "${newQuestion}" is a great question!`))
      dispatch(addNewQuestion(''))
      dispatch(addNewTrueAnswer(''))
      dispatch(addNewFalseAnswer(''))
    })
    .catch(() => {
      console.log('no dice')
    })
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
