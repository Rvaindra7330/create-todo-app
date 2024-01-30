import { useState } from "react";

//component for creating a todo
function FirstComponent(){
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
 return (
    <div>
        <input id="title" style={{ padding:10,margin:20}} type="text" placeholder="Enter title" onChange={function(e){
            const value= e.target.value;
            setTitle(e.target.value);
        }} /><br/><br/>
        <input id= "description" style={{ padding:10,margin:20}}type="text" placeholder="Enter description" onChange={function(e){
            setDescription(e.target.value)
        }} /> <br/><br/>
        <button onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "content-type":"application/json"
                }
            })
            .then(async function(res){
                const json= await res.json();
                alert("TO do added");
            })
        }}>Add todo</button>
     </div>
 )
}
export{
    FirstComponent
}