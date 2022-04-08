import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Post from './Post';
import Calculator from './js/Calculator';


function App() {
  // let [포스트제목, 포스트제목수정도구] = useState(["고기 잘 굽는 법", "고기 맛없게 굽지마"]);
  // let [포스트내용,포스트내용수정도구] = useState(["잘 굽는 사람에게 구워달라고 한다.", "참지못해"]);
  
  return (
    // <div className="App">
    //   <Post title={포스트제목[0]} content={포스트내용[0]}></Post>
    //   <Post title={포스트제목[1]} content={포스트내용[1]}></Post>
    //   <Post title={포스트제목[0]} content={포스트내용[1]}></Post>
    //   <Post title={포스트제목[1]} content={포스트내용[0]}></Post>
    // </div>
    <Calculator/>
  );
}

// function Post(props) {
//   // let [변수명,변수수정도구] = useState("고기 잘 굽는 법");
//   // let [count,setCount] = useState(0);
  
//   let [count,setCount] = useState(0);
//   return(
//     <div className="Post">
//       <h2>{props.title}</h2>
//       <p>{props.content}
//         <Like count={count} setCount={setCount}></Like>
//       </p>
//       <span> {count} </span>
//     </div>
//   );
// }

// function Like(props) {
//   return(
//     <>
//       <span onClick={() => {props.setCount (props.count+1)}}>ㅇㅇ</span>
//       <span onClick={() => {props.setCount (props.count-1)}}>ㄴㄴ</span>
//     </>
//   );
// }



export default App;
