import { useState } from "react";
import React from 'react';


const Post = (props) => {
    let [count,setCount] = useState(0);
    return (
        <div className="Post">
            <h2>{props.title}</h2>
            <p>{props.content}
                <Like count={count} setCount={setCount}></Like>
            </p>
            <span> {count} </span>
        </div>
    );
};

function Like(props) {
    return(
      <>
        <span onClick={() => {props.setCount (props.count+1)}}>ㅇㅇ</span>
        <span onClick={() => {props.setCount (props.count-1)}}>ㄴㄴ</span>
      </>
    );
}
export default Post;