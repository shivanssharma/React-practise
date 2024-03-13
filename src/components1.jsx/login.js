import React from "react";
import Input from "./input"
// function Login(){
//     return(
//         <form >
//             <Input type="text" placeholder="username"/>
//             <Input type="password" placeholder="Password"/>
//             <button type="text">Submit</button>
//         </form>
//     );
// }
// export default Login;
//==============================================================================
function Login(props){
    return(
        <form >
            <Input type="text" placeholder="username"/>
            <Input type="password" placeholder="Password"/>
            {/* {props.isRegistered==false ? (<Input type="password" placeholder="Confirm Password"/>) :null} */}
            {/* {props.isRegistered==false && (<Input type="password" placeholder="Confirm Password"/>) } */}
            {!props.isRegistered && (<Input type="password" placeholder="Confirm Password"/>) }
            <button type="text">
                {props.isRegistered ? "Submit" : "Register"}
            </button>
        </form>
    );
}
export default Login;