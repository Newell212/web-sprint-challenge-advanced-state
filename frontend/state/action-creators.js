// ❗ You don't need to add extra action creators to achieve MVP
import {MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_INFO_MESSAGE, SET_SELECTED_ANSWER} from './action-types';
import axios from 'axios';

export const moveClockwise = wheel => (console.log(wheel),
{type: MOVE_CLOCKWISE, payload: wheel })

export function moveCounterClockwise(wheel) { let newWheel =  + 1
  console.log(newWheel);
return ({
  type: MOVE_COUNTERCLOCKWISE,
  payload: newWheel
}) }

export const selectAnswer = selectedAnswer => {return({type:SET_SELECTED_ANSWER, payload:selectedAnswer})}

export const setMessage = message =>  ({ type: SET_INFO_MESSAGE, payload: message })

export const setQuiz = quiz => ({type: SET_QUIZ_INTO_STATE, payload: quiz })

export function inputChange() { }

export function resetForm() { }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
   
    axios.get('http://localhost:9000/api/quiz/next')
    .then(res => {
      dispatch(setQuiz(null))
      dispatch(setQuiz(res.data))
      dispatch(setMessage(''));
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
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
