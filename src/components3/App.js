import React from "react";
import Todoitem from "./todoitem.js";
import InputArea from "./inputArea.js";
function App() {
    // const [data,modifyData]= React.useState("");
     const [items,modifyItem]= React.useState([]);
    // function addthat(event){
    //     const newValue = event.target.value;
    //     modifyData(newValue);
    // }
    function handleclick(data){
        modifyItem(prev =>{
            return [...prev,data];
        });
        // modifyData("");
    }
    function deleteItem(id){
      modifyItem(prev=>{
        return items.filter((item,index)=>{
          return index !== id;
      });
      });
    }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      {/* <div className="form">
        <input onChange={addthat} type="text" value={data}/>
        <button onClick={handleclick}>
          <span>Add</span>
        </button>
      </div> */}
      <InputArea
      onAdd={handleclick}/>
      <div>
        <ul>
          {items.map((todoitem,index) =>
          <Todoitem 
            key={index}
            id={index}
            text={todoitem}
            onchecked={deleteItem}
          />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
