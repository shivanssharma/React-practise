import React from "react";

// function Todoitem(props){
//     const [click,setclick]=React.useState(false);
//     function handleClick(){
//         setclick(prev =>{
//             return !prev;
//         });
//         }
//     return (
//     <div onClick={handleClick}>
//         <li style={{textDecoration: click ? "line-through" :null}}>{props.text}</li>
//     </div>
//     );
// }
// export default Todoitem;
//--------------------------------------------------------------------------------------------
function Todoitem(props){
    return (
    <div onClick={()=>
    {props.onchecked(props.id)}}>
        <li>{props.text}</li>
    </div>
    );
}
export default Todoitem;