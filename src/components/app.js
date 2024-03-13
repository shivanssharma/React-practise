import React from "react";
import contact from "../contacts.js";
import Card from "./card.js";
import note from "../notes.js";
import New from "./new.js";
// function createcard(contact){
//     return(
//         <Card 
//         id={contact.id}
//         key={contact.id}
//         name={contact.name} 
//         number={contact.number}
//         email={contact.email}
//         imag={contact.imgurl} />
//     );
// }
// function App(){
//     return(
//         <div className="heading">
//         <h1>Headings</h1>
//         {contact.map(createcard)}
//             {/* <Card 
//                 name={contact[0].name}
//                 number={contact[0].number}
//                 email={contact[0].email}
//                 imag={contact[0].imgurl}
//             />
//             <Card 
//                 name={contact[1].name}
//                 number={contact[1].number}
//                 email={contact[1].email}
//                 imag={contact[1].imgurl}
//             /> */}

//         </div>
//     );
// }
// export default App;
//=---------------------------------------------------------------------------
//or of above program 
// function App(){
//     return(
//         <div className="heading">
//         <h1>Headings</h1>
//         {contact.map(contact=>(
//         <Card 
//         id={contact.id}
//         key={contact.id}
//         name={contact.name} 
//         number={contact.number}
//         email={contact.email}
//         imag={contact.imgurl} />
//         ))
//     }
//         </div>
//     );
// }
// export default App;
//=---------------------------------------------------------------------------

//some other program
function App(){
     console.log(note)
    return (
        <div>
            <h1>KEEPING note</h1>
            {note.map(note=>(
            <New        
              key={note.id}  
              title={note.title}
              content={note.content}
            />    

            ))}
        </div>
    );
}
export default App;