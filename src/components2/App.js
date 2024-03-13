import React,{useState} from "react";

// function App(){
//     const [ name,setname] = React.useState("Hello");
//     const [mouse,manageMouse ] =useState(false);
//     function handeClick(){
//         setname("Submitted");
//     }
//     function handleMouse(){
//         // console.log(handleMouse);
//         manageMouse(true);
//     }
//     function clickOver(){
//         manageMouse(false);
//     }
//     return(
//         <div>
//             <h1>{name}</h1>
//             <input type="text" placeholder="Whats your name" />
//             <button style={{backgroundColor:mouse ? "green" : "orange"}} 
//             onMouseOver={handleMouse} 
//             onClick={handeClick}
//             onMouseOut={clickOver}>Submit </button>
//         </div>
//     );
// }
// export default App;
//-------------------------------------------------------------------------------------------------------
// function App(){
//     const [name,setName] =React.useState("");
//     const [change,changethename] =React.useState("");
//     function handlechange(event){
//         setName(event.target.value);
//     }
//     function submit(event){
//        changethename(name);
//        event.preventDefault();
//     }
// return(
//     <div>
//         <h1>Hello {change}</h1>
//         <form>
//         <input onChange={handlechange} type="text" placeholder="Whats your name" />
//         <button type="submit" onClick={submit}>Submit </button>
//         </form>
//     </div>
// );
// }
// export default App;
//-------------------------------------------------------------------------------------------------------
// class App extends React.Component{
//     render(){
//         return(
//             <h1>hello</h1>
//         );
//     }   
// }
// export default App;
//-------------------------------------------------------------------------------------------------------
function App(){
    // const [fname,setfName] =React.useState("");
    // const [lname,setlName] =React.useState("");
    const [fullname ,setfullname] =React.useState({fname:"",lname:"",email:""});
    function handlechange(event){
        // const newvalue=event.target.value;
        // const newname=event.target.name;
        //or
        const {name,value} = event.target;
        console.log(value);
      //  setfullname(previvalue =>{
            // if(name ==="fname")
            //     return {
            //         fname: value,
            //         lname: previvalue.lname,
            //         email: previvalue.email,
            //     }
        
            // else if(name ==="lname")
            //     return {
            //         fname: previvalue.fname,
            //         lname: value,
            //         email: previvalue.email,
            //     }
            // else if(name ==="email")
            //     return {
            //         fname: previvalue.fname,
            //         lname: value,
            //         email: value,
            //     }
    //         return{
    //             ...previvalue,
    //             [name]:value
    //         };
    //     }
    //     );
    // }
    //or
      setfullname(previvalue =>({ ...previvalue,[name]:value})
        );
    }

  

return(
    <div>
        <h1>Hello {fullname.fname} {fullname.lname}</h1>
        <p>{fullname.email}</p>
        <form>
        <input 
        name="fname" 
        onChange={handlechange} 
        type="text" 
        placeholder="First name" 
        value={fullname.fname}
        />

        <input 
        name="lname" 
        onChange={handlechange} 
        type="text" 
        placeholder="last name" 
        value={fullname.lname}
        />

        <input 
        name="email" 
        onChange={handlechange} 
        type="text" 
        placeholder="Email" 
        value={fullname.email}
        />
        <button type="submit">Submit </button>
        </form>
    </div>
);
}
export default App;