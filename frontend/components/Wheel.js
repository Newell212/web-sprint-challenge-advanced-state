import React, {useState} from 'react';
import {connect} from 'react-redux';
import {moveClockwise, moveCounterClockwise} from '../state/action-creators';

const Wheel = (props) => {
  const [index, setIndex] = useState(0)
  const [classnameZero, setClassnameZero] = useState('cog active')
  const [classnameOne, setClassnameOne] = useState('cog')
  const [classnameTwo, setClassnameTwo] = useState('cog')
  const [classnameThree, setClassnameThree] = useState('cog')
  const [classnameFour, setClassnameFour] = useState('cog')
  const [classnameFive, setClassnameFive] = useState('cog')
  const [letterZero, setLetterZero] = useState('B')
  const [letterOne, setLetterOne] = useState('')
  const [letterTwo, setLetterTwo] = useState('')
  const [letterThree, setLetterThree] = useState('')
  const [letterFour, setLetterFour] = useState('')
  const [letterFive, setLetterFive] = useState('')

  let indexs = 0
  let newIndexs = 0
  const testIndex = () => {
   
    console.log('before',newIndexs)
    newIndexs = newIndexs + 1
    console.log('after',newIndexs)
    console.log(indexs)
  }

  let idx = 0;
  console.log('before', idx)
  const newIndex = (evt) => {
    console.log('wheel', props.wheel)
    if(evt.target.id === "clockwiseBtn") {
      console.log('target', evt.target.id)
      idx = idx + 1
      console.log('after',idx)
    } else {
      idx = idx
    }
    
    if(idx === 0) {
      setClassnameZero('cog active')
      setClassnameOne('cog')
      setClassnameTwo('cog')
      setClassnameThree('cog')
      setClassnameFour('cog')
      setClassnameFive('cog')
      setLetterZero('B')
      setLetterOne('')
      setLetterTwo('')
      setLetterThree('')
      setLetterFour('')
      setLetterFive('')
    } else if(idx === 1) {
      setClassnameZero('cog')
      setClassnameOne('cog active')
      setClassnameTwo('cog')
      setClassnameThree('cog')
      setClassnameFour('cog')
      setClassnameFive('cog')
      setLetterZero('')
      setLetterOne('B')
      setLetterTwo('')
      setLetterThree('')
      setLetterFour('')
      setLetterFive('')
    } else if(idx === 2) {
      setClassnameZero('cog')
      setClassnameOne('cog')
      setClassnameTwo('cog active')
      setClassnameThree('cog')
      setClassnameFour('cog')
      setClassnameFive('cog')
      setLetterZero('')
      setLetterOne('')
      setLetterTwo('B')
      setLetterThree('')
      setLetterFour('')
      setLetterFive('')
    } else if(idx === 3) {
      setClassnameZero('cog')
      setClassnameOne('cog')
      setClassnameTwo('cog')
      setClassnameThree('cog active')
      setClassnameFour('cog')
      setClassnameFive('cog')
      setLetterZero('')
      setLetterOne('')
      setLetterTwo('')
      setLetterThree('B')
      setLetterFour('')
      setLetterFive('')
    } else if(idx === 4) {
      setClassnameZero('cog')
      setClassnameOne('cog')
      setClassnameTwo('cog')
      setClassnameThree('cog')
      setClassnameFour('cog active')
      setClassnameFive('cog')
      setLetterZero('')
      setLetterOne('')
      setLetterTwo('')
      setLetterThree('')
      setLetterFour('B')
      setLetterFive('')
    } else {
      setClassnameZero('cog')
      setClassnameOne('cog')
      setClassnameTwo('cog')
      setClassnameThree('cog')
      setClassnameFour('cog')
      setClassnameFive('cog active')
      setLetterZero('')
      setLetterOne('')
      setLetterTwo('')
      setLetterThree('')
      setLetterFour('')
      setLetterFive('B')
    }
  }

  

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={classnameZero} style={{ "--i": 0 }}>{letterZero}</div>
        <div className={classnameOne} style={{ "--i": 1 }}>{letterOne}</div>
        <div className={classnameTwo} style={{ "--i": 2 }}>{letterTwo}</div>
        <div className={classnameThree} style={{ "--i": 3 }}>{letterThree}</div>
        <div className={classnameFour} style={{ "--i": 4 }}>{letterFour}</div>
        <div className={classnameFive} style={{ "--i": 5 }}>{letterFive}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={newIndex} >Counter clockwise</button>
        <button id="clockwiseBtn" onClick={newIndex}>Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state.wheel)
  return {
    wheel: state.wheel
  }
}

export default connect(mapStateToProps, {moveClockwise, moveCounterClockwise})(Wheel);