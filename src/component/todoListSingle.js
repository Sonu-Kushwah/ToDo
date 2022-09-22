import React,{useState} from 'react'

function TodoListSingle() {
    const [inputList,setInputList]=useState("");
    const[print,setPrint]=useState([]);
    const handle=(event)=>{
        setInputList(event.target.value);
    }
    const submit=()=>{
     setPrint((oldItems)=>{
      return [...oldItems,inputList]
     })
     setInputList("");
    }
    /*remove*/
    const remove=(id)=>{
      console.log(id);
      console.log("jai mata di");
      setPrint((oldItems)=>{
        return oldItems.filter((arrElm,index)=>{
          return id!==index;
        })
      })    
    }
    return (
     <>
      <div className=''>
      <h2>Today List</h2>
        <div className=''>
          <input type="text" placeholder="enter Your Task" value={inputList} onChange={handle}/>
          <button onClick={submit}>Add</button>
          <ul>
          {
            print.map((item,index)=>{
              return(
                <>
                <li key={index}>
                <i className="fas fa-times-circle" onClick={()=>remove(index)}></i>
                {item}
                </li>
                </>
              )
            })
          }
          </ul>
        </div>
      </div>
     </>
    );
  }
export default TodoListSingle;