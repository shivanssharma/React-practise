import React from "react";
import Login from "./login";
var isloggedIn =false;

// function check(){
//         if(isloggedIn == true){
//             return(
//                 <h1>Hello </h1>
//             );
//         }
//         else{
//          <Login />
//         }

// }

// function App1(){
//     return(
//         <div>
//             {check()}
//         </div>
//     );

// }

// export default App1;

//----------------------------------------------------------------------

// const currentTime = new Date().getHours();
// console.log(currentTime);
// var userisRegistered = false;
// function App1(){
//     return(
//         //  isloggedIn == true ? <h1>Hello </h1> :<Login />   
//         //or isloggedIn  ? <h1>Hello </h1> :<Login />  
//         // currentTime > 21 ? <h1>Why are you working soo late </h1> : <Login />
//         //  currentTime < 21 && <h1>Why are you working soo late </h1> 
//         <div>
//             <Login isRegistered={userisRegistered} />
//         </div>

//     );
// }

// export default App1;

//----------------------------------------------------------------------
// var isDone=true;
// const strikeThrough={textDecoration:"line-through"};
// function App1(){
//     return(<div>
//         <p style={isDone ? strikeThrough:null}>Buy basketball</p>
//     </div>

//     );
// }
// export default App1;
//============================================================================
// function strike(){
//     document.getElementById("root").style.textDecoration="line-through";
// }
// function unstrike(){
//     document.getElementById("root").style.textDecoration=null;
// }
// function App1(){
//     return(<div>
//         <h1>Hello</h1>
//         <button onClick={strike}>click</button>
//         <button onClick={unstrike}>click to remove</button>
//         </div>
//     );
// }
// export default App1;
//============================================================================

// function App1(){
//     const [count,setCount] =React.useState(0);

//     function increase(){
//         setCount(count+1);
//     }
//     function decrease(){
//         setCount(count-1);
//     }

//     return(
//         <div>
//             <h1>{count}</h1>
//             <button onClick={increase}>+ </button>
//             <button onClick={decrease}>- </button>
//         </div>
//     );
// }
// export default App1;

//-----------------------------------------------------------------------
function App1(){
    setInterval(seeTime,100);
const now =new Date().toLocaleTimeString();
const [time,setTime] =React.useState(now);
function seeTime(){
    const newTime= new Date().toLocaleTimeString();
    setTime(newTime);
}
//console.log(seeTime);

    return(
        <div>
            <h1>{time}</h1>
            <button onClick={seeTime}>Get time</button>
        </div>
    );
}
export default App1;