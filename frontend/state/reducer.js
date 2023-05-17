// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import {MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_INFO_MESSAGE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER} from './action-types';
import {fetchQuiz} from './action-creators';

// const initialState = {
//   wheel: 0,
//   message: '',
//   quiz: null
// }

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch(action.type) {
    case MOVE_CLOCKWISE:
      return action.payload
    case MOVE_COUNTERCLOCKWISE:
      return action.payload
      default:
        return state;
  }
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  console.log("quiz reducer")
  switch(action.type) {
    case SET_QUIZ_INTO_STATE:
      return {...state, quiz: action.payload}
  }
  return state
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  console.log("HERE")

  switch(action.type) {
    case SET_SELECTED_ANSWER:
      console.log(action.payload)
      return {...state, selectedAnswer: action.payload}
  }
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch(action.type) {
    case SET_INFO_MESSAGE:
      return {...state, message: action.payload}
    default:
      return state
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
