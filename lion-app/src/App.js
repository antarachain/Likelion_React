import React from 'react';
import logo from './logo.svg';
import './App.css';

// 컴포넌트
// const myStyle = {
//     color: 'red',
//     fontWeight: 700,  
// }

// JSX -> HTML 태그
// JSX -> style을 통해 css (jsx)
// JSX -> className을 통해 css (css -> App.css)

// 요구사항 1. 시간과 분이 변하는 것을 보고 싶다.
// 요구사항 2. 동적으로 보고 싶다.

// function WorldClock(props) {
//   return (
//     <div className={"WorldClock"}>
//       <h2>🌍도시: {props.city} </h2>
//       <p>⏰시간: {props.time}시</p>
//     </div>
//   )
// }

class WorldClock extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hour : this.props.time,
      minute : 0,
      stop: false
    }
    // this.setState
    // 절대 안됨! this.state.minute += 1;
    // this.timer = setInterval(() => {
    //   this.setState((state) => (
    //     state.minute === 59
    //     ?{hour: state.hour +1, minute: 0}
    //     :{minute: state.minute +1}
    //   ))
    // },5000)
      console.log("  Childe) 시작합니다")
    }
  

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((state) => (
        state.minute === 59
        ?{hour: state.hour +1, minute: 0}
        :{minute: state.minute +1}
      ))
    },5000)
    console.log("  Childe) 마운트 되었습니다")
  }

  componentDidUpdate() {
    console.log(" Child) 업데이트!")
  }

  componentWillUnmount() {
    console.log(" Child) 언마운트!")
    clearInterval(this.timer)
  }
  
  handlingClick = (event) => {
    console.log(event.target)
    this.setState({stop: event.target.value})
    clearInterval(this.timer)
  }

  // render 미리 약속된 함수
  render() {
    return (
      <div className={"WorldClock"}>
        <h2>🌍 : {this.props.city} </h2>
        <p>⏰ : {this.state.hour}H {this.state.minute}M</p>
        <button value={true} onClick={this.handlingClick}>STOP</button>
      </div>
    )
  }
}

class App extends React.Component {

  constructor(props) {
    super(props)
    this.cityTimeData = [
      ['Seoul', 10],
      ['Beijing', 9],
      ['Sydney', 12],
      ['LA', 17],
      ['Busan', 10]
    ]
    this.state = {
      content: '',
      show: true,
    }
    console.log("Parent) 시작합니다")
  }

  componentDidMount() {
    console.log("Parent) 마운트되었습니다")
  }

  componentDidUpdate() {
    console.log("Parent) 업데이트!")
  }


handlingChange = (event) => {
  this.setState({content: event.target.value})
}

handlingClick = (event) => {
  this.setState((prevState) => ({show: !prevState.show}))
}

  render() {
    return (
      <div className="App">
        <h1 className={'myStyle'}>World Timer</h1>
        <div className={'post'}>
          <h3>TIME IS GOLD</h3>
          <textarea value={this.state.content} onChange={this.handlingChange}></textarea>
        </div>
        <button onClick={this.handlingClick}>손가락 튕기기</button>
        { this.state.show &&
          this.cityTimeData.map((citytime, index) =>
          <WorldClock city={citytime[0]} time={citytime[1]} key={index}/>
        )
        }
      </div>
    );
    }
}

// 컴포넌트 수출 , default의 이미는 이 파일은 default (기본적으로, 하나만) export 하겠다.
export default App;