// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import {MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_INFO_MESSAGE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, INPUT_CHANGE, RESET_FORM, ADD_NEW_FALSE_ANSWER, ADD_NEW_QUESTION, ADD_NEW_TRUE_ANSWER} from './action-types';


// const initialState = {
//   wheel: 0,
//   message: '',
//   quiz: null
// }

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch(action.type) {
    case MOVE_CLOCKWISE:
      return (action.payload)
    case MOVE_COUNTERCLOCKWISE:
      return action.payload
      default:
        return state;
  }
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  switch(action.type) {
    case SET_QUIZ_INTO_STATE:
      return {...state, quiz: action.payload}
  }
  return state
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type) {
    case SET_SELECTED_ANSWER:
      return {...state, selectedAnswer: action.payload}
      default:
        return state
  }
  
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
  
  console.log(`form reducer: ${action}`)
  switch(action.type) {
    case ADD_NEW_TRUE_ANSWER:
      console.log("TRUE")
      return {...state, newTrueAnswer: action.payload}
    case ADD_NEW_FALSE_ANSWER:
      console.log("FALSE")
      return {...state, newFalseAnswer: action.payload}
    case ADD_NEW_QUESTION:
      console.log("NEW")
      return {...state, newQuestion: action.payload}
    case RESET_FORM:
      console.log("RESET")
      return {initialFormState}
    default:
      return state
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
