import React from "react";

function InputArea(props){
    const [data,modifyData]= React.useState("");
    function addthat(event){
            const newValue = event.target.value;
            modifyData(newValue);
        }    
    return(
        <div className="form">
        <input onChange={addthat} type="text" value={data}/>
        <button onClick={()=>{
            props.onAdd(data);
            modifyData("");
        }}>
          <span>Add</span>
        </button>
      </div>
    );
}
export default InputArea;