import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [변수명,변수수정도구] = useState("고기 잘 굽는 법");
  let [count,setCount] = useState(0);

  return (
    <div className="App">
      <Post title={변수명} count={count} setCount={setCount}></Post>
      <Post title={변수명} count={count} setCount={setCount}></Post>
      <Post title={변수명} count={count} setCount={setCount}></Post>
      <Post title={변수명} count={count} setCount={setCount}></Post>
    </div>
  );
}

function Post(props) {
  // let [변수명,변수수정도구] = useState("고기 잘 굽는 법");
  // let [count,setCount] = useState(0);

  return(
    <div className="Post">
      <h2>{props.title}</h2>
      <p>잘 굽는 사람환테 구워달라고 합니다.
        <Like count={props.count} setCount={props.setCount}></Like>
      </p>
      <span> {props.count} </span>
    </div>
  );
}

function Like(props) {
  return(
    <>
      <span onClick={() => {props.setCount (props.count+1)}}>ㅇㅇ</span>
      <span onClick={() => {props.setCount (props.count-1)}}>ㄴㄴ</span>
    </>
  );
}

export default App;
